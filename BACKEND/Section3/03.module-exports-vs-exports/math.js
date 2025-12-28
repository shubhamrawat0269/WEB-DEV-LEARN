// Utility function to simulate fetching employee details
const getEmployee = (id) => {
    const employees = [
        { id: 1, name: 'Alice', role: 'Developer' },
        { id: 2, name: 'Bob', role: 'Designer' }
    ];
    return employees.find(emp => emp.id === id) || null;
}

// Utility function to simulate fetching project details
const getProjects = (empId) => {
    const projects = [
        { empId: 1, project: 'Website Revamp' },
        { empId: 1, project: 'Mobile App' },
        { empId: 2, project: 'Logo Design' }
    ];
    return projects.filter(p => p.empId === empId);
}

// exports.getEmployee = getEmployee;
// exports.getProjects = getProjects;

// exports = {
//     getEmployee,
//     getProjects
// };


module.exports = {
    getEmployee,
    getProjects
};

// console.log(exports, 'exports');
// console.log(module.exports, 'module.exports');