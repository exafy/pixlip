export const newUser = "pixlipUser";
export const setNewUser = () => {
  localStorage.setItem(newUser, JSON.stringify(true));
};
export const getNewUser = () => {
  JSON.parse(localStorage.getItem(newUser) ?? "false");
};
