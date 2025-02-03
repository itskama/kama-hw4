
interface Student {
  id: number;
  name: string;
  age: number;
  grades: number[];
  hobby?: string;
}


const students: Student[] = [
  { id: 1, name: "Салих", age: 18, grades: [85, 90, 78], hobby: "игры" },
  { id: 2, name: "Мария", age: 22, grades: [88, 92, 79] },
  { id: 3, name: "Элхан", age: 13, grades: [95, 87, 91], hobby: "хоббихорсинг" },
  { id: 4, name: "Тилек", age: 11, grades: [80, 85, 88] },
  { id: 5, name: "Сардар", age: 14, grades: [70, 75, 72], hobby: "боулинг(буллинг)" }
];


function addStudent(student: Student): void {
  if (students.some(s => s.id === student.id)) {
    console.log(`Ошибка: Студент с id ${student.id} уже существует.`);
    return;
  }
  students.push(student);
  console.log(`Студент ${student.name} успешно добавлен.`);
}


function findTopStudent(students: Student[]): Student | null {
  if (students.length === 0) return null;
  return students.reduce((topStudent, current) =>
    current.grades.length > topStudent.grades.length ? current : topStudent
  );
}

function updateStudentHobby(id: number, newHobby: string): void {
  const student = students.find(s => s.id === id);
  if (!student) {
    console.log(`Ошибка: Студент с id ${id} не найден`);
    return;
  }
  student.hobby = newHobby;
  console.log(`Хобби студента ${student.name} обновлено на: ${newHobby} `);
}


console.log("Исходный список студентов:", students);


addStudent({ id: 6, name: "Екатерина", age: 20, grades: [89, 91, 94], hobby: "Рисование" });

addStudent({ id: 1, name: "Петр", age: 21, grades: [80, 85, 78] });

const topStudent = findTopStudent(students);
console.log("Лучший студент, гений болгонго:", topStudent);


updateStudentHobby(3, "Баскетбол");

updateStudentHobby(10, "Плавание");


console.log("Обновленный список студентов:", students);
