var test_plan = {
    "JsonSemester": [{
        "name": 0,
        "hours": 13,
        "difficulty": 13,
        "size": 4,
        "courses": ["M408D", "EE302", "EE306", "UGS"]
    }, {
        "name": 1,
        "hours": 13,
        "difficulty": 12,
        "size": 4,
        "courses": ["EE319K", "M427J", "M325K", "HIST2"]
    }, {
        "name": 2,
        "hours": 14,
        "difficulty": 14,
        "size": 5,
        "courses": ["PHY103N", "PHY303L", "M427L", "FELEC", "FILL"]
    }, {
        "name": 3,
        "hours": 13,
        "difficulty": 12,
        "size": 4,
        "courses": ["EE411", "EE351K", "EE339", "FILL"]
    }, {
        "name": 4,
        "hours": 12,
        "difficulty": 12,
        "size": 4,
        "courses": ["M340L", "EE312", "EE313", "GOV312L"]
    }, {
        "name": 5,
        "hours": 13,
        "difficulty": 13,
        "size": 4,
        "courses": ["EE333T", "EE462L", "EE325", "EE360K"]
    }, {
        "name": 6,
        "hours": 13,
        "difficulty": 11,
        "size": 4,
        "courses": ["EE364D", "EE445S", "EE351M", "EE362K"]
    }, {
        "name": 7,
        "hours": 13,
        "difficulty": 13,
        "size": 4,
        "courses": ["EE464K", "EE362Q", "EE368L", "FILL"]
    }],
    "totalHours": 104,
    "numSemesters": 8
}

