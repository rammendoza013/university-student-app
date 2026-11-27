const classes = [
  {
    subject: "Mathematics",
    time: "8:00 AM",
    classroom: "Room 201",
    instructor: "Ms. Santos"
  },
  {
    subject: "Science",
    time: "10:00 AM",
    classroom: "Room 305",
    instructor: "Mr. Cruz"
  }
];

function displaySchedule() {
  console.log("Today's Class Schedule");

  classes.forEach((classItem) => {
    console.log(
      `${classItem.subject} - ${classItem.time} - ${classItem.classroom}`
    );
  });
}

displaySchedule();
