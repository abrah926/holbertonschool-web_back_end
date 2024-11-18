export default function getStudentsByLocation(student, city) {
    if (!Array.isArray(student)) {
        throw new Error("Invalid input: student must be an array");
    }

    if (typeof city !== "string") {
        throw new Error("Invalid input: city must be a string");
    }


    return students.filter(student => student.location === city);
}