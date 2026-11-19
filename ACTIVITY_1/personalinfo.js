// Personal Information
const bsit_students = {
    student1: {
        studname: "Idos, Cristine Joy K.",
        studID: "2026-6738",
        yearlevel: 2,
        program: "Information Technology"
    },
    student2: {
        studname: "Irish Mae F. Umipig",
        studID: "2026-6638",
        yearlevel: 2,
        program: "Information Technology"
    },
    student3: {
        studname: "Jonhson Isimu",
        studID: "2026-6582",
        yearlevel: 2,
        program: "Information Technology"
    },
    student4: {
        studname: "Mark Angelo M. Javier",
        studID: "2026-6941",
        yearlevel: 2,
        program: "Information Technology"
    } 
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
    student1: {
        course_1: 90,
        course_2: 85,
        course_3: 93,
        course_4: 88,
        course_5: 91,
        course_6: 87,
        course_7: 94
    },
    student2: {
        course_1: 95,
        course_2: 90,
        course_3: 91,
        course_4: 85,
        course_5: 88,
        course_6: 92,
        course_7: 96
    },
    student3: {
        course_1: 80,
        course_2: 90,
        course_3: 95,
        course_4: 82,
        course_5: 96, 
        course_6: 89,
        course_7: 85
    },
    student4: {
        course_1: 88,
        course_2: 92,
        course_3: 90,
        course_4: 85,
        course_5: 87,
        course_6: 91,
        course_7: 89
    },


};

//Calculate GWA
const gwa1 = (coursegrades.student1.course_1 + coursegrades.student1.course_2 + coursegrades.student1.course_3 + coursegrades.student1.course_4 + coursegrades.student1.course_5 + coursegrades.student1.course_6 + coursegrades.student1.course_7)/7;
const gwa2 = (coursegrades.student2.course_1 + coursegrades.student2.course_2 + coursegrades.student2.course_3 + coursegrades.student2.course_4 + coursegrades.student2.course_5 + coursegrades.student2.course_6 + coursegrades.student2.course_7)/7;
const gwa3 = (coursegrades.student3.course_1 + coursegrades.student3.course_2 + coursegrades.student3.course_3 + coursegrades.student3.course_4 + coursegrades.student3.course_5 + coursegrades.student3.course_6 + coursegrades.student3.course_7)/7;
const gwa4 = (coursegrades.student4.course_1 + coursegrades.student4.course_2 + coursegrades.student4.course_3 + coursegrades.student4.course_4 + coursegrades.student4.course_5 + coursegrades.student4.course_6 + coursegrades.student4.course_7)/7;

// Letters Grade Calculation
// Student 1 Letter Grade
let letterGrade1;

if (gwa1 >= 98 && gwa1 <= 100) {
    letterGrade1 = "A";
} else if (gwa1 >= 95 && gwa1 < 98) {
    letterGrade1 = "A-";
} else if (gwa1 >= 93 && gwa1 < 95) {
    letterGrade1 = "B+";
}else if (gwa1 >= 89 && gwa1 < 93) {
    letterGrade1 = "B-";
} else if (gwa1 >= 86 && gwa1 < 89) {
    letterGrade1 = "B";
} else if (gwa1 >= 82 && gwa1 < 86) {
    letterGrade1 = "C";
} else if (gwa1 >= 79 && gwa1 < 82) {
    letterGrade1 = "C-";
} else if (gwa1 >= 75 && gwa1 < 79) {
    letterGrade1 = "D";
}else {
    letterGrade1 = "F";
}

// Student 2 Letter Grade
let letterGrade2;

if (gwa2 >= 98 && gwa2 <= 100) {
    letterGrade2 = "A";
} else if (gwa2 >= 95 && gwa2 < 98) {
    letterGrade2 = "A-";
} else if (gwa2 >= 93 && gwa2 < 95) {
    letterGrade2 = "B+";
}else if (gwa2 >= 89 && gwa2 < 93) {
    letterGrade2 = "B-";
} else if (gwa2 >= 86 && gwa2 < 89) {
    letterGrade2 = "B";
} else if (gwa2 >= 82 && gwa2 < 86) {
    letterGrade2 = "C";
} else if (gwa2 >= 79 && gwa2 < 82) {
    letterGrade2 = "C-";
} else if (gwa2 >= 75 && gwa2 < 79) {
    letterGrade2 = "D";
}else {
    letterGrade2 = "F";
}

// Student 3 Letter Grade
let letterGrade3;

if (gwa3 >= 98 && gwa3 <= 100) {
    letterGrade3 = "A";
} else if (gwa3 >= 95 && gwa3 < 98) {
    letterGrade3 = "A-";
} else if (gwa3 >= 93 && gwa3 < 95) {
    letterGrade3 = "B+";
}   else if (gwa3 >= 89 && gwa3 < 93) {
    letterGrade3 = "B-";
} else if (gwa3 >= 86 && gwa3 < 89) {
    letterGrade3 = "B";
} else if (gwa3 >= 82 && gwa3 < 86) {
    letterGrade3 = "C";
} else if (gwa3 >= 79 && gwa3 < 82) {
    letterGrade3 = "C-";
} else if (gwa3 >= 75 && gwa3 < 79) {
    letterGrade3 = "D";
} else {
    letterGrade3 = "F";
}

