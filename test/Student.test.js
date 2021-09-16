import { Student } from "../assets/scripts/Student.js";

test('Test Input Students value', () => {
    const stu = new Student('1234', 'A', 'Veg');
    expect(stu.add()).toStrictEqual({
        regNo: '1234',
        section: 'A',
        food: 'Veg',
        house: 'AVeg'
    });
});

test('Student Name should contain 4 characters', () => {
    const studentNames = [
        { name: "1234", answer: true },
        { name: "123", answer: false },
        { name: "12345", answer: false }];
    studentNames.forEach(stu => {
        expect(Student.computeNameLength(stu.name)).toBe(stu.answer);
    })
});

test('Student should have a valid Food value', () => {
    const foodValue = [
        { name: 'Veg', answer: 'Veg' },
        { name: 'NonVeg', answer: 'NonVeg' },
        { name: undefined, answer: false },
        { name: null, answer: false }
    ];
    foodValue.forEach(food => {
        expect(Student.checkSections(food.name)).toBe(food.answer)
    })
});

test('Student should have a valid Section value', () => {
    const foodValue = [
        { name: 'A', answer: 'A' },
        { name: 'B', answer: 'B' },
        { name: undefined, answer: false },
        { name: null, answer: false }
    ];
    foodValue.forEach(food => {
        expect(Student.checkSections(food.name)).toBe(food.answer)
    })
});


