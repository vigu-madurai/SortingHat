import { Houses } from "../assets/scripts/House.js";

test('Test Computed House Lists', () => {

    const studentListInput = [
        {
            "regNo": "1111",
            "section": "A",
            "food": "Veg",
            "house": "AVeg"
        },
        {
            "regNo": "1112",
            "section": "A",
            "food": "Veg",
            "house": "AVeg"
        },
        {
            "regNo": "1113",
            "section": "A",
            "food": "Veg",
            "house": "AVeg"
        },

        {
            "regNo": "1115",
            "section": "B",
            "food": "Veg",
            "house": "BVeg"
        },
        {
            "regNo": "1116",
            "section": "B",
            "food": "Veg",
            "house": "BVeg"
        },
        {
            "regNo": "1117",
            "section": "B",
            "food": "Veg",
            "house": "BVeg"
        }
        ,

        {
            "regNo": "1123",
            "section": "A",
            "food": "NonVeg",
            "house": "ANonVeg"
        },
        {
            "regNo": "1124",
            "section": "A",
            "food": "NonVeg",
            "house": "ANonVeg"
        }
        ,
        {
            "regNo": "1118",
            "section": "B",
            "food": "NonVeg",
            "house": "BNonVeg"
        },
        {
            "regNo": "1119",
            "section": "B",
            "food": "NonVeg",
            "house": "BNonVeg"
        },
        {
            "regNo": "1120",
            "section": "B",
            "food": "NonVeg",
            "house": "BNonVeg"
        },
        {
            "regNo": "1114",
            "section": "A",
            "food": "Veg",
            "house": "AVeg"
        },
        {
            "regNo": "1121",
            "section": "B",
            "food": "NonVeg",
            "house": "BNonVeg"
        },
        {
            "regNo": "1122",
            "section": "B",
            "food": "NonVeg",
            "house": "BNonVeg"
        }
    ];

    const studentListOutput = {
        "AVeg": [
            {
                "regNo": "1111",
                "section": "A",
                "food": "Veg",
                "house": "AVeg"
            },
            {
                "regNo": "1112",
                "section": "A",
                "food": "Veg",
                "house": "AVeg"
            },
            {
                "regNo": "1113",
                "section": "A",
                "food": "Veg",
                "house": "AVeg"
            }
        ],
        "BVeg": [
            {
                "regNo": "1115",
                "section": "B",
                "food": "Veg",
                "house": "BVeg"
            },
            {
                "regNo": "1116",
                "section": "B",
                "food": "Veg",
                "house": "BVeg"
            },
            {
                "regNo": "1117",
                "section": "B",
                "food": "Veg",
                "house": "BVeg"
            }
        ],
        "ANonVeg": [
            {
                "regNo": "1123",
                "section": "A",
                "food": "NonVeg",
                "house": "ANonVeg"
            },
            {
                "regNo": "1124",
                "section": "A",
                "food": "NonVeg",
                "house": "ANonVeg"
            }
        ],
        "BNonVeg": [
            {
                "regNo": "1118",
                "section": "B",
                "food": "NonVeg",
                "house": "BNonVeg"
            },
            {
                "regNo": "1119",
                "section": "B",
                "food": "NonVeg",
                "house": "BNonVeg"
            },
            {
                "regNo": "1120",
                "section": "B",
                "food": "NonVeg",
                "house": "BNonVeg"
            }
        ],
        "NotAvailable": [
            {
                "regNo": "1114",
                "section": "A",
                "food": "Veg",
                "house": "NotAvailable"
            },
            {
                "regNo": "1121",
                "section": "B",
                "food": "NonVeg",
                "house": "NotAvailable"
            },
            {
                "regNo": "1122",
                "section": "B",
                "food": "NonVeg",
                "house": "NotAvailable"
            }
        ]
    };

    const houses = new Houses(studentListInput);

    expect(houses.display()).toStrictEqual(studentListOutput)
});

