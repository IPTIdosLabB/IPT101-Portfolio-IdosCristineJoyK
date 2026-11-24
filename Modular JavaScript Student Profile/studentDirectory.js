const studentRecord = {
    name: "Cristine Joy K. Idos",
    id: 6738,
    program: "BSIT",
    yearlevel: "2",
    schoolYear: "2026-2027",

    getEnrollmentDetails(semester, campus) {
        return `[${this.schoolYear} | ${semester}] Student ${this.name} (ID: ${this.id}) from ${this.program} (${this.yearlevel}) is registered at ${campus}.`;
    }
};

console.log(studentRecord.getEnrollmentDetails("2nd Semester", "NLAC"));