// map, filter & reduce

let nums1 = [1,2,3,4,5,6];
let nums2 = nums1.map((x) => x**2);
let nums3 = nums1.filter((x) => x%2 == 0);
let nums4 = nums1.reduce((acc,curr,index,arr) => acc + curr,0);

// console.log(nums2);
// console.log(nums3);
// console.log(nums4);

// Polyfills for map()

Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}



// Polyfills for filter()

Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

// Polyfill of reduce

Array.prototype.myReduce = function (callback, initialValue) {
    var acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? callback(acc, this[i], i, this) : this[0];
    }
    return acc;
}

// console.log(nums1.myMap((x) => x**2));  
// console.log(nums1.myFilter((x) => x%2 == 0));
// console.log(nums1.myReduce((acc,curr,index,arr) => acc + curr,0));


let students = [
    {name: "John", age: 25, marks: 80},
    {name: "Jane", age: 22, marks: 30},
    {name: "Jack", age: 27, marks: 70},
    {name: "Jill", age: 24, marks: 20}
]

let studentsWithMoreThan60 = students.filter((student) => student.marks > 60 && student.age > 24);
// console.log(studentsWithMoreThan60);

let totalMarks = students.reduce((totalMarks,student) => totalMarks + student.marks, 0)
// console.log(totalMarks);

let namesofStudentScoreMoreThan60 = students.filter((student) => student.marks > 60).map((student) =>student.name);
// console.log(namesofStudentScoreMoreThan60);

let studentsWithGraceMarksOf20 = students.map((student) => {
    if(student.marks < 60) student.marks += 20 
    return student;
}).filter((student) => student.marks > 60).reduce((totalMarks, student) => totalMarks + student.marks, 0);
console.log(studentsWithGraceMarksOf20);