// Student 4 Letter Grade
let letterGrade4;

if (gwa4 >= 98 && gwa4 <= 100) {
    letterGrade4 = "A";
} else if (gwa4 >= 95 && gwa4 < 98) {
    letterGrade4 = "A-";
} else if (gwa4 >= 93 && gwa4 < 95) {
    letterGrade4 = "B+";
}   else if (gwa4 >= 89 && gwa4 < 93) {
    letterGrade4 = "B-";
} else if (gwa4 >= 86 && gwa4 < 89) {
    letterGrade4 = "B";
} else if (gwa4 >= 82 && gwa4 < 86) {
    letterGrade4 = "C";
} else if (gwa4 >= 79 && gwa4 < 82) {
    letterGrade4 = "C-";
} else if (gwa4 >= 75 && gwa4 < 79) {
    letterGrade4 = "D";
} else {
    letterGrade4 = "F";
}

// Display Student Information
// Student 1 Information
console.log("===== Student 1 Information =====");
console.log("Name: " + bsit_students.student1.studname);
console.log("ID: " + bsit_students.student1.studID);
console.log("Year Level: " + bsit_students.student1.yearlevel);
console.log("Program: " + bsit_students.student1.program);

console.log("===== Enrolled Courses =====");
console.log("1. " + enrolledcourses.course_1);
console.log("2. " + enrolledcourses.course_2);
console.log("3. " + enrolledcourses.course_3);
console.log("4. " + enrolledcourses.course_4);
console.log("5. " + enrolledcourses.course_5);
console.log("6. " + enrolledcourses.course_6);
console.log("7. " + enrolledcourses.course_7);

console.log("===== Letter Grade =====");
console.log("Letter Grade: " + letterGrade1);
console.log("===== General Weighted Average (GWA) =====");
console.log("GWA: " + gwa1);
console.log("=====================================");
console.log(" ");

// Student 2 Information
console.log("===== Student 2 Information =====");
console.log("Name: " + bsit_students.student2.studname);
console.log("ID: " + bsit_students.student2.studID);
console.log("Year Level: " + bsit_students.student2.yearlevel);
console.log("Program: " + bsit_students.student2.program);

console.log("===== Enrolled Courses =====");
console.log("1. " + enrolledcourses.course_1);
console.log("2. " + enrolledcourses.course_2);
console.log("3. " + enrolledcourses.course_3);
console.log("4. " + enrolledcourses.course_4);
console.log("5. " + enrolledcourses.course_5);
console.log("6. " + enrolledcourses.course_6);
console.log("7. " + enrolledcourses.course_7);

console.log("===== Letter Grade =====");
console.log("Letter Grade: " + letterGrade2);
console.log("===== General Weighted Average (GWA) =====");
console.log("GWA: " + gwa2);
console.log("=====================================");
console.log(" ");

// Student 3 Information
console.log("===== Student 3 Information =====");
console.log("Name: " + bsit_students.student3.studname);
console.log("ID: " + bsit_students.student3.studID);
console.log("Year Level: " + bsit_students.student3.yearlevel);
console.log("Program: " + bsit_students.student3.program);

console.log("===== Enrolled Courses =====");
console.log("1. " + enrolledcourses.course_1);
console.log("2. " + enrolledcourses.course_2);
console.log("3. " + enrolledcourses.course_3);
console.log("4. " + enrolledcourses.course_4);
console.log("5. " + enrolledcourses.course_5);
console.log("6. " + enrolledcourses.course_6);
console.log("7. " + enrolledcourses.course_7);

console.log("===== Letter Grade =====");
console.log("Letter Grade: " + letterGrade3);
console.log("===== General Weighted Average (GWA) =====");
console.log("GWA: " + gwa3);
console.log("=====================================");
console.log(" ");

// Student 4 Information
console.log("===== Student 4 Information =====");
console.log("Name: " + bsit_students.student4.studname);
console.log("ID: " + bsit_students.student4.studID);
console.log("Year Level: " + bsit_students.student4.yearlevel);
console.log("Program: " + bsit_students.student4.program);

console.log("===== Enrolled Courses =====");
console.log("1. " + enrolledcourses.course_1);
console.log("2. " + enrolledcourses.course_2);
console.log("3. " + enrolledcourses.course_3);
console.log("4. " + enrolledcourses.course_4);
console.log("5. " + enrolledcourses.course_5);
console.log("6. " + enrolledcourses.course_6);
console.log("7. " + enrolledcourses.course_7);

console.log("===== Letter Grade =====");
console.log("Letter Grade: " + letterGrade4);
console.log("===== General Weighted Average (GWA) =====");
console.log("GWA: " + gwa4);
console.log("=====================================");
console.log(" ");