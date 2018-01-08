let cont = document.querySelector('.container');

let data = {};
data.subjects = ['Математика', 'Физика', 'Биология'];
data.students = [
    { name: 'Vasya 1', grades: [1, 2, 3] },
    { name: 'Vasya 2', grades: [31, 12, 23] },
    { name: 'Vasya 3', grades: [13, 22, 53] },
    { name: 'Vasya 4', grades: [16, 12, 63] },

];

let renderHeader = (subjects) => {
    let header = subjects.reduce(
        (acc, currentItem) => {
            return `${acc}<td>${currentItem}</td>`
        }, '<table><thead><tr><td>ФИО</td>');
    return header += '</tr></thead>';
};

let renderRow = (student) => {
    let row = student.grades.reduce(
        (acc, currentGrade) => {
            return `${acc}<td>${currentGrade}</td>`
        }, `<tr><td>${student.name}</td>`);
    return row += '</tr>'
};

let renderBody = (students) => {
    let tableBody = '',
        allStudents = students.forEach((student) => {
            tableBody += renderRow(student);
        });
    return tableBody;
}

let renderTable = (props) => {
    let table = renderHeader(props.subjects) + renderBody(props.students);
    return table;
};

cont.innerHTML = renderTable(data);