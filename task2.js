'use strict';

// Посчитать наибольшее количество идущих подряд букв в строке

let inp = 'aaabbbbccaaaaa3cccdd sda1asd2asdaasd4 3141sasad23 ';

let maxLetters = (string) => {
    let letters = new RegExp(/[a-zA-Z]+/, 'g'),
        max = string.match(letters)
            .map(item => item.length)
            .reduce((a, b) => Math.max(a, b));
    return max;
};

let max = maxLetters(inp);
console.log(max);


// Таблица оценок учеников
class Student {
    constructor(subjects = []) {
        this.subjects = subjects;
    }
}
let cont = document.querySelector('.container');
let data = {};
data.subjects = ['Математика', 'Физика', 'Биология'];
data.students = [
    { name: 'Vasya', grades: [1, 2, 3] },
    { name: 'Vasya2', grades: [31, 12, 23] },
    { name: 'Vasya3', grades: [13, 22, 53] },
    { name: 'Vasya4', grades: [16, 12, 63] },

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


// Пинкод
let pinCheckerInit = (attempt = 1) => {
    let input = prompt('Enter pin (4 digits)', '0000');

    let pinChecker = (input) => {
        const pin = 1234;
        if (input == pin) {
            console.log('Access granted');
            return true
        } else {
            console.log(`Incorrect pin, attempts left ${4 - attempt}`);
            attempt++;
            pinCheckerInit(attempt);
        }
    };

    if (attempt < 4) {
        pinChecker(input)
    } else {
        console.log('Access denied. All attempts were used');
        return false
    };

};

pinCheckerInit();