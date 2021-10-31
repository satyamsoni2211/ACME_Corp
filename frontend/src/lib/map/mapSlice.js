import { createSlice } from "@reduxjs/toolkit"

export const mapSlice = createSlice({
    name: "map",
    initialState: {
        selectedState: null,
        selectedAircraft: null,
        dataLoading: null,
    },
    reducers: {
        selectedState: (state, action) => {
            console.log(action, state)
            return {
                ...state,
                selectedState: action.payload
            }
        },
        clearState: (state) => {
            return {
                ...state,
                selectedState: null
            }
        },
        setAircraft: (state, action) => {
            return {
                ...state,
                selectedAircraft: action.payload
            }
        },
        clearAircraft: (state) => {
            return {
                ...state,
                selectedAircraft: null
            }
        }
    }
})
export const mapSliceActions = mapSlice.actions;
export default mapSlice.reducer;