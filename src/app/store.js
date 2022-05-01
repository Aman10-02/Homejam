import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import heroReducer from '../features/hero/heroSlice';
import reviewReducer from '../features/review/reviewSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hero: heroReducer,
    review: reviewReducer,
  },
});
