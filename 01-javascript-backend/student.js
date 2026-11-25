let name;
let age;
let department;
let year;

const getStudentInfo = (student) => {
  return {
    name: student.name,
    age: student.age,
    department: student.department,
    year: student.year,
  };
};

const students = [
  { name: "Yasmin", age: 23, year: 4, department: "Software Engineering" },
  { name: "Hanan", age: 22, year: 3, department: "Architecture" },
  { name: "Ali", age: 24, year: 5, department: "Pharmacy" },
];

const isFourth = (student) => {
  return student.year === 4;
};

students.forEach((student) => {
  console.log(getStudentInfo(student));
  console.log(`Is this student a fourth year student? ${isFourth(student)}`);
});
