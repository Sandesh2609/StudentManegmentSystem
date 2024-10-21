const students = [];

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('studentName').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const mobile = document.getElementById('mobile').value;
    const age = document.getElementById('studentAge').value;
    const email = document.getElementById('email').value;

    if (addStudent(name, rollNumber, mobile, age, email)) {
        this.reset(); // Clear the form fields
    }
});

function addStudent(name, rollNumber, mobile, age, email) {
    // Check for unique roll number
    if (students.some(student => student.rollNumber === rollNumber)) {
        alert(`Roll number ${rollNumber} is already in use.`);
        return false;
    }

    const student = { name, rollNumber, mobile, age, email };
    students.push(student);

    displayStudents();
    alert(`${name} has been added to the list.`);
    return true;
}

function displayStudents() {
    const studentList = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    studentList.innerHTML = ''; // Clear the list

    students.forEach(student => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.mobile}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td><button onclick="removeStudent('${student.rollNumber}')">Delete</button></td>
        `;
        studentList.appendChild(tr);
    });
}

function removeStudent(rollNumber) {
    const index = students.findIndex(student => student.rollNumber === rollNumber);
    if (index > -1) {
        students.splice(index, 1);
        displayStudents();
        alert(`Student with roll number ${rollNumber} has been removed.`);
    }
}
