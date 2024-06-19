import createSagaMiddleware from "@redux-saga/core";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import * as sagaEffects from "redux-saga/effects";

const { all, fork, takeEvery } = sagaEffects;

const sagaMiddleware = createSagaMiddleware();
const createRootReducer = (models = []) => {
  const rootReducer = {};
  models.forEach(model => {
    // create slice with reducer
    const slice = createSlice({
      initialState: model.state,
      name: model.namespace,
      reducers: model.reducers,
    });
    rootReducer[model.namespace] = slice.reducer;
  });
  return rootReducer;
};

export const createStore = models => {
  const store = configureStore({
    reducer: createRootReducer(models),
    middleware: [sagaMiddleware],
  });

  const createRootSaga = function (models = []) {
    // collect all models effects
    const allEffects = [];
    models.forEach(model => {
      const { namespace, effects } = model;
      // wrap put to add namespace
      const wrappedPut = function* (action) {
        const { type } = action;
        if (typeof type === "string" && !type.includes("/")) {
          yield sagaEffects.put({
            ...action,
            type: `${namespace}/${type}`,
          });
        } else {
          yield sagaEffects.put(action);
        }
      };
      allEffects.push(
        ...Object.entries(effects).map(([effectName, effect]) => {
          // fork every effect
          return fork(function* () {
            // pass redux-saga/effects to a effect
            yield takeEvery(`${namespace}/${effectName}`, function* (params) {
              yield* effect(params, {
                ...sagaEffects,
                put: wrappedPut,
              });
            });
          });
        }),
      );
    });
    return function* rootSaga() {
      yield all(allEffects);
    };
  };
  sagaMiddleware.run(createRootSaga(models));
  return store;
};

