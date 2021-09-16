export { Student };

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