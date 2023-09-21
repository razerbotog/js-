const course = {
    cousename: "Javascript",
    price: "999",
    courseInstructor: "Arif"
}
console.log(course.courseInstructor); //Arif

// object Destructring
const {courseInstructor} = course;
const {courseInstructor: instructor} = course;
console.log(courseInstructor); //Arif
console.log(instructor); //Arif

// ------
// JSON (JavaScript Object Notation) is a lightweight data-interchange format
// {
//     "cousename": "Javascript",
//     "price": "999",
//     "courseInstructor": "Arif"
// }

[
    {},
    {},
    {}
]