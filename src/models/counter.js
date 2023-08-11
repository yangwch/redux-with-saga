
const Model = {
  namespace: "counter",
  state: {
    current: 0
  },
  effects: {
    *increment(_, { call, put }) {
      
    },
  },
  reducers: {
    update: (state, { payload }) => {
      state.current = payload
    }
  },
};

export default Model;
