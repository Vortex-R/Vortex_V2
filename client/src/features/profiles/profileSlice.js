import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import profileService from './profileService'

const initialState = {
  profiles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

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
          const token = thunkAPI.getState().auth.user.token;
          return await profileService.updateUserToOrganizer(token, data);
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
    

  },
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer