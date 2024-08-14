import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : {
        displayName : '',
        email : '',
        emailVerified : '' ,
        photoURL : '',
    }
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers : {
        addUserToRedux : (state, action) => {
            state.user = action?.payload ;
        },
        // addNewSession : (state, action) => {
        //     state.userSession = action.payload
        // }
    }
})



export const { addUserToRedux } = userSlice.actions;
export default userSlice.reducer;