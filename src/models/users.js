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
          type: "users/getUserSuccessAction",
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
          type: "users/getUserErrorAction",
          payload: error,
        });
      }
    },
  },
  extraReducers: {
    update: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
  reducers: {
    /* This action will trigger our saga middleware
       and set the loader to true and reset error message.
    */
    getUserAction: (state, { payload: id }) => {
      state.user.isLoading = true;
      state.user.errors = "";
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
