import createSagaMiddleware from "@redux-saga/core";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import * as sagaEffects from "redux-saga/effects";
import users from "../models/users";

const { all, fork, takeEvery } = sagaEffects;

const modelsList = [
  users,
]

const sagaMiddleware = createSagaMiddleware();
const createRootReducer = (models = []) => {
  const rootReducer = {};
  models.forEach(model => {
    // create slice with reducer
    const slice = createSlice({
      initialState: model.state,
      name: model.namespace,
      reducers: model.reducers,
      extraReducers: model.extraReducers,
    });
    rootReducer[model.namespace] = slice.reducer;
  });
  return rootReducer;
};

const store = configureStore({
  reducer: createRootReducer(modelsList),
  middleware: [sagaMiddleware],
});

const createRootSaga = function (models = []) {
  // collect all models effects
  const allEffects = [];
  models.forEach(model => {
    const { namespace, effects } = model;
    allEffects.push(
      ...Object.entries(effects).map(([effectName, effect]) => {
        // fork every effect
        return fork(function* () {
          // pass redux-saga/effects to a effect
          yield takeEvery(`${namespace}/${effectName}`, function* (params) {
            yield* effect(params, sagaEffects);
          });
        });
      }),
    );
  });
  return function* rootSaga() {
    yield all(allEffects);
  };
};

sagaMiddleware.run(createRootSaga(modelsList));

export default store;
