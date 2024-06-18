const Model = {
  namespace: "counter",
  state: {
    current: 0,
  },
  effects: {
    *increment(_, { call, put, select }) {
      const { current } = yield select(state => state.counter);
      yield put({
        type: "update",
        payload: {
          current: current + 1,
        },
      });
    },
    *decrement(_, { call, put, select }) {
      const { current } = yield select(state => state.counter);
      yield put({
        type: "update",
        payload: {
          current: current - 1,
        },
      });
    },
  },
  reducers: {
    update: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default Model;
