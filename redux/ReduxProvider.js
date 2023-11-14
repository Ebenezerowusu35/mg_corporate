import { persistStore } from "redux-persist";
import { store } from "./store";
import { Provider } from "react-redux";
import React from "react";

persistStore(store);

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
