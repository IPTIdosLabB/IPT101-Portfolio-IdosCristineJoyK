function createStudentProfile(name, id, program, yearlevel, schoolYear) {
    return {
        name: name,
        id: id,
        program: program,
        yearlevel: yearlevel,
        schoolYear: schoolYear
    };
} 

const myProfile = createStudentProfile (
    "Cristine Joy K. Idos",
    6738,
    "BSIT",
    "2",
    "2026-2027"
);

console.log(myProfile);