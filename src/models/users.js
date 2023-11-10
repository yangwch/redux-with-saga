import { delay } from "../utils/util";

const Model = {
  namespace: "users",
  state: {
    user: {
      data: null,
      isLoading: true,
      errors: "",
    },
  },
  effects: {
    *getUserByIdAction(_, { call, put, select }) {
      try {
        yield call(delay, 1000);
        const { user } = yield select(state => state.users);
        // You can also export the axios call as a function.
        const response = { id: "user", name: "Jone" };
        yield put({
          type: "update",
          payload: {
            user: {
              ...user,
              data: response,
              isLoading: false,
            },
          },
        });
      } catch (error) {
        yield put({
          type: "getUserErrorAction",
          payload: error,
        });
      }
    },
  },
  reducers: {
    update: (state, { payload }) => {
      if (typeof payload === "object" && payload.constructor === Object) {
        const entries = Object.entries(payload);
        if (entries.length) {
          entries.forEach(([key, value]) => {
            state[key] = value;
          });
        }
      }
    },
    getUserSuccessAction: (state, { payload }) => {
      state.user = payload.user;
    },
    getUserErrorAction: (state, { payload: error }) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
  },
};

export default Model;
