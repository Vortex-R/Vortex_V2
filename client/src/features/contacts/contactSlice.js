import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contactService from './contactService'

const initialState = {
  contacts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// add contact by user
export const createContact = createAsyncThunk(
  'contact/createContact',
  async (contactData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await contactService.createContact(contactData)
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


// Get user goals
export const getContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      
      return await contactService.getContacts();
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

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contacts.push(action.payload)
      })
  
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
    
      
  },
})

export const { reset } = contactSlice.actions
export default contactSlice.reducer