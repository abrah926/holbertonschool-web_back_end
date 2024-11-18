
export default function updateStudentGradeByCity (students, city, newGrades) {
    return students.filter(student => student.location === city)
       .map(student => {
            const bestGrade = newGrades.find(grade => grade.studentId === student.id);
            if (bestGrade) {
                student.grade = bestGrade.grade;
            }
            else student.grade = "N/A";
            return student;

        });
}