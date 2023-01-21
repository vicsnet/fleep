import { createSlice } from "@reduxjs/toolkit";


const createEventSlice = createSlice({
  name: "createEventSlice",
  initialState: {
    eventTitle: "",
    eventCategory:"",
    eventType:"",
    date:"",
    monitizePhoto: "",
    price:"",
    venue:"",
    eventBrandWatermark:"",
    eventCustomCoverPhoto:"",


    open: true,
    error: "",
    loading: false,
  },

  reducers: {
    openEvent: (state, action) => {
      state.open = action.payload;
    },

    closeEvent: (state, action) => {
      state.open = !action.payload;
    },

    createEvent: (state, action) => {
      state.eventTitle = action.payload.eventTitle
      state.eventCategory = action.payload.eventCategory
      state.eventType = action.payload.eventType
      state.date = action.payload.date
      state.monitizePhoto = action.payload.monitizePhoto
      state.price = action.payload.price
      state.venue = action.payload.venue
      state.eventBrandWatermark = action.payload.eventBrandWatermark
      state.eventCustomCoverPhoto = action.payload.eventCustomCoverPhoto
    }
  },
});

export const { openEvent, closeEvent, createEvent } = createEventSlice.actions;

export default createEventSlice.reducer;
