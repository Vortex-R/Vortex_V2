import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contactService from './contactService'

const initialState = {
  contacts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
// export const createGoal = createAsyncThunk(
//   'goals/create',
//   async (goalData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await goalService.createGoal(goalData, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Get user goals
export const getContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await contactService.getContacts(token)
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

// // Delete user goal
// export const deleteGoal = createAsyncThunk(
//   'goals/delete',
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await goalService.deleteGoal(id, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// // user participate to event
// export const chooseEvent = createAsyncThunk(
//   'goals/choose',
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await goalService.chooseEvent(id, token)
      
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }

// )

//   // get all contacts
//   export const getContacts = createAsyncThunk(
//     'goals/getAll',
//     async (_, thunkAPI) => {
//       try {
//         const token = thunkAPI.getState().auth.user.token
//         return await goalService.getContacts(token)
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

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(createGoal.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(createGoal.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.goals.push(action.payload)
    //   })
    //   .addCase(createGoal.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
      .addCase(getContacts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contacts = action.payload
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    //   .addCase(deleteGoal.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(deleteGoal.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.goals = state.goals.filter(
    //       (goal) => goal._id !== action.payload.id
    //     )
    //   })
    //   .addCase(deleteGoal.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })

    //   .addCase(chooseEvent.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(chooseEvent.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.goals = state.goals.filter(
    //       (goal) => goal._id !== action.payload.id
    //     )
    //   })
    //   .addCase(chooseEvent.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })

    
      
  },
})

export const { reset } = contactSlice.actions
export default contactSlice.reducer