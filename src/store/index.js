import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from './slices/trainerName.Slice';

const  store = configureStore({
   reducer: {
    nameTrainer
    }
})
export default store