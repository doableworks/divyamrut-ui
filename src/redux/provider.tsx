"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

// Define the type for the children prop
interface ReduxProviderProps {
  children: ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps): JSX.Element {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
