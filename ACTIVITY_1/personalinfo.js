// Personal Information
const studentProfile = {
    studname: "Idos, Cristine Joy K.",
    studID: "2026-6738",
    yearlevel: 2,
    program: "Information Technology",
};

//Enrolled Courses
const enrolledcourses = {
   course_1: "Networking 1",
   course_2: "IPT",
   course_3: "EDP",
   course_4: "AppDev",
   course_5: "Arts Appreciation",
   course_6: "PathFit 4",
   course_7: "Sciesce, Technology, and Society",
};

//Grade for each course
const coursegrades = {
    course_1: 90,
    course_2: 85,
    course_3: 93,
    course_4: 88,
    course_5: 91,
    course_6: 87,
    course_7: 94
};

//Calculate GWA
 const gwa = (coursegrades.course_1 + coursegrades.course_2 + coursegrades.course_3 + coursegrades.course_4 + coursegrades.course_5 + coursegrades.course_6 + coursegrades.course_7)/7;


if (gwa > 100) {
    letterGrade = "A";
} else if (gwa > 97) {
    letterGrade = "A-";
} else if (gwa > 93) {
    letterGrade = "B+";
}else if (gwa > 89) {
    letterGrade = "B-";
} else if (gwa > 86) {
    letterGrade = "B";
} else if (gwa > 82) {
    letterGrade = "C";
} else if (gwa > 79) {
    letterGrade = "C-";
} else if (gwa > 76) {
    letterGrade = "D";
}else {
    letterGrade = "F";
}

console.log("===== Student Information =====");
console.log("Name: " + studentProfile.studname);
console.log("ID: " + studentProfile.studID);
console.log("Year Level: " + studentProfile.yearlevel);
console.log("Program: " + studentProfile.program);

console.log("===== Enrolled Courses =====");
console.log("1. " + enrolledcourses.course_1);
console.log("2. " + enrolledcourses.course_2);
console.log("3. " + enrolledcourses.course_3);
console.log("4. " + enrolledcourses.course_4);
console.log("5. " + enrolledcourses.course_5);
console.log("6. " + enrolledcourses.course_6);
console.log("7. " + enrolledcourses.course_7);

console.log("===== Letter Grade =====");
console.log("Letter Grade: " + letterGrade);
console.log("===== General Weighted Average (GWA) =====");
console.log("GWA: " + gwa);