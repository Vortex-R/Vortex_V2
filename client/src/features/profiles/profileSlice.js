import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import profileService from './profileService'

const initialState = {
  profiles: [],
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
export const updateProfile = createAsyncThunk(
  'profiles/update',
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token

      return await profileService.updateProfile(token,userData)
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

  // get all contacts
  export const getUsers = createAsyncThunk(
    'profiles/getAll',
    async (_,thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await profileService.getUsers(token)
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

  // get all contacts
  export const getOrganizer = createAsyncThunk(
    'profiles/getOrganizer',
    async (_,thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await profileService.getOrganizer(token)
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


  // showEvent
  export const showEvent = createAsyncThunk(
    'profiles/showEvent',
    async (_,thunkAPI,id) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await profileService.showEvent(token,id)
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

    // change organizer role & add event
    export const updateOrganizerRole = createAsyncThunk(
      'profiles/updateOrganizer',
      async (data,thunkAPI) => {
        try {
          console.log("slice: "+data.event);
          const token = thunkAPI.getState().auth.user.token
          return await profileService.updateUserToOrganizer(token, data)
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

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profiles.push(action.payload)
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
       })
      // .addCase(updateProfile.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(updateProfile.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.profiles = action.payload
      // })
      // .addCase(updateProfile.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
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

    .addCase(getUsers.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.profiles = action.payload
    })
    .addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(getOrganizer.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getOrganizer.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.profiles = action.payload
    })
    .addCase(getOrganizer.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    
    .addCase(showEvent.pending, (state) => {
      state.isLoading = true
    })
    .addCase(showEvent.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.event = action.payload
    })
    .addCase(showEvent.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
      
  },
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer