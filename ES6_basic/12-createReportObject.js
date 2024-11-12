import employeesList from './11-createEmployeesObject';

function getNumberOfDepartments() {
  return Object.keys(employeesList).length;
}

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments,
  };
}
