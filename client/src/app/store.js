import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice'
import contactReducer from '../features/contacts/contactSlice'
import profileReducer from '../features/profiles/profileSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    contacts: contactReducer,
    profiles: profileReducer,
    event: profileReducer,
    organizer: profileReducer,
  },
});
