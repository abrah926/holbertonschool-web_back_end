
export default function getListStudentIds(student){
    if(!Array.isArray(student)){
        return [];
    }
    return student.map(item => item.id);
}
