import { configureStore } from "@reduxjs/toolkit";
import mapSliceReducer from "./lib/map/mapSlice";

export default configureStore(
    {
        reducer: {
            map: mapSliceReducer
        }
    }
)