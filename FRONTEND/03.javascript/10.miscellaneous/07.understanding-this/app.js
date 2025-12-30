// this keyword

// this keyword is used to reference something like an object
this.name = 'Abraham';
// var name = 'Abraham';
this.profession = 'Frontend Developer';
let user = {
    name: 'John',
    age: 30,
    profession: 'Web Developer',
    greet: function() {
        const nestedArrow = () => console.log(this.profession);
        // console.log('Hello, my name is ' + this.name);
        nestedArrow();
    },
    greetMessage: () => {
        console.log('Hello, my name is ' + this.name);
    }
}

user.greet();
// user.greetMessage();

