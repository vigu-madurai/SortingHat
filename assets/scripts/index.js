import { Student } from "./Student.js";
import { Houses } from './House.js';

const allocateBtn = document.querySelector("#allocate-btn");
const allocateHouseEl = document.querySelector(".allocate-layer-wrapper");

let studentList = [];

allocateBtn.addEventListener('click', allocateHouse);
function allocateHouse() {

    const registerNoEl = document.querySelector("#reg-no");
    const registerNo = registerNoEl.value;

    const section = document.querySelector("input[name='section']:checked").value;
    const foodPref = document.querySelector("input[name='food']:checked").value;
    // client vaildation of regno, food, section

    if (Student.checkSections(section) && Student.checkSections(foodPref) && checkRegNo()) {
        const student = new Student(registerNo, section, foodPref);
        studentList.push(student.add());
        const houses = new Houses(studentList);
        allocateHouseEl.innerHTML = houses.render();
    }
}

function checkRegNo() {
    const registerNoEl = document.querySelector("#reg-no");
    const registerNo = registerNoEl.value;
    const registerNoErr = document.querySelector(".reg-no-wrapper .error-text");
    const isUniqueRegNo = isUniqueReg(registerNo);

    if (Student.computeNameLength(registerNo) && isUniqueRegNo) {
        registerNoEl.classList.remove('error');
        registerNoErr.style.display = "none";
        return true;
    } else {
        registerNoEl.classList.add('error');
        registerNoErr.innerHTML = "Only 4 Characters allowed & shouldn't be duplicated!";
        registerNoErr.style.display = "block"
        return false;
    }
}

// findout duplicates of student's register number
function isUniqueReg(registerNo) {
    return studentList.every(el => el.regNo != registerNo)
}
