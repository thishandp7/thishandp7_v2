/*eslint quotes: [2, "double"]*/
var Data = {
  "Summary": "A Full-stack Javascript developer with hands-on experience in all modern web technologies. Fluent in all aspects of Agile Methodologies. Capable of doing high-quality work and committed to working within project specifications to deliver cost-effective, timely results. Currently working on ReactJs, Redux and NodeJs mainly.",

  "ContactInfo": {
    "phone": "+1 (320) 237 6857",
    "skype": "thishandp7",
    "email": "thishandp7@gmail.com",
    "address": "St.Cloud, Minnesota, USA"
  },

  "Education": [
    {
      "title": "B.S. Computer Science",
      "college": "Saint College State University",
      "location": "Saint Cloud, MN",
      "gpa": " - GPA 3.43",
      "gradDate": "Fall 2018"
    },

    {
      "title": "A.S. Computer Science",
      "college": "American College of Higher Education",
      "location": "Sri Lanka",
      "gpa": "",
      "gradDate": "Fall 2014"
    },

    {
      "title": "Diploma in Multimedia",
      "college": "WYTECH",
      "location": "Sri Lanka",
      "gpa": "",
      "gradDate": "Fall 2012"
    },
  ],

  "Experience": [
    {
      "companyName": "Venture Kingdom",
      "location": "Luza Russia",
      "title": "Front-End Developer: React.JS + Redux",
      "description": [
        {"line":"Involved in design and development of the projects with MVC architecture"},
        {"line":"Used Javascript, jQuery and knockoutJs for front-end development"},
        {"line":"Involved in unit testing by using MSTest tool and MOQ library"},
        {"line":"Worked in Agile scrum development process"},
        {"line":"Played an advising role in the creation of software designs and perform follow-up of other software development and test tasks."},
        {"line":"Performed an intake and acceptance on software development tasks and describe/adapt the technical design for the development tasks."},
        {"line":"Developed the requested requirements following the agreed procedures & conventions."},
      ],
      "period": "Dec 2017 - Mar 2018"
    },
    {
      "companyName": "Wolters Kluwer Financial Services",
      "location": "Saint Cloud",
      "title": "Software Engineer - Intern",
      "description": [
        {"line":"Involved in design and development of the projects with MVC architecture"},
        {"line":"Used Javascript, jQuery and knockoutJs for front-end development"},
        {"line":"Involved in unit testing by using MSTest tool and MOQ library"},
        {"line":"Worked in Agile scrum development process"},
        {"line":"Played an advising role in the creation of software designs and perform follow-up of other software development and test tasks."},
        {"line":"Performed an intake and acceptance on software development tasks and describe/adapt the technical design for the development tasks."},
        {"line":"Developed the requested requirements following the agreed procedures & conventions."},
        {"line":"Take up responsibility in software smaller software projects and guide these from a planning, progress, reporting and communication perspective."},
        {"line":"Executed the quality procedures on software development and delivered high quality tools with regards to software layout, performance, output and usability."},
        {"line":"Gave support on developed software and software within my knowledge domain."},
        {"line":"Took up responsibility on in development software & unit tests."},
        {"line":"Performed follow-ups on validation test for the developed software."},
        {"line":"Maintained/adapted software documentation and artefacts."}
      ],
      "period": "May 2016 - May 2017"
    },
    {
      "companyName": "Applied Research & Development Center",
      "location": "SCSU",
      "title": "Graphic Designer / Videographer",
      "description": [
        {"line":"Designer logos, flyers, posters, and page layouts."},
        {"line":"Developed style sheets for layout design projects."},
        {"line":"Performed shooting, editing, and graphic design for videos."},
        {"line":"Conducted field and in-house shoots."},
        {"line":"Maintained department website."}
      ],
      "period": "Sept 2016 - Present"
    },
    {
      "companyName": "Freelance 3D artist, Graphic designer, Motion-Graphics artist",
      "location": "Sri Lanka",
      "title": "",
      "description": [
        {"line":"Produced and animated graphic elements for long format shows."},
        {"line":"Conceptualize and design specialized 2D/3D promotional animated products in multimedia formats."}
      ],
      "period": "Jan 2007 - Jan 2015"
    },
  ],

  "Projects":[
    {
      "name": "3D Graphics Engine",
      "description": "A personal project which I’m working on during my free time from college. This engine can read any .obj file and it will render the polygons in the screen. My final goal is to implement a Ray-tracer and a Physics engine with this.",
      "Tools": [{"C++":9}, {"OpenGL":8}, {"SDL":5}],
      "repoLink": "https://github.com/thishandp7/3D-Graphics-Engine",
      "period": "Feb 2016 - Present"
    },

    {
      "name": "Restaurant Automation",
      "description": "A self-contained product which interacts with various types of users, such as Waiters, Chefs, Hosts, Managers, Owner(s), Restaurant Customers and busboys. This system changes its interface according to the user, for ease of use. Also it helps the store manage its inventory. This app can manage orders, sales, keep track of seating and reservations, notify busboys of tables that need to be cleared, alert waiters when the food is ready for delivery, help managers with record keeping.",
      "Tools": [{"C#":9}, {"ASP.Net":6}, {"jQuery":5}, {"Razor":5}, {"Entity Framework":6}],
      "repoLink": "https://github.com/thishandp7/SE240---RestaurantAutomation",
      "period": "Jan 2017 - May 2017"
    },

    {
      "name": "Text Recognizer",
      "description": "Another personal project of mine. A desktop app that recognize text/Road signs from an image and print them out in digital text for the user. When developing this software I used various object-oriented design patterns such as, Strategy design pattern and Singleton design pattern. The text recognition algorithm is written as a seperate module and encapsulated using strategy design pattern. Therefore i can easily port this algorithm to other platforms. Currently i’m working on building the same application for Andriod devices using the same algorithm.",
      "Tools": [{"C++":9}, {"OpenCV":8}, {"Qt":6}],
      "repoLink": "https://github.com/thishandp7/TextRecognizer-",
      "period": "Jul 2017 - Aug 2017"
    },

    {
      "name": "Connect Four",
      "description": "Wrote this game to study the game of strategy in my artificial intelligence class. I wanted to determine the effect of ply depth and the effect of getting the first move on the chance of winning. To achieve this, I employed a minimax algorithm with alpha-beta pruning to determine the move selection. Also, implemented a static evaluation function to evaluate the game board by comparing gaussian distributed value in each cell in the board. The game is written using modern C++ and the GUI elements are created using Qt. By writing the program I understood the essence of Artificial Intelligence and game-play programing.",
      "Tools": [{"C++":9}, {"Qt":6}],
      "repoLink": "https://github.com/thishandp7/Connect-Four_CSCI440_project1",
      "period": "Oct 2017 - Nov 2017"
    },

    {
      "name": "Isometric Mini Golf",
      "description": "Built this game for my Computer Animation & Visualization class. It is an Isometric Mini golf game. This game consists of four levels. Each level is difficult than the previous one. Built all the assets using Maya and Photoshop. Scripting was done using C# and wrote custom shaders using HLSL for in game interactive GUI elements. The entire game was built using Unity game engine. Also employed design patterns such as singleton for the game manager. By building this game I understood the fundamentals of Unity and game development process.",
      "Tools": [{"Unity":9}, {"Maya":9}, {"C#":8}, {"HLSL":5}],
      "repoLink": "https://github.com/thishandp7/TextRecognizer-",
      "period": "Feb 2018 - Mar 2018"
    },

    {
      "name": "Drawing Program",
      "description": "This project was done for my Object-Oriented Software Development class. The purpose of this project is to add new features to an already built software. I added features such as draw Ellipses, draw Polygon, draw B-spline, and move a shape functionality. I added these new features by staying consistent with the current code base and the design patterns. Also, I acquired a solid understanding of design patterns such as Singleton, Command, Adapter, Bridge, Iterator and Façade.",
      "Tools": [{"Java":9}, {"Swing":6}, {"Java Applet":6}],
      "repoLink": "https://github.com/thishandp7/CSCI430_FinalProject",
      "period": "Apr 2018"
    },

    {
      "name": "Evil Boxes",
      "description": "Second project in my Computer Animation & Visualization class. This is a third person game. The goal is to survive from the evil boxes by running away from them or by shooting at them. The purpose of this project is to understand NavMesh, NavMesh Agents and building Terrains. I acquired a solid understanding of NavMesh, Agents and Terrains by building this game.",
      "Tools": [{"Unity":9}, {"C#":6}],
      "repoLink": "https://github.com/thishandp7/TextRecognizer-",
      "period": "May 2018"
    },

  ],

};

module.exports = Data;
