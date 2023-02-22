var students = [
  { name: "Badal  ", id: "D22IT193", marks: [80, 90, 85] },
  { name: "Gautam ", id: "D22IT194", marks: [70, 75, 80] },
  { name: "Rohit  ", id: "D22IT195", marks: [90, 85, 95] },
];

let tableBody = document.getElementById("student-table-body");

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  let totalMarks = student.marks.reduce(function (a, b) {
    return a + b;
  });
  let percentage = (totalMarks / (student.marks.length * 100)) * 100;

  // Create a new row for the student
  let row = document.createElement("tr");
  let nameCell = document.createElement("td");
  let idCell = document.createElement("td");

  let marksCells = [];
  let percentageCell = document.createElement("td");

  // Add the student data to the row
  nameCell.innerHTML = student.name;
  idCell.innerHTML = student.id;

  for (let j = 0; j < student.marks.length; j++) {
    let marksCell = document.createElement("td");
    marksCell.innerHTML = student.marks[j];
    marksCells.push(marksCell);
  }
  percentageCell.innerHTML = percentage.toFixed(2) + "%";

  // Add the cells to the row
  row.appendChild(nameCell);
  row.appendChild(idCell);
  for (let j = 0; j < marksCells.length; j++) {
    row.appendChild(marksCells[j]);
  }
  row.appendChild(percentageCell);

  // Add the row to the table body
  tableBody.appendChild(row);
}