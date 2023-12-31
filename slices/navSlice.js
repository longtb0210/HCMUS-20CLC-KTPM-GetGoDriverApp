import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfomation: null,
  tripDetails: null,
  inforDriver: null,
  notifChat: true,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfomation: (state, action) => {
      state.travelTimeInfomation = action.payload;
    },
    setTripDetails: (state, action) => {
      state.tripDetails = action.payload;
    },
    setInforDriver: (state, action) => {
      state.inforDriver = action.payload;
    },
    setNotifChat: (state, action) => {
      state.notifChat = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setTravelTimeInfomation,
  setTripDetails,
  setInforDriver,
  setNotifChat,
} = navSlice.actions;

// Selectors
export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectTravelTimeInfomation = state =>
  state.nav.travelTimeInfomation;
export const selectTripDetails = state => state.nav.tripDetails;
export const selectInforDriver = state => state.nav.inforDriver;
export const selectNotifChat = state => state.nav.notifChat;

export default navSlice.reducer;
