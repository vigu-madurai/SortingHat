export { Houses };
    
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