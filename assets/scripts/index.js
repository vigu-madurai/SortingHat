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
const s1 = new Student('1234', 'a', 'v', 1);
const s2 = new Student('1235', 'b', 'nv', 1);
console.log(s1.display(), s2.display())