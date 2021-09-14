class Student {
    constructor(regNo, section, food, order) {
        this.regNo = regNo;
        this.section = section;
        this.food = food;
        this.order = order;
        this.house = this.computeHouse(section, food);
    }
    computeHouse(section, food) {
        return section + food;
    }
    display() {
        return {
            regNo: this.regNo,
            section: this.section,
            food: this.food,
            order: this.order,
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

    display() {
        console.log(this.houseList);
    }
}

const s1 = new Student('1234', 'A', 'Veg', 1);
const s2 = new Student('1235', 'B', 'NonVeg', 2);
console.log(s1.display(), s2.display());
const h = new Houses([s1, s2, s1, s2, s1, s2, s1, s2]);
// h.add()
console.log(h.display())