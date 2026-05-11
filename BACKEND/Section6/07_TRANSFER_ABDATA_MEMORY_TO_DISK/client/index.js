fetch("http://localhost:3000")
  .then((res) => res.arrayBuffer())
  .then((data) => console.log(data));
