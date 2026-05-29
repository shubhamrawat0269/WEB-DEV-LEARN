fetch("http://localhost:4000/")
  .then((res) => res.text())
  .then((data) => console.log(data));
