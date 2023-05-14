const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveLocal() {
  let jsonObj = JSON.stringify(user);
  localStorage.setItem("user",jsonObj);
}

saveLocal();