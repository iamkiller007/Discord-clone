import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        channelId: null,
        channelName: null,
    },
    /*reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.app = null;
        }
    },
    */
    reducers: {
        setchannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;


        },
    },
});

export const { setchannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;