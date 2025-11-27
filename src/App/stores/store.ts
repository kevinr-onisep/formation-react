import { configureStore } from "@reduxjs/toolkit";
import { currentReducer, update } from "./current";
import { emptyMeme } from "orsys-tjs-meme";
import ressourcesReducer, { loadRessources } from "./ressources";

export const store = configureStore({ reducer: { current: currentReducer, ressources: ressourcesReducer } });

store.subscribe(() => {
  console.log("%c%s", "font-size:24pt;color:tomato", "changement d'état");

  console.log(store.getState());
});

store.dispatch(loadRessources());
