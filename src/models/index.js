import counter from "./counter";
import users from "./users";
import { createStore } from "./_initial";

const models = [counter, users];

const store = createStore(models);

export default store;