
const majors = [
    {
        name: "Computer Science",
        rank: 1,
        salary: 110000,
        desc: "Computer Science is one of the fastest growing fields in the modern era, and allows students to develop and design technology-oriented products for consumers to use in their daily lives. Degrees in computer science provide students with a variety of skills necessary to succeed in the ever-growing technology job market, ensuring that students have the technical, scientific, and mathematical skills necessary to succeed. Computer Science differs from fields such as Computer Information Technology or Information systems as it focuses on the foundational concepts of computing and its applications. However, despite this focus, Computer Science students are well equipped with the knowledge of algorithms, programming lanugages, computer architecture, logic, data science, and more. Due its popularity and high demand, many employers value computer science graduates greatly, making it an alluring field for students who do not wish to pursue a higher degree.",
        jobs: ["Software Developer", "Software Engineer", "Data Scientist"]
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
        desc: "Mechanical Engineering is the branch of engineering that focuses on the design, operation, function, construction, and utilization of machines. Students who study mechnical engineering are exposed to topics such as mechanics and materials, organic chemistry, engineering dynamics and control, calculus, robotics, machine design, and a plethora more. These classes prepare students to be able to design and operate machines at a proficient level, skills that are valued highly by employers, thus leading to mechanical engineers being in moderate demand by employers, especially if the engineer is knows current technology well. Mechanical Engineers must be licensed to do work in addition to their college degree, the skills taught in college are designed to help students ace this exam. Graduate degrees are for students who wish to academically challenge themselves and desire more professional opportunities in the field in the future; however, a bachelors degree in Mechanical Engineering is quite sufficient for employment.",
        jobs: ["Mechanical Engineer", "Aerospace Engineer", "Biomedical Engineer"]
    },
    {
        name: "Accounting",
        rank: 4,
        salary: 92000,
        desc: "Accounting is the recording, reporting, analysis, and audit of financial statements for a given business or entity. It is one of the most popular majors out there due to its versatility and adaptability, as businesses will always need people skilled with planning, organizing, and initiating transactions. Students who study accounting will cover the same 5 main elements in any program: financial accounting, globalization, fundamentals of finance, auditing, and business law. Students are then able to be certified in a variety of specializations to accelerate their careers. Specializations include certified internal auditor, certified quality auidtor, accredited tax advisor, certified payroll professional, and many others that students can choose to be more competitive to employers. A popular certification for accountants is becoming a CPA, or certified public accountant, and is a highly respected specialization and allows the holder to work in a variety of specializations rather than one. Recieving a CPA is a time-investment, requiring 150 hours beyond one's bachelors degree and meeting the state residency requirements of one's state before taking the standardized exam, but the benefits of passing the exam are that one has many more career options in their future and are more valuable applicants to employers.",
        jobs: ["Corporate/Business Accountant", "Budget Analyst", "Forensic Accountant"]
    },
    {
        name: "Finance",
        rank: 5,
        salary: 109000,
        desc: "Finance is the area of business that deals with the investment and value of money, assessing risk and return in order to maximize profit. It is broken down into 3 categories, corporate, personal, and public, each dealing with different clientele and restrictions. Students who study finance take classes that equip them with the knowledge, skill, and ability to manage money. A degree in finance may include classes such as corporate finance, money and banking, financial analysis, asset management, investments, and more. Degrees in finance are quite flexible, and it is encourage that graduates look at broader group of job opportunities than normal because a degree in finance is highly applicable to many fields. With similarities to accounting, graduates can also study for a CPA (Certified Public Accountant) or CMA (Certified Management Accountant) to improve their job outlook and skills. With such crossover, finance majors are able to pursue managerial positions with relative ease, and job mobility is quite high, making it a very popular choice.",
        jobs: ["Financial Analyst", "Financial Planning", "Investment Banking"]
    },
    {
        name: "Economics",
        rank: 6,
        salary: 95000,
        desc: "Economics is the study of production and consumption of goods and services. A degree in economics shows students understand market systems, economic principles, and the modes of production, distribution, and consumption through reasoning. Sutdents who study an economics degree take classes that equip them to handle a wide-variety of economic situations, so classes like socioeconomic theory, organizational behavior, micro/macroeconomics, taxation, and more are designed to help students have a wide breadth of knowledge to be able to tackle any economic situation. Most entry-level jobs require a bachelors degree, however the highest positions require individuals have a masters or doctorate in economics. Employers are always looking for people with economics degree, making job prospects moderately safe for new-graduates.",
        jobs: ["Economist", "Financial Manager", "Market Research Analyst"]
    },
    {
        name: "Information Technology",
        rank: 7,
        salary: 108000,
        desc: "Information technology (IT) refers to the area of technology that deals with the transfer of information across internal and external systems, security of this data, and its storage. Network structure and management are cornerstones of this major, and any student that studies this major must be proficient in these topics to succeed. An undergraduate degree in information technology requires that students study topics such as data structures and algorithms, computer programming, calculus, database management, and more in order to have both the technical and mathematical knowledge to utilize their skills proficently. Due to its crossover with Computer Science and Data Science, many job opportunities are available to IT majors as companies have high demand for data professionals and many of the skills of an IT major are transferable to computer science or data science oriented jobs.",
        jobs: ["Systems Analyst", "Multimedia Programmer", "Network Engineer"]
    },
    {
        name: "Electrical Engineering",
        rank: 8,
        salary: 99000,
        desc: "Electrical Engineering is the branch of engineering dealing with the study, design,, and application of electricity, electronic and electric devices, electromagnetism, the math and physics of electricity, and energy transmission primarily. An undergraduate studying electrical engineering focuses on these 5 aspects in their course curriculum, taking a variety of engineering, mathematics, and physics classes in order to have the knowledge to design and develop electric devices and circuits. Specifically, classes such as calculus, general chemistry, physics, principles of electronics, circuits, and more are necessary for a student to master electrical engineering. Practical experience in electrical engineering is beneficial while seeking employment, so internships or part-time jobs as an electrical engineer before or after one graduates are recommended to appeal to employers. Furthermore, electrical engineers working for the government at local, state, or the federal level must be certified to work (tested through an exam), but tend to have higher job prospects. ",
        jobs: ["Circuits Engineer", "Electrical Design Engineer", "Electrical Project Engineer"]
    },
    {
        name: "Business",
        rank: 9,
        salary: 108000,
        desc: "Business is one of the most popular majors for undergraduates in the United States, and teaches students the skills necessary to manage/run businesses, lead employees, the practices and techniques used to improve revenue and profitability, and more for them to suceed in a business environment. It is quite similar to Business Administration as well, allowing for students to learn the skills granted within that major as well. Business majors can also double-major into related fields, such as Finance, Economics, Accounting, and more to expand their skill set. Graduate degrees in business focus much more on the practices and techniques in all facets of business and also make students much more lucrative to employers due to these higher degrees in business being comparitively rarer. With such versatility, employers are in high demand for individuals with business majors, allowing students right out of college to have moderately good job prospects and mobility. ",
        jobs: ["Operations Reserach Analyst", "Budget Analyst", "Marketing Manager"]
    },
    {
        name: "Computer Engineering",
        rank: 10,
        salary: 117000,
        desc: "Computer Engineering is a branch of engineering that combines parts of computer science and electrical engineering for the creation and development of computer hardware and software. Students studying computer engineering must be proficent in both computer science and electrical engineering, taking classes like computer programming, electrical engineering, circuit design, physics, calculus, and more in order to be proficient. The downside to this mixed discipline is that it is notoriously difficult for students starting out, so there are comparitively lower quantities of students in this field compared to computer science and electrical engineering. Therefore, computer engineers are in very high demand, as the skills required to design the newest devices are highly sought after, making these individuals' job prospects in the future quite bright.",
        jobs: ["Hardware Engineer", "Software Engineer", "Technical Designer"]
    },
    {
        name: "Business Management",
        rank: 11,
        salary: 111000,
        desc: "Business management is a degree meant to provide students an understanding of business fundamentals at every level of an organization's operation. Teaching skills such as analyzing market trends, looking at business growth/decline statistics, analysing interpersonal and professional changes within a business, the role of management, and much more to allow students to effectively diagnose and fix the problems associated with a business. Being very similar to Business and Business Administration degrees, students are well equipped with the business, social, and economic knowledge required to succeed with a business management degree. Business management graduates tend to go into fields such as marketing, finance, management, and business analysis and are frequently in high demand by employers due to the unique skill set graduates have.",
        jobs: ["Business Manager", "Sales/Promotion Manager", "Trade Development Manager"]
    },
    {
        name: "Management",
        rank: 12,
        salary: 113000,
        desc: "A management degree is a type of business degree that focuses on the supervision and direction of employees in a business as well as its organization. This major is very similar to a business management degree, but focuses more on the employees within a business rather than the business itself. Classes focus on management, direction, and organization primarily, and train students to effectively and decisively guide employees to accomplish the business's goal. Business are always in need of good managers, so job growth in the field is quite high and allows for graduates to have a wide variety of choices when selecting a job.",
        jobs: ["Assistant Manager", "Operations Manager", "Marketing Operations Manager"]
    },
    {
        name: "Psychology",
        rank: 13,
        salary: 84000,
        desc: "The understanding of human behavior is the core focus of Psychology. A graduate of this degree is expected to understand the important aspects of congitive development, behavioral and nueral reponses, personalities, human learning, and the social psychology of people. The application of Psychology is vast and is important to both the medical field and business. Traits important to success within this degree includes critical thinking, a scientific approach to understanding, ability to apply theory in multiple contexts, flexibility with known and abiguous concepts, and ethical consideration.",
        jobs: ["Psycologist", "Rehabilitation Specialist", "Marketing Consultant", "Human Resource Assistant"]
    },
    {
        name: "Industrial Engineering",
        rank: 14,
        salary: 112000,
        desc: "A combination of mathematics, physics, and social sciences, Industrial Engineer requires creative thinking to produce optimized systems. Complexity can range from simple design to the consideration of labor, money, and other resources required in production. The field has become increasingly competitive with additional knowledge in computer science, chemistry, mechanics, circuitry, and advanced math becoming a standard. The minimum requirement to practice Industrial Engineering is a Bachelor's Degree; however, a Master's is recommended.",
        jobs: ["Industrial Engineer", "Field Service Engineer", "Project Engineer", "Process Quality Manager"]
    },
    {
        name: "Civil Engineering",
        rank: 15,
        salary: 105000,
        desc: "Civil Engineers plan, design, and manage physical projects such as bridges, buildings, and transport links. A strong foundation in mathematics and physical science is necessary to solve specific, real-world problems. The modernized field takes advantage of computer modelling software and data from surveys, tests, and maps to create digital project blueprints. Clear communication and social skills are important as projects are often done in collaboration to decide on the best course of action and help minimize environmental impact and risk.",
        jobs: ["Civil Engineer"]
    },
    {
        name: "Engineering",
        rank: 16,
        salary: 105000,
        desc: "Engineering is a general degree category that requires the usage of science and mathematics to solve a variety of problems. Engineers work in disciplines that include mechanical, electrical, chemical, civil, and environmental engineering, among others. Engineers work in a variety of fields to analyze, develop and evaluate large-scale, complex systems. This can mean and improve and maintaining current systems or creating brand new projects. Engineers design and draft blueprints, visit systems in the field, and manage current projects. Additional majors in Mathematics and Physics create a strong foundation in most specializations, while Chemistry may be useful in others.",
        jobs: ["Engineer"]
    },
    {
        name: "Information Systems",
        rank: 17,
        salary: 114000,
        desc: "Information Systems is the application of technology in managing the needs of businesses. Students in the Information Systems major learn how to work with a company's IT systems to solve operation issues. Information Systems courses includes business courses and managerial communications, as well as coding and other technology skills. This degree goes well with most business-related majors and degrees in arts, graphics design, and communication. An important difference between Computer Science and Information Systems is that there less focus the coding, but more on the logistics of programs.",
        jobs: ["Systems Analyst", "Information Technology Specialist", "IT Security Analyst"]
    },
    {
        name: "English",
        rank: 18,
        salary: 88000,
        desc: "An English major is a humanities degree option that comes with plenty of opportunities for students to explore different styles of expression. An undergraduate background in English is useful for graduate and professional programs in fields like journalism, law and business.",
        jobs: ["Teacher", "Editorial Assistant", "Journalist", "Writer", "Lawyer"]
    },
    {
        name: "Mathematics",
        rank: 19,
        salary: 103000,
        desc: "Mathematics is broad, which means that math majors often tackle a number of different topics within the concept. Potential classes include algebra, calculus, trigonometry, geometry, computational mathematics, statistics, number theory and discrete math. Math majors often concentrate in a particular math subject or even major or minor in that area. Mathematics is commonly taken as a minor while majoring in Computer Science or Engineering. A sole focus on Mathematics usually means the pursuit of a Masters Degree.",
        jobs: ["Teacher", "Accountant", "Researcher", "Financial Analyst"]
    },
    {
        name: "Software Engineering",
        rank: 20,
        salary: 113000,
        desc: "Software Engineering focuses on applying the principles of engineering to software development, including analyzing and modifying existing software as well as designing, constructing, and testing applications that meet user needs, all through software programming languages. The role also focuses on the complex and large software systems that make up the core systems for an organization. An additional Bachelorâ€™s Degree in software, math, or science is recommended. There is also an expectation to have broad experience with computer systems and applications such as C++ or Java.",
        jobs: ["Applications Software Developer", "Systems Software Developer"]
    },
    {
        name: "Nursing",
        rank: 21,
        salary: 79000,
        desc: "Nursing emphasizes critical thinking, clinical judgment and service to others. Students in a nursing major can expect to explore the crossover between theoretical and practical learning. Students spend time in the classroom, studying the sciences, humanities, and the fundamentals of nursing and health care delivery. A key aspect of Nursing is that the knowledge of students will be tested in the lab and during clinical components. Students learning the ins and outs of a career in nursing through physical experience in hospitals and other care facilities. A nursing major will prepare students to pursue different career paths in a variety of health care settings.",
        jobs: ["Registered Nurse", "Hospital Tech", "Case Manager", "Paramedic"]
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