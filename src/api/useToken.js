export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const delToken = () => {
  localStorage.removeItem('token');
  // location.href = location.href.replace(/(http:\/\/localhost:3000).*/, '$1');
};
