class Student {
    constructor(regNo, section, food) {
        this.regNo = regNo;
        this.section = section;
        this.food = food;
        this.house = this.computeHouse(section, food);
    }

    // assign house based upon the food & section preference
    computeHouse(section, food) {
        return section + food;
    }

    // use this object to compute house classification
    add() {
        return {
            regNo: this.regNo,
            section: this.section,
            food: this.food,
            house: this.house
        }
    }
}

class Houses {
    maxAllowedStudents = 3;
    constructor(list) {
        this.sudentList = list;
        this.houseList = this.add(list)
    }

    // add the list of student records and append to house list obj
    add(list) {

        let houseList = {
            AVeg: [],
            BVeg: [],
            ANonVeg: [],
            BNonVeg: [],
            NotAvailable: []
        }
        list.forEach((student) => {
            const house = student.house;
            if (this.isAvailable(houseList[house])) {
                houseList[house].push(student);
            } else {
                student.house = 'NotAvailable';
                houseList['NotAvailable'].push(student)
            }
        });
        return houseList;
    }

    isAvailable(arr) {
        return arr.length < this.maxAllowedStudents ? true : false;
    }

    // use this to check the object structure in console
    display() {
        console.log(this.houseList);
        return this.houseList;
    }

    render() {
        let output = "";
        const houseNames = Object.keys(this.houseList);

        houseNames.forEach((el, index) => {
            const house = houseNames[index];
            output +=
                `<div class="house-student-layer">
                    <div class="house-title">
                        ${house}
                    </div>
                    ${this.renderStudentList(house)}
                </div>`
        })
        return output;
    }
    renderStudentList(house) {
        let output = "";
        this.houseList[house].forEach(el => {
            (
                output +=
                    `<div class="students-list-wrapper">
                        <div class="students-list">${el.regNo}</div>
                    </div>`
            )
        })
        return output;
    }
    
}

const addStudent = document.querySelector("#allocate-btn");
const allocateHouseEl = document.querySelector(".allocate-layer-wrapper");

let studentList = [];

addStudent.addEventListener('click', allocateHouse);

function allocateHouse() {

    const registerNoEl = document.querySelector("#reg-no");
    const registerNo = registerNoEl.value;

    const section = document.querySelector("input[name='section']:checked").value;
    const foodPref = document.querySelector("input[name='food']:checked").value;
    // client vaildation of regno, food, section
    if (checkSections(section) && checkSections(foodPref) && checkRegNo()) {
        const student = new Student(registerNo, section, foodPref);
        studentList.push(student.add());
        const houses = new Houses(studentList);
        allocateHouseEl.innerHTML = houses.render();
    } 
}

function checkSections(val) {
    return val ?? false;
}

function checkRegNo() {
    const registerNoEl = document.querySelector("#reg-no");
    const registerNo = registerNoEl.value;
    const registerNoErr = document.querySelector(".reg-no-wrapper .error-text");
    const isUniqueRegNo = isUniqueReg(registerNo);
    
     if(registerNo.length == 4 && isUniqueRegNo) {
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
