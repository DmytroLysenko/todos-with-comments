export const getData = () => {
  console.log("Getting data");
  const data = localStorage.getItem("todoStore");
  if (!data) {
    return false;
  } else {
    return JSON.parse(data);
  }
};

export const saveData = (data) => {
  console.log("Saving data", data);
  const str = JSON.stringify(data);
  return localStorage.setItem("todoStore", str);
};
