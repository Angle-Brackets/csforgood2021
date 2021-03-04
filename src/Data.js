
const majors = [
    {
        name: "Computer Science",
        rank: 1,
        salary: 110000,
        desc: "",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Business Administration",
        rank: 2,
        salary: 101000,
        desc: "Business Administration is one of the most versatile and popular degrees in the United States today. With its versatility, graduates are able to enter fields such construction, manufacturing, IT, software, management, and many more. An undergraduate degree in business administration exposes students to a variety of concepts in business, such as business law, financial accounting, managerial accounting, principles of micro/macroeconomics, strategic planning, organizational ethics, corporate financing, and many more. The classes offered prepare any student to step into impactful roles in any institution and help them possess the skills necessary to lead and direct teams from any position the student holds. However, due to its popularity, it is recommended that students plan to study for an MBA or another graduate-level degree to be competitive to employers.",
        jobs: ["Manager/Administrative Supervisor", "Management Analyst", "Financial Analyst"]
    },
    {
        name: "Mechanical Engineering",
        rank: 3,
        salary: 111000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Accounting",
        rank: 4,
        salary: 92000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Finance",
        rank: 5,
        salary: 109000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Economics",
        rank: 6,
        salary: 95000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Information Technology",
        rank: 7,
        salary: 108000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Electrical Engineering",
        rank: 8,
        salary: 99000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Business",
        rank: 9,
        salary: 108000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Computer Engineering",
        rank: 10,
        salary: 117000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Business Management",
        rank: 11,
        salary: 111000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Management",
        rank: 12,
        salary: 113000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Psychology",
        rank: 13,
        salary: 84000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Industrial Engineering",
        rank: 14,
        salary: 112000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Civil Engineering",
        rank: 15,
        salary: 105000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Engineering",
        rank: 16,
        salary: 105000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Information Systems",
        rank: 17,
        salary: 114000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "English",
        rank: 18,
        salary: 88000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Mathematics",
        rank: 19,
        salary: 103000,
        desc: "COMP This is the description of this major. It does stuff, stuff, stuff, stuff, stuff, stuff, stuff, stuff, yes, yes, and yes.",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Software Engineering",
        rank: 20,
        salary: 113000,
        desc: "",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Nursing",
        rank: 21,
        salary: 79000,
        desc: "",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Political Science",
        rank: 22,
        salary: 109000,
        desc: "",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Applied Science",
        rank: 23,
        salary: 90000,
        desc: "",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Project Management",
        rank: 24,
        salary: 105000,
        desc: "",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
    {
        name: "Chemical Engineering",
        rank: 25,
        salary: 81000,
        desc: "",
        jobs: ["Job 1", "Job 2", "Job 3"]
    },
]


function compare( a, b ) {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
}

//Sorts alphabetically automatically.
export default majors.sort(compare);