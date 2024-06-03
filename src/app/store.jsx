import { configureStore } from '@reduxjs/toolkit';
import shipsReducer from '../features/ships/shipsSlice';

export const store = configureStore({
  reducer: {
    ships: shipsReducer,
  },
});
