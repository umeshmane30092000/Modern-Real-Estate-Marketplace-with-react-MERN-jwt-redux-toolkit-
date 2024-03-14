import {createSlice} from '@reduxjs/toolkit'

// create inital state for user 
const initialState = {
    currentUser:null, 
    error:null,
    loading:false,
};

// now create a userSlice whihc is reducer and also create diffrent reducersactins

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
        },
        signInSuccess:(state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state , action) => {
            state.error = action.payload;
            state.loading = false;
        }

    }
});

export const {signInStart , signInSuccess , signInFailure} = userSlice.actions;
export default userSlice.reducer;