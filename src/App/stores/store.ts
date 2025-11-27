import { configureStore } from "@reduxjs/toolkit";
import { currentReducer } from "./current";
import ressourcesReducer, { loadRessources } from "./ressources";

export const store = configureStore({
  reducer: { current: currentReducer, ressources: ressourcesReducer },
});

store.dispatch(loadRessources());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
