const students = [
  { id: 1, name: "Yasmin", department: "Software Engineering", year: 4 },
  { id: 2, name: "Abebe", department: "Computer Science", year: 3 },
  { id: 3, name: "Sara", department: "Software Engineering", year: 2 },
  { id: 4, name: "Ahmed", department: "Information Technology", year: 4 },
];

const getAllStudents = () => {
  return students;
};

const getStudentById = (id) => {
  return students.find((student) => student.id === id);
};

const getStudentsByDepartment = (department) => {
  return students.filter((student) => student.department === department);
};

const getFourthYearStudents = () => {
  return students.filter((student) => student.year === 4);
};

const addStudent = (student) => {
  const alreadyExists = students.some(
    (existingStudent) => existingStudent.id === student.id,
  );

  if (alreadyExists) {
    return {
      success: false,
      message: "A student with this ID already exists.",
    };
  }

  students.push(student);

  return {
    success: true,
    message: "Student added successfully.",
    student: student,
  };
};

const deleteStudent = (id) => {
  const index = students.findIndex((student) => student.id === id);

  if (index === -1) {
    return {
      success: false,
      message: "Student not found.",
    };
  }

  const deletedStudent = students.splice(index, 1);

  return {
    success: true,
    message: "Student deleted successfully.",
    student: deletedStudent[0],
  };
};

const updateStudent = (id, data) => {
  const student = students.find((student) => student.id === id);

  if (!student) {
    return {
      success: false,
      message: "Student not found.",
    };
  }

  Object.assign(student, data);

  return {
    success: true,
    message: "Student updated successfully.",
    student: student,
  };
};
