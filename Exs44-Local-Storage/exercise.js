const user = {
  id: 1,
  name: "John",
  age: 25,
};

function loadLocal() {
  let jsonObj = localStorage.getItem("user");
  let obj = JSON.parse(jsonObj);
  console.log(obj);
}

loadLocal();