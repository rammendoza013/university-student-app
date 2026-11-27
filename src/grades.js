
const studentGrades = [
  {
    subject: "Mathematics",
    grade: 88
  },
  {
    subject: "Science",
    grade: 92
  },
  {
    subject: "English",
    grade: 85
  },
  {
    subject: "Computer Programming",
    grade: 95
  }
];

function displayGrades() {
  console.log("STUDENT GRADE REPORT");
  console.log("--------------------");

  studentGrades.forEach((item) => {
    console.log(`${item.subject}: ${item.grade}`);
  });
}

function calculateAverage() {
  const total = studentGrades.reduce(
    (sum, item) => sum + item.grade,
    0
  );

  return total / studentGrades.length;
}

function checkResult(average) {
  if (average >= 75) {
    return "PASSED";
  }

  return "FAILED";
}

displayGrades();

const average = calculateAverage();

console.log("--------------------");
console.log(`Average Grade: ${average.toFixed(2)}`);
console.log(`Result: ${checkResult(average)}`);
