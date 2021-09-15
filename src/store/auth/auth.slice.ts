import {TokenT, UserI} from '@/models/auth.interface';
import {ThemeVariantT} from '@/theme/theme';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  token: TokenT;
  theme: ThemeVariantT;
  user: UserI;
}

const initialState: AuthState = {
  token: null,
  theme: 'light',
  user: {
    name: '',
    id: '',
    city: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeVariantT>) => {
      state.theme = action.payload;
    },
    setToken: (state, action: PayloadAction<TokenT>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<UserI>) => {
      state.user = action.payload;
    },
  },
});

export const {setToken, setTheme, setUser} = authSlice.actions;
export default authSlice.reducer;
