export const getData = () => {
  const data = localStorage.getItem("todoStore");
  if (!data) {
    return false;
  } else {
    return JSON.parse(data);
  }
};

export const saveData = (data) => {
  const str = JSON.stringify(data);
  return localStorage.setItem("todoStore", str);
};
