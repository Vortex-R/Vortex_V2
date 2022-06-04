import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './authService'

//get user from localStorage if connected
const user = JSON.parse(localStorage.getItem('user'))

// //get user from localStorage if connected
// let user = JSON.parse(localStorage.getItem("user"));
// if (user) {
//   authService.getUserData(user.result._id).then((response) => {
//     return localStorage.setItem("user2", JSON.stringify(response.data));
//   });
// }
// user = JSON.parse(localStorage.getItem("user2"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};



// Register user
export const register = createAsyncThunk('auth/register', 
    async(user, thunkAPI)=> {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data 
            && error.response.data.message) || error.message 
            || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Login user
export const login = createAsyncThunk('auth/login', 
    async(user, thunkAPI)=> {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data 
            && error.response.data.message) || error.message 
            || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


// Logout user
export const logout = createAsyncThunk('auth/logout', async() => {
    await authService.logout()
})

// add contact by user
export const contact = createAsyncThunk(
    'auth/contact',
    async (contactData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.contact(contactData, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

//   // get all contacts
//   export const getGoals = createAsyncThunk(
//     'goals/getAll',
//     async (_, thunkAPI) => {
//       try {
//         const token = thunkAPI.getState().auth.user.token
//         return await authService.getContacts(token)
//       } catch (error) {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString()
//         return thunkAPI.rejectWithValue(message)
//       }
//     }
//   )


export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })


            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }       
})

export const {reset} = authSlice.actions
export default authSlice.reducer