const obj = {
  name: "Shubham",
  greet: function () {
    console.log(this.name);
  },
};

const fn = obj.greet;

fn();
