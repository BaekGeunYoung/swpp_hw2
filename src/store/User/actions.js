export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const logIn = (username, password) => {
  return {
    type: LOG_IN,
    username,
    password,
  }
}

export const logOut = () => {
  return {
    type: LOG_OUT,
  }
}
