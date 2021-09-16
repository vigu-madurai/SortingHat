export { Student };

class Student {
    constructor(regNo, section, food) {
        this.regNo = regNo;
        this.section = section;
        this.food = food;
        this.house = this.computeHouse(section, food);
    }

    // check length of name to 4
    static computeNameLength(name) {
        return name.length == 4 ? true : false;
    }

    // check section or food has a proper value
    static checkSections(val) {
        return val ?? false;
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