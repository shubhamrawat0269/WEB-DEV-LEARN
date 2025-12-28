const math = require('./math');

const employee = math.getEmployee(1);
console.log("Employee 1:", employee.name);

if (employee) {
    const projects = math.getProjects(employee.id).map((currentProject) => currentProject.project);
    console.log("Projects for Employee 1:", projects);
}
