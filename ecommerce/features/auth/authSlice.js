import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: null,
    //password:null
    /*value:{
        email:"",pass:""
    } */
}

export const AuthSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload
            //state.email=action.payload para pober otro mas

        },
        clearUser: (state) => {
            state.email = ""
            //state.value.email

        }
    }
})

export const { setUser, clearUser } = AuthSlice.actions;
export default AuthSlice.reducer