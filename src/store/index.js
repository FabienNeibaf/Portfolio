import { createStore } from 'redux';

export const toggleTheme = (theme) => ({ type: theme === 'dark' ? 'LIGHT' : 'DARK' });

const theme = (state = 'dark', action) => {
  switch (action.type) {
    case 'DARK': return 'dark';
    case 'LIGHT': return 'light';
    default: return state;
  }
};

const store = createStore(theme);

export default store;