var course_info = {
    "courses": [{
            "title": "M408C",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [],
            "corequisites": []
        },
        {
            "title": "M408D",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "M408C"
            ],
            "corequisites": []
        },
        {
            "title": "M325K",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "M408D"
            ],
            "corequisites": []
        },
        {
            "title": "M427J",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "M408D"
            ],
            "corequisites": []
        },
        {
            "title": "M427L",
            "hours": 4,
            "difficulty": 4,
            "prerequisites": [
                "M408D"
            ],
            "corequisites": []
        },
        {
            "title": "M340L",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "M408C"
            ],
            "corequisites": []
        },
        {
            "title": "PHY303K",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [],
            "corequisites": [
                "M408D",
                "PHY103M"
            ]
        },
        {
            "title": "PHY103M",
            "hours": 1,
            "difficulty": 3,
            "prerequisites": [],
            "corequisites": [
                "PHY303K"
            ]
        },
        {
            "title": "PHY103N",
            "hours": 1,
            "difficulty": 3,
            "prerequisites": [],
            "corequisites": [
                "PHY303L"
            ]
        },
        {
            "title": "PHY303L",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "PHY303K",
                "PHY103M"
            ],
            "corequisites": [
                "M408D",
                "PHY103N"
            ]
        },
        {
            "title": "EE302",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [],
            "corequisites": [
                "M408C"
            ]
        },
        {
            "title": "EE306",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [],
            "corequisites": [
                "M408C"
            ]
        },
        {
            "title": "EE312",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE319K"
            ],
            "corequisites": []
        },
        {
            "title": "EE313",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE411",
                "M427J"
            ],
            "corequisites": [
                "M340L"
            ]
        },
        {
            "title": "EE316",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE306"
            ],
            "corequisites": []
        },
        {
            "title": "EE319K",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE306"
            ],
            "corequisites": []
        },
        {
            "title": "EE411",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "EE302"
            ],
            "corequisites": [
                "M427J",
                "PHY303L",
                "PHY103N"
            ]
        },
        {
            "title": "EE325",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE411",
                "M427J",
                "PHY303L",
                "PHY103N"
            ],
            "corequisites": [
                "M427L"
            ]
        },
        {
            "title": "EE325K",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE325"
            ],
            "corequisites": []
        },
        {
            "title": "EE333T",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE312",
                "EE313",
                "E316K"
            ],
            "corequisites": []
        },
        {
            "title": "EE334K",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "M427J",
                "PHY303L",
                "PHY103N"
            ],
            "corequisites": []
        },
        {
            "title": "EE338L",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE438"
            ],
            "corequisites": []
        },
        {
            "title": "EE339",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "M427J",
                "PHY303L",
                "PHY103N"
            ],
            "corequisites": []
        },
        {
            "title": "EE339S",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [],
            "corequisites": [
                "EE339"
            ]
        },
        {
            "title": "EE341",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE313"
            ],
            "corequisites": []
        },
        {
            "title": "EE347",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE313",
                "EE325"
            ],
            "corequisites": []
        },
        {
            "title": "EE348",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE339"
            ],
            "corequisites": []
        },
        {
            "title": "EE351K",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "M427J"
            ],
            "corequisites": []
        },
        {
            "title": "EE351M",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE313"
            ],
            "corequisites": [
                "EE351K"
            ]
        },
        {
            "title": "EE360C",
            "hours": 3,
            "difficulty": 5,
            "prerequisites": [
                "EE312",
                "M325K"
            ],
            "corequisites": []
        },
        {
            "title": "EE360F",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "EE422C"
            ],
            "corequisites": []
        },
        {
            "title": "EE360K",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE351K",
                "EE313"
            ],
            "corequisites": []
        },
        {
            "title": "EE360P",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE422C"
            ],
            "corequisites": []
        },
        {
            "title": "EE360T",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "EE422C"
            ],
            "corequisites": []
        },
        {
            "title": "EE361C",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE422C"
            ],
            "corequisites": []
        },
        {
            "title": "EE361Q",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE312"
            ],
            "corequisites": []
        },
        {
            "title": "EE361R",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE325",
                "EE438"
            ],
            "corequisites": []
        },
        {
            "title": "EE362K",
            "hours": 3,
            "difficulty": 1,
            "prerequisites": [
                "EE313",
                "M340L"
            ],
            "corequisites": []
        },
        {
            "title": "EE362Q",
            "hours": 3,
            "difficulty": 5,
            "prerequisites": [
                "EE411"
            ],
            "corequisites": []
        },
        {
            "title": "EE362R",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE312",
                "EE313"
            ],
            "corequisites": []
        },
        {
            "title": "EE362S",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "EE312",
                "EE313"
            ],
            "corequisites": []
        },
        {
            "title": "EE363M",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "EE325"
            ],
            "corequisites": []
        },
        {
            "title": "EE363N",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "M427J"
            ],
            "corequisites": []
        },
        {
            "title": "EE364D",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE333T"
            ],
            "corequisites": [
                "EE461L",
                "EE462L",
                "EE445L",
                "EE440",
                "EE438",
                "EE445S"
            ]
        },
        {
            "title": "EE364E",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE333T"
            ],
            "corequisites": [
                "EE461L",
                "EE462L",
                "EE445L",
                "EE440",
                "EE438",
                "EE445S"
            ]
        },
        {
            "title": "EE368L",
            "hours": 3,
            "difficulty": 3,
            "prerequisites": [
                "EE313"
            ],
            "corequisites": [
                "EE333T"
            ]
        },
        {
            "title": "EE369",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE313"
            ],
            "corequisites": []
        },
        {
            "title": "EE371R",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "EE313",
                "EE351K"
            ],
            "corequisites": []
        },
        {
            "title": "EE374K",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE438"
            ],
            "corequisites": []
        },
        {
            "title": "EE374L",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE374K"
            ],
            "corequisites": [
                "EE333T"
            ]
        },
        {
            "title": "EE379K",
            "hours": 3,
            "difficulty": 4,
            "prerequisites": [
                "EE312",
                "EE313"
            ],
            "corequisites": []
        },
        {
            "title": "EE460J",
            "hours": 4,
            "difficulty": 4,
            "prerequisites": [
                "M340L",
                "EE360C",
                "EE313",
                "EE351K"
            ],
            "corequisites": [
                "EE333T"
            ]
        },
        {
            "title": "EE422C",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "EE312"
            ],
            "corequisites": []
        },
        {
            "title": "EE438",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [],
            "corequisites": [
                "EE313",
                "EE333T"
            ]
        },
        {
            "title": "EE438K",
            "hours": 4,
            "difficulty": 4,
            "prerequisites": [
                "EE438"
            ],
            "corequisites": []
        },
        {
            "title": "EE440",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "EE339"
            ],
            "corequisites": [
                "EE313",
                "EE333T"
            ]
        },
        {
            "title": "EE445L",
            "hours": 4,
            "difficulty": 5,
            "prerequisites": [
                "EE312",
                "EE313"
            ],
            "corequisites": [
                "EE333T"
            ]
        },
        {
            "title": "EE445S",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "EE312",
                "EE313"
            ],
            "corequisites": [
                "EE333T",
                "EE351K"
            ]
        },
        {
            "title": "EE460M",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "EE312",
                "EE316"
            ],
            "corequisites": []
        },
        {
            "title": "EE460N",
            "hours": 4,
            "difficulty": 5,
            "prerequisites": [
                "EE306",
                "EE312"
            ],
            "corequisites": []
        },
        {
            "title": "EE460R",
            "hours": 4,
            "difficulty": 5,
            "prerequisites": [
                "EE316",
                "EE438"
            ],
            "corequisites": []
        },
        {
            "title": "EE461L",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "EE422C",
                "M325K"
            ],
            "corequisites": [
                "EE333T",
                "EE351K"
            ]
        },
        {
            "title": "EE461P",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "M340L",
                "EE360C",
                "EE313",
                "EE351K"
            ],
            "corequisites": []
        },
        {
            "title": "EE461S",
            "hours": 4,
            "difficulty": 5,
            "prerequisites": [
                "EE312",
                "M325K"
            ],
            "corequisites": []
        },
        {
            "title": "EE462L",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "EE313"
            ],
            "corequisites": [
                "EE333T",
                "EE351K"
            ]
        },
        {
            "title": "EE464H",
            "hours": 4,
            "difficulty": 4,
            "prerequisites": [
                "EE364D"
            ],
            "corequisites": []
        },
        {
            "title": "EE464K",
            "hours": 4,
            "difficulty": 4,
            "prerequisites": [
                "EE364D"
            ],
            "corequisites": []
        },
        {
            "title": "EE464R",
            "hours": 4,
            "difficulty": 4,
            "prerequisites": [
                "EE364D"
            ],
            "corequisites": []
        },
        {
            "title": "EE464S",
            "hours": 4,
            "difficulty": 4,
            "prerequisites": [
                "EE364E"
            ],
            "corequisites": []
        },
        {
            "title": "EE471C",
            "hours": 4,
            "difficulty": 3,
            "prerequisites": [
                "EE351M"
            ],
            "corequisites": [
                "EE333T"
            ]
        },
        {
            "title": "EE445M",
            "hours": 4,
            "difficulty": 4,
            "prerequisites": [
                "EE445L",
                "EE333T"
            ],
            "corequisites": []
        },
        {
            "title": "RHE306",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [],
            "corequisites": []
        },
        {
            "title": "E316K",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "RHE306"
            ],
            "corequisites": []
        },
        {
            "title": "VAPA",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [],
            "corequisites": []
        },
        {
            "title": "GOV310L",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [],
            "corequisites": []
        },
        {
            "title": "GOV312L",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "GOV310L"
            ],
            "corequisites": []
        },
        {
            "title": "HIST1",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [],
            "corequisites": []
        },
        {
            "title": "HIST2",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [
                "HIST1"
            ],
            "corequisites": []
        },
        {
            "title": "SBS",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [],
            "corequisites": []
        },
        {
            "title": "UGS",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [],
            "corequisites": []
        },
        {
            "title": "FELEC",
            "hours": 3,
            "difficulty": 2,
            "prerequisites": [],
            "corequisites": []
        }
    ]
}