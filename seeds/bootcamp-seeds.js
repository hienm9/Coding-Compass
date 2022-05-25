const { Bootcamp } = require("../models");

const bootcampdata = [
  {
    name: "4Geeks Academy",
    bootcamp_url: "https://4geeksacademy.com/",
    info: "4Geeks Academy offers part-time and full-time coding and AI/machine learning bootcamps in Miami and Orlando, Florida, Spain, Portugal, Chile, Argentina, Uruguay, Costa Rica, Colombia, Venezuela, and Remote/Online. “We breathe coding” is the motto at 4Geeks Academy because they understand that in order to become a developer, one has to become part of the coding culture. 4Geeks Academy provides a blended education model leveraging two proven formats: part-time training and flipped classroom. 4Geeks Academy has graduated more than 2,000 students across its campuses, and has a job placement rate of 85.3%.",
    courses: "Front End Developer,Data Science,Full Stack Developer",
    location: "Caracas,Madrid,Miami,Orlando,Santiago",
  },
  {
    name: "<Academia de Código_>",
    bootcamp_url: "https://www.academiadecodigo.org/",
    info: "Founded in Lisbon in 2015, <Academia de Código_> offers 14-week full-time intensive and immersive full-stack programming bootcamps. With campuses in Lisbon, Oporto, Fundão, and Terceira Island, Portugal, <Academia de Código_> is a social impact startup committed to bringing talented minds out of unemployment.<Academia de Código_>'s immersive programming bootcamps welcome beginners of all ages (over 18) and backgrounds (degree not needed) as long as they are willing to fully and passionately commit to becoming professional junior software developers within a short period of time. Students are guided through the course by a team of instructors who are graduates of the bootcamp. <Academia de Código_> describes their teaching methods as “peculiar” and aimed at training students to write clean code.",
    courses: "Full Stack Developer",
    location: "Fundão,Lisbon,Porto,Terceira Island",
  },
  {
    name: "Actualize",
    bootcamp_url: "http://anyonecanlearntocode.com/",
    info: "Actualize is a 12-week software development bootcamp in Chicago and online throughout the US, offering both part-time and full-time options. Instructors with professional educational experience teach students full stack web development including Ruby, Rails, JavaScript, VueJS, SQL, and Git. Both the in-person and online programs use the same immersive, instruction-driven curriculum, with the Online Live classes conducted in real time with video conferencing. Actualize has a deeply integrated “Job Hacking” curriculum focused on the personal branding and networking skills necessary to land a new job, which Actualize feels is just as important as learning to code.",
    courses: "Full Stack Developer",
    location: "Chicago,Online",
  },
  {
    name: "App Academy",
    bootcamp_url: "https://www.appacademy.io/",
    info: "App Academy offers immersive web development courses both online and in-person on campuses in San Francisco and New York City. App Academy's curriculum is largely based on a hands-on approach. Students spend about 90% of their time pair programming and 10% in lectures, encouraging the sharing of knowledge while also making coding more social. App Academy places emphasis on career training to help students land jobs soon after graduation. App Academy's job-search curriculum focuses on algorithms, interview skills, and other technical interview-focused skillsets.",
    courses: "Front End Developer,Full Stack Developer",
    location: "New York City,Online,San Francisco",
  },
  {
    name: "Boolean Careers",
    bootcamp_url: "https://boolean.co.uk/",
    info: "Boolean is an international tech academy, based in the UK and Italy offering a 6-month, online, full stack web development bootcamp that turns coding beginners into full stack developers. In the UK, students learn Typescript, React, JavaScript, Node.JS and more. Whereas in Italy, the curriculum includes PHP, Laravel, JavaScript, Vue.JS and more. Boolean is aimed at people who are looking to start a career in the tech industry. Their job-focused training programme includes 700+ hours of learning, split between live lectures, practical work, and projects. Classes are taught in native language by instructors with professional developer experience. Every morning is spent in a live online class, and every afternoon working on practical exercises with 1:1 support available.",
    courses: "Full Stack Developer",
    location: "Online",
  },
  {
    name: "BrainStation",
    bootcamp_url: "https://brainstation.io/",
    info: "BrainStation offers full-time and part-time courses in data science, design, development, marketing, cyber security and product in New York City, Miami, London, Toronto, Vancouver, and through an Online Live platform. BrainStation's goal is to empower individuals, businesses, and brands to succeed in the digital age by offering diploma programs, certification courses, and training options across the full digital product lifecycle. BrainStation provides a collaborative, project-based learning experience, with curriculum updated on a daily basis to ensure professionals gain the skills and experience needed to succeed in their careers.",
    courses:
      "Mobile App Development,UX Design,Full Stack Developer,Digital Marketing,Product Manager,Front End Developer,Data Science,Cyber Security",
    location: "London,Miami,New York City,Online,Toronto,Vancouver",
  },
  {
    name: "Claim Academy",
    bootcamp_url: "https://claimacademystl.com/",
    info: "Claim Academy is a 3-month developer coding and software training bootcamp in St. Louis that offers 12-week to 20-week classes in full stack Java, C#/.NET, Javascript, and Cybersecurity analysis. Claim Academy is approved to operate by the State of Missouri Department of Higher Education to train IT professionals. Students can apply with with little to no programming experience, but should be prepared for an in-person or webcam interview, and should complete the Introduction to Java Course through Teachable before the first day of class.",
    courses: "Front End Developer,Full Stack Developer,Cyber Security",
    location: "St. Louis",
  },
  {
    name: "Codaisseur",
    bootcamp_url: "https://codaisseur.com/",
    info: "Codaisseur offers a 10-week full-time web development and 12- week part-time Cybersecurity academy in Amsterdam and online. Their program prepares students for full stack developer roles where professionals teach what they know and love through this unique course. In collaboration with industry professionals and employers, the Codaisseur Academy curriculum matches market demand. By starting with foundational knowledge of web development, students will then be equipped with cutting-edge technology skills by participating in code reviews, quality assessments, team collaboration, and more. All course materials and instruction are provided in English to best prepare students to work in an international coding environment.",
    courses:
      "Full Stack Developer,Front End Developer,Mobile App Development,Cyber Security",
    location: "Amsterdam",
  },
  {
    name: "Code Fellows",
    bootcamp_url: "https://www.codefellows.org/",
    info: "Code Fellows is a technical skills training academy in the Pacific Northwest that offers full- and part-time software development, ops and cybersecurity courses online and in-person from their Seattle, Washington location. Code Fellows guides people from all backgrounds to change their lives through fast-paced, career-focused education. Since their first cohort in 2013, Code Fellows has taught over 1,600 graduates and iterated on their curriculum and format to ensure students receive the most industry-relevant training as effectively and efficiently as possible. Code Fellows shapes passionate learners with immersive training to meet industry needs and improve diversity. Students are immersed in their learning with daily lectures, pair programming, weekly presentations from full-time instructional staff who are seasoned industry professionals, one-week project sprints, and more. Code Fellows graduates work at Amazon, Microsoft, Zillow, Expedia, XBOX, NIKE, Amazon, Starbucks, Nordstrom, and over 800 other companies.",
    courses:
      "Full Stack Developer,Front End Developer,Mobile App Development,Product Manager,Cyber Security",
    location: "Online,Seattle",
  },
  {
    name: "Code Platoon",
    bootcamp_url: "https://www.codeplatoon.org/",
    info: "Code Platoon is a non-profit coding bootcamp located in Chicago, Illinois specifically designed for veterans and military spouses transitioning into the civilian workforce by providing technical training and career placement. Code Platoon offers a 14-week, full-time immersive bootcamp and a 35-week, part-time bootcamp. Both programs are available to attend in-person or remotely via video conference. Students are taught technical skills that leverage the core competencies of problem-solving, teamwork, and discipline.",
    courses: "Front End Developer,Full Stack Developer",
    location: "Chicago",
  },
  {
    name: "Coder Academy",
    bootcamp_url: "https://www.coderacademy.edu.au/",
    info: "Coder Academy is an accredited Australian coding education provider offering on campus bootcamps in Sydney, Melbourne, and Brisbane as well as online. Coder Academy offers the choice of 6-month (Accelerated) or 10-month (Standard) accredited programming bootcamps. The curriculum covers HTML, CSS, Ruby, Rails, Git, JavaScript, APIs, MongoDB, Node.js, Mongoose, Express.js, React and Redux. Coder Academy also offers Australia's first Diploma of IT with a focus on DevOps covering Code, Cloud and Cyber Security (CCC). The CCC bootcamp is delivered online via a virtual classroom across a 10-month duration.",
    courses: "Data Science,Full Stack Developer,Cyber Security",
    location: "Brisbane,Melbourne,Online,Sydney",
  },
  {
    name: "Coder Foundry",
    bootcamp_url: "https://www.coderfoundry.com/",
    info: "Coder Foundry is a coding bootcamp offering .NET training via a 12-week full-time virtual bootcamp, or a self-paced online platform. The Coder Foundry bootcamp is designed and taught by industry practitioners covering HTML, CSS, JavaScript, C#, .NET, and SQL. Graduates will have a fully functioning, enterprise-level portfolio with multi-functioning applications. The curriculum is delivered through project-based collaborative learning and provides students with live interactive instruction, and access to instructors and mentors.",
    courses: "Full Stack Developer",
    location: "Greensboro",
  },
  {
    name: "Codesmith",
    bootcamp_url: "https://www.codesmith.io/",
    info: "Codesmith offers full-time (12-week) and part-time (38-week) immersive software engineering bootcamps in Los Angeles, New York City, and online. Codesmith is a selective, need-blind program focusing largely on computer science and full-stack JavaScript, with an emphasis on technologies like React, Redux, Node, build tools, Dev Ops and machine learning. This program enables Codesmith students (known as Residents) to build open-source projects, with the aim of moving into positions as skilled software engineers. Codesmith Residents become engineers, not technicians, through a deep understanding of advanced JavaScript practices, fundamental computer science concepts (such as algorithms and data structures), and object-oriented and functional programming. Codesmith helps residents develop strong problem-solving abilities and technical communication skills -- valued capacities in a software engineer.",
    courses: "Front End Developer,Full Stack Developer",
    location:
      "Atlanta,Birmingham,Boston,Chicago,Dallas,Houston,London,Los Angeles,New York City,Online,Philadelphia,Phoenix,Portland,Seattle",
  },
  {
    name: "Codeworks",
    bootcamp_url: "https://codeworks.me/",
    info: "Codeworks is an immersive coding bootcamp with campuses in several locations around the world. Students can attend Codeworks courses in-person or remotely. Programs include 8-week and 12-week, full-time, software engineering and full-stack web development courses. All programs cover HTML, CSS, JavaScript, Node, Express, SQL and NoSQL databases, Angular, and React, with the 12-week course also covering DevOps, continuous deployment and systems architecture.",
    courses: "Front End Developer,Mobile App Development,Full Stack Developer",
    location: "Barcelona,Berlin,London,Online",
  },
  {
    name: "Coding Dojo",
    bootcamp_url: "https://www.codingdojo.com/",
    info: "Founded in 2012, Coding Dojo is a global technology education company that offers three full stack coding bootcamps, full-stack part-time programs, as well as courses on data science and other emerging technologies. Coding Dojo has campuses in Seattle, Chicago, Los Angeles, and San Jose, and online worldwide. Students can choose to learn one, two, or three of the industry's most in-demand web development languages, including Python, MERN, Java or .NET Core. An online option is also available for students who don't have access to campuses. In addition to an extensive curriculum, students collaborate with peers, join interactive lectures with their instructors, work with career services, and have access to Assistant Instructors during lab sessions. Students experience building dynamic web applications, solving job-relevant problems, learning to think like true software engineers, and discovering how to become a self-sufficient developer.",
    courses:
      "Front End Developer,Data Science,Full Stack Developer,UX Design,Cyber Security",
    location:
      "Chicago,Los Angeles,Online,San Francisco,San Jose,Seattle,Silicon Valley",
  },
  {
    name: "Coding Temple",
    bootcamp_url: "https://codingtemple.com/",
    info: "Coding Temple offers 10-week, full-stack coding bootcamps in Chicago, Boston, and live online. The Full Stack Web Development bootcamp focuses on Python, Flask, SQL, JavaScript, React, Data Structures, Algorithms, and more.  Students will also learn best practices including Test Driven Development and Agile Development and how to develop industry-standard application and get hands-on experience with partnered clients. Coding Temple also offers weekend workshops on specific topics.",
    courses: "Front End Developer,Data Science,Full Stack Developer",
    location: "Boston,Chicago,Dallas,Online,Washington",
  },
  {
    name: "Concordia Bootcamps",
    bootcamp_url: "https://concordiabootcamps.ca/",
    info: "Concordia Bootcamps partners with universities to offer online coding and data science bootcamps. These bootcamps prepare students for careers in tech, and offer a university certificate upon graduation. The bootcamps also teach students how to navigate the job market, how to market themselves, and how to network. Concordia Bootcamps is headquartered in Montreal, Canada.",
    courses: "Data Science,Full Stack Developer",
    location: "Online",
  },
  {
    name: "Craft Academy",
    bootcamp_url: "https://www.craftacademy.se/english/",
    info: "Craft Academy offers two, 12-week bootcamps based in Stockholm and Gothenburg, Sweden: Full Stack Web Developer and Cybint Cybersecurity. Full Stack Web Developer students will complete a part-time 4-week preparatory course before beginning the bootcamp. Cybint Cybersecurity students will complete a 1-week preparatory course. The Cybint Cybersecurity bootcamp is delivered in a blended on-campus and online format. Every Friday, all bootcamp students will receive a weekend challenge to complete before the next week of class.",
    courses: "Full Stack Developer,Cyber Security",
    location: "Gothenburg,Online,Stockholm",
  },
  {
    name: "devCodeCamp",
    bootcamp_url: "https://devcodecamp.com/",
    info: "DevCodeCamp offers various full-time and part-time, live online coding bootcamps that meet prospective students where they're at in their career. devCodeCamp offers a 30-week, full-time Computer Science Software Engineer Program; a 14-week, full-time Full Stack Development Bootcamp; and a 16-week, part-time Web Development Bootcamp. Bootcamp students are taught how to think like software engineers, working on real-world projects in a collaborative environment. The devCodeCamp instructional team brings knowledge and passion as well as patience and empathy. The curriculum for each bootcamp is designed with the demands of the market at the forefront, yet their core philosophy is to teach software concepts transferable to any programming language. These programs also cover job-seeking strategies, personal branding, resumes, and interview workshops.",
    courses: "Front End Developer,Full Stack Developer",
    location: "Milwaukee,Online",
  },
  {
    name: "Devmountain",
    bootcamp_url: "https://devmountain.com/",
    info: "Devmountain is a technology school that offers full-time and part-time programs at campuses in Lehi, Dallas, and Phoenix. The immersive courses include Web Development, Java Software Engineering, Python Software Engineering, Data Analytics, Software Quality Assurance (QA), iOS App Development, and User Experience (UX) Design. The Web track covers front-end and back-end JavaScript (HTML/CSS, jQuery, AngularJS, Node.js, Express, data sources like SQL, Mongo, Firebase). The iOS track covers mobile development in Swift. The UI/UX course covers prototyping, visual/motion design, sketch, adobe suite, UX research, wireframing, and analytical tools. Devmountain instructors are all coding industry professionals and aim to bring real-world applications into the classroom. The immersive courses require 40 to 60 hours of pre-course work, 40 hours of class per week, and 10 to 20 hours of work outside of the classroom. The part-time programs require 30 to 40 hours of pre-course work, 11 hours of class per week, and 10 to 20 hours of work outside of the classroom. The school was started in 2013 in Provo, Utah.",
    courses:
      "Mobile App Development,Full Stack Developer,UX Design,Front End Developer,Data Science",
    location: "Dallas,Lehi,Online",
  },
  {
    name: "DevPoint Labs",
    bootcamp_url: "https://www.devpointlabs.com/",
    info: "DevPoint Labs teaches an 11-week, full-time and an 11-week, part-time online full stack web development coding bootcamp. The bootcamp curriculum covers HTML, CSS, Ruby, Ruby on Rails, SQL, JavaScript, React, Redux, and more. DevPoint Labs' approach to learning combines pair programming with traditional lectures and a mix of group projects, lean methodologies, hackathons and one-on-one mentorship from instructors.",
    courses: "Front End Developer,Full Stack Developer",
    location: "Salt Lake City",
  },
  {
    name: "DigitalCrafts",
    bootcamp_url: "https://www.digitalcrafts.com/",
    info: "DigitalCrafts offers full-time and part-time online bootcamps in Web Development, Cybersecurity, and UX Design. All classes are taught online by live instructors, and WeWork memberships are included at no additional charge for students needing a place to study.",
    courses:
      "Front End Developer,Full Stack Developer,UX Design,Cyber Security",
    location: "Atlanta,Austin,Chicago,Dallas,Houston,Miami,Online,Tampa",
  },
  {
    name: "Eleven Fifty Academy",
    bootcamp_url: "https://elevenfifty.org/",
    info: "Eleven Fifty Academy is a non-profit coding and cybersecurity bootcamp headquartered in Indianapolis, Indiana offering a range of courses from 12-14 week full-time bootcamps to 24-week part-time programs. Eleven Fifty Academy is focused on helping aspiring career-starters with little to no experience as well as tech professionals seeking to enhance their skills. Each course provides a hands-on, project-centric teaching approach for students to grow their soft skills as well as their tech skills in a friendly, entrepreneurial-minded classroom environment. In-person classes are taught at Launch Fishers as well as Downtown Indianapolis.",
    courses: "Front End Developer,Full Stack Developer,Cyber Security",
    location: "Hybrid (Online & In-person),Indianapolis,Online",
  },
  {
    name: "Epicodus",
    bootcamp_url: "https://www.epicodus.com/",
    info: "Epicodus is a coding bootcamp offering part- and full-time courses online and in Portland, Oregon, and Seattle, Washington. Students learn everything they need to know to get a job as a web developer by learning JavaScript, Ruby on, Rails, C#, .NET, and React. More important than any particular skill, cohorts are taught how to think like a programmer, write good code, and pick up new languages and technologies in this fast-changing industry. Epicodus focuses on collaboration and inclusivity. Students work together in pairs and teams almost every day, and a diversity, equity, and inclusion approach is a core part of the program design.",
    courses: "Front End Developer,Mobile App Development,Full Stack Developer",
    location: "Online,Portland,Seattle",
  },
  {
    name: "Flatiron School",
    bootcamp_url: "https://flatironschool.com/",
    info: "Flatiron School offers immersive on-campus and online programs in software engineering, data science, cybersecurity, and product design (UX/UI design). Flatiron School's immersive courses aim to launch students into fulfilling careers by providing a robust career services framework and dedicated one-on-one coaching post graduation that is included as an added value with the tuition.",
    courses:
      "Front End Developer,Data Science,Full Stack Developer,UX Design,Cyber Security",
    location: "Colorado Springs,Denver,New York City,Online",
  },
  {
    name: "Fullstack Academy",
    bootcamp_url: "https://www.fullstackacademy.com/",
    info: "Fullstack Academy offers full-time and part-time immersive software engineering bootcamps and cyber security bootcamps, with campuses in New York City, Chicago, and online. Fullstack's software engineering courses cover advanced JavaScript-oriented technologies and computer science topics including compiler theory, logic gates, and building an operating system. The cyber bootcamp covers encryption, networking, system architecture, cryptography, risk detection, and more. Fullstack Academy offers flexible options for college students and those who wish to continue working while learning modern tech skills. The Summer of Code program is an accelerated version of the immersive bootcamp for college students on summer break.",
    courses: "Front End Developer,Full Stack Developer,Cyber Security",
    location:
      "Atlanta,Baton Rouge,Chicago,Jacksonville,Los Angeles,New Orleans,New York City,Online,San Diego,San Francisco,San Luis Obispo,Washington",
  },
  {
    name: "General Assembly",
    bootcamp_url: "https://generalassemb.ly/",
    info: "General Assembly offers short and long courses in web and mobile development, product management, data science and more, online and in-person, across 15 campuses in 4 continents. Focusing on the most relevant and in-demand skills across data, design, business, and technology, General Assembly is confronting a skills gap and providing access to opportunities in tech. General Assembly offers a breadth of different course offerings and classes range from full-time immersive courses for learners that want to switch to a new career, to part-time courses for learners that are looking to improve their career trajectory by acquiring a new skill set, and mentor-led online circuits for a more flexible way to acquire foundational skills.",
    courses:
      "Data Science,Full Stack Developer,Product Manager,Digital Marketing,Mobile App Development,Front End Developer,UX Design",
    location:
      "Adelaide,Atlanta,Austin,Boston,Brisbane,Buffalo,Calgary,Charlotte,Chicago,Cincinnati,Cleveland,Columbus,Dallas,Denver,Detroit,Edinburgh,Halifax,Houston,Jacksonville,Kansas City,London,Los Angeles,Louisville,Manchester,Melbourne,Miami,Minneapolis,Nashville,New York City,Online,Orlando,Paris,Philadelphia,Phoenix,Pittsburgh,Portland,Raleigh,Sacramento,Salt Lake City,San Diego,San Francisco,San Jose,Seattle,Singapore,St. Louis,St. Louis,Sydney,Tampa,Toronto,Vancouver,Washington,Winnipeg",
  },
  {
    name: "Hack Reactor",
    bootcamp_url: "https://www.hackreactor.com/",
    info: "Founded in 2012, Hack Reactor provides immersive full-time and part-time online coding programs. Hack Reactor's bootcamps include a 12-week Software Engineering Immersive, a 36-week Part-Time Software Engineering Immersive, and a 19-week Software Engineering Immersive with JavaScript and Python. Led by passionate and experienced instructors, engineers, and career advisors, Hack Reactor graduates become job-ready software engineers that companies want to hire. Hack Reactor coding bootcamps are challenging, life-changing, and designed to fit a student's schedule and skill level. Hack Reactor trains students using a computer science and coding curriculum that models the exciting work being done in the software engineering industry.",
    courses: "Full Stack Developer",
    location: "Online",
  },
  {
    name: "iO Academy",
    bootcamp_url: "https://io-academy.uk/",
    info: "iO Academy is a coding bootcamp based in the UK that offers a 16-week, full-time, full stack coding bootcamp and a 12-week, part-time data science & machine learning bootcamp. These bootcamps are available online or in-person at campuses in Bath, Bristol, and Sheffield. Class sizes at iO Academy are kept small in order to better support students. The curriculum is designed to prepare students for their first developer or data science role, with a focus on practical experience working on projects throughout the course. There is an option to specialize at the end of the full stack course, either in advanced front end or complex problem-solving. Students will learn from experienced tech professionals, chosen to reflect the size of an average software scrum team. This makes project work as close to a professional tech experience as possible.",
    courses: "Front End Developer,Data Science,Full Stack Developer",
    location: "Bath,Bristol,Online,Sheffield",
  },
  {
    name: "Ironhack",
    bootcamp_url: "https://www.ironhack.com/en",
    info: "Ironhack offers full-time and part-time bootcamps in Web Development, UX/UI design, Data Analytics and Cyber Security in Miami (Florida), Madrid and Barcelona (Spain), Paris (France) Mexico City (Mexico), Berlin (Germany), Amsterdam (Netherlands), Sao Paulo (Brazil), Lisbon (Portugal) and remotely. Ironhack uses a customized approach to education by allowing students to shape their experience based on personal goals. Students who graduate from the Web Development Bootcamp will be skilled in technologies like JavaScript, HTML5 and CSS3. The UX/UI program covers Design Thinking, Photoshop, Sketch, Balsamiq, InVision, and JavaScript. Data Analytics covers data wrangling/cleaning, APIs, web scraping, and intermediate topics in Git, MySQL, Python, Data visualization, Panda, and Machine Learning. The Data Analytics program allows students to load, clean, explore and extract valuable insights from datasets and cultivate languages, such as Python, SQL and Tableau. The Cyber Security course provides students with the hands-on skills they need to land a job in the growing cybersecurity industry. In the Cyber Security course, students will develop the most in-demand knowledge to be part of any company's cybersecurity workforce and become a cybersecurity professional.",
    courses:
      "Front End Developer,Data Science,Full Stack Developer,UX Design,Cyber Security",
    location:
      "Amsterdam,Barcelona,Berlin,Bordeaux,Düsseldorf,Lisbon,London,Madrid,Mexico City,Miami,New York City,Online,Paris,Sao Paulo,Tampa",
  },
  {
    name: "ISDI Coders",
    bootcamp_url: "https://isdicoders.com/",
    info: "ISDI Coders offers a 16-week, part-time Front End Web Development with JavaScript & Firebase bootcamp and an 11-week, full-time Web Development Bootcamp with JavaScript in-person at campuses in Barcelona and Madrid, Spain and online. ISDI Coders students receive professional mentorship and build job-relevant projects.",
    courses: "Front End Developer,Full Stack Developer",
    location: "Barcelona,Madrid,Online",
  },
  {
    name: "Juno College of Technology",
    bootcamp_url: "https://junocollege.com/",
    info: "Founded in 2012 as HackerYou, Juno College of Technology offers full-time and part-time Web Development, Data Analytics, and UX Design courses both live online and on campus in Toronto, Canada. Juno College of Technology is ideal for Career Changers or Career Accelerators, and its bootcamp curriculums feature hands-on learning and portfolio-worthy projects. With an inclusive community, passionate industry experts, 1:1 career guidance, and flexible financing options such as Income Share Agreements, Juno is here to help students reach their goals. Juno College of Technology is also the school of choice for those underrepresented in tech looking to launch and grow their careers.",
    courses: "Front End Developer,Data Science",
    location: "Online,Toronto",
  },
  {
    name: "La Capsule Academy",
    bootcamp_url: "https://www.lacapsule.academy/",
    info: "La Capsule is a full-time, 10-week web and mobile development bootcamp in Lyon, Paris, Nice, Marseille (France), Monaco and Brussels (Belgium). Students will learn the common core of web development and master basic foundations. Students will also learn advanced concepts for back end and front end programming. Expect to learn the skills needed to create code that is more flexible and powerful, while building applications that can be deployed on mobile phones. The course also includes a 2-week final project with help from teachers and mentors. After the conclusion of the course, there is a 4-week mentor program where bootcamp graduates can utilize career prep and job search help.",
    courses: "Mobile App Development,Full Stack Developer",
    location: "Brussels,Lyon,Marseille,Nice,Paris",
  },
  {
    name: "Launch Academy",
    bootcamp_url: "https://launchacademy.com/",
    info: "Launch Academy is a full-time, 18-week program with a part-time, 8-week online phase and then a full-time, 10-week course in Boston, Massachusetts. After this immersive learning experience, aspiring software developers will be transformed into contributing members of the development community. The core curriculum is built on JavaScript, React, Ruby on Rails, HTML, and CSS. Students learn from building real products under the guidance of experienced software engineers. “Breakable toys” are at the core of the learning experience at Launch Academy. Students conceptualize products they always wanted to use and over the course of the program learn the technical skills they need to build and improve upon their “breakable toy”. Launchers complete the program with a workable product they can present to companies at career day where they meet with hiring managers from tech companies all over the country.",
    courses: "Front End Developer,Full Stack Developer",
    location: "Boston",
  },
  {
    name: "LearningFuze",
    bootcamp_url: "https://learningfuze.com/",
    info: "LearningFuze offers web development, data science, and UI/UX design bootcamps through live, virtual classrooms and in Irvine and Orange County, California. Students are taught by live instructors and get support throughout the course, including problem-solving skills, essential workplace and interviewing skills, and mindset training. Bootcamp students receive lifetime career services and 1:1 career coaching.",
    courses:
      "Full Stack Developer,Front End Developer,Mobile App Development,UX Design,Data Science",
    location: "Irvine,Online,Orange County",
  },
  {
    name: "Le Wagon",
    bootcamp_url: "https://www.lewagon.com/",
    info: "Le Wagon offers 9-week full-time and 24-week part-time courses in Web Development and Data Science at over 40 campuses across the world. The 24-week part-time course meets on weekday evenings and Saturdays. With a community of students with various backgrounds (engineers, marketing managers, designers, academics, etc.) and more than 13,500 alumni worldwide, applicants join an exciting tech community. All the students of Le Wagon share the same technical background and apply industry best practices. This mix between diversity & technical expertise makes the community unique.",
    courses: "Data Science,Full Stack Developer",
    location:
      "Amsterdam,Angers,Bali,Barcelona,Berlin,Bordeaux,Brussels,Buenos Aires,Cape Town,Casablanca,Chengdu,Cologne,Dubai,Istanbul,Kyoto,Lausanne,Lille,Lima,Lisbon,London,Lyon,Madrid,Marseille,Mauritius,Melbourne,Mexico City,Milan,Montreal,Munich,Nantes,Nice,Online,Oslo,Paris,Playa del Carmen,Porto,Rennes,Rio de Janeiro,Santiago,Sao Paulo,Seoul,Shanghai,Shenzhen,Singapore,Tel Aviv,Tokyo,Zurich",
  },
  {
    name: "Lighthouse Labs",
    bootcamp_url: "https://www.lighthouselabs.ca/",
    info: "Lighthouse Labs is a Canadian online bootcamp that teaches web development and data science. The bootcamps have small class sizes and on-demand mentorship from a community of over 40 full-time developers. The web development program covers JavaScript, Ruby on Rails, Node.JS, software architecture, and responsive design, as well as computer science and software engineering concepts. The Data Science bootcamp teaches Python, SQL, machine learning, and deep learning.",
    courses: "Front End Developer,Data Science,Full Stack Developer",
    location: "Online",
  },
  {
    name: "Makers Academy",
    bootcamp_url: "https://www.makers.tech/",
    info: "Makers Academy is a highly selective, 16-week, full-time program which teaches web development online and in hybrid cohorts at their campus in London, England. Makers Academy is creating a new generation of tech talent who are skilled and ready for the changing world of work. The academy is inspired by the idea of discovering and unlocking potential in people for the benefit of the 21st-century business and society. At the core, Makers combines tech education with employment possibilities that transform lives. The academy accepts only exceptional applicants into the course. While they are highly selective, they focus on a student's passion for becoming a developer by gauging their coding experience. Makers Academy also offers apprenticeships in Software Engineering and DevOps.",
    courses: "Full Stack Developer",
    location: "Bristol,Cambridge,London,Manchester,Online",
  },
  {
    name: "MAX Technical Training",
    bootcamp_url: "https://maxtrain.com/career-bootcamps/",
    info: "MAX Career Bootcamps offers Coding (full-time 13 weeks or part-time 25 weeks), Data Analytics (6 weeks), and Business Analyst (9 weeks) programs that can be completed in-person in Cincinnati, Ohio or live online. Class size is limited to 16 to ensure bootcamp students receive increased support from instructors.",
    courses: "Data Science,Full Stack Developer",
    location: "Cincinnati",
  },
  {
    name: "Prime Digital Academy",
    bootcamp_url: "https://www.primeacademy.io/",
    info: "Prime Digital Academy offers an intensive, 20-week full-stack coding bootcamp and an 18-week UX design bootcamp in Minneapolis, Minnesota. Working directly with Twin Cities tech employers, Prime Digital Academy has created programs that equip emerging engineers and designers with the skills they need to make immediate contributions. Prime students learn modern technologies, practical methodologies, and critical behavioral skills through carefully crafted curriculum and real-world projects for pro-bono clients in the community. Prime's immersive programs empower learners from diverse backgrounds to begin their new careers in months, not years.",
    courses: "Full Stack Developer,UX Design",
    location: "Kansas City,Minneapolis",
  },
  {
    name: "Rithm School",
    bootcamp_url: "https://www.rithmschool.com/",
    info: "Rithm School offers a full-time, 16-week, full stack web development immersion bootcamp in San Francisco, California and will be conducting cohorts remotely through the end of 2020. Their curriculum is centered around JavaScript and Python, and also covers PostgreSQL, Flask, Node, Express, React, Redux, and computer science fundamentals. Rithm School aims to help students to not only gain a deep understanding of the industry but also graduate with a portfolio of real-world projects in which they have been involved. Rithm School was founded in 2016 in San Francisco, California to provide access to a full-time accelerated learning program, with class sizes small enough to provide one-on-one instruction with instructors who have experience in both teaching and web development.",
    courses: "Front End Developer,Full Stack Developer",
    location: "San Francisco",
  },
  {
    name: "Sabio",
    bootcamp_url: "https://sabio.la/",
    info: "Sabio is a developer community offering 12-week full-time coding bootcamps in Los Angeles, Orange County, and Online. Sabio focuses on .NET/C# and trains across the full-stack in Mobile, Front End, Back End, Source Control, Database and Development platforms. Its project-based learning curriculum and pedagogy provide a superior training experience that exposes its students to the full software development life cycle.",
    courses:
      "Front End Developer,Product Manager,Mobile App Development,Full Stack Developer",
    location: "Los Angeles,Online,Orange County,Riverside",
  },
  {
    name: "SIT Academy",
    bootcamp_url: "https://sit.academy/",
    info: "SIT Academy offers 12-week full-time bootcamps in full stack software development and data science in Zurich, Switzerland. The Full Stack Software Development program covers JavaScript, React.js, Docker, Python, Django, and more. The Data Science bootcamp covers R, Python, Machine Learning, natural language processing, and deep learning. Students participate in immersive, practical, and hands-on experience. SIT Academy aims to give students the chance to become programmers no matter their stage in life and is focused on democratizing IT education to enhance Switzerland as an important technology hub within Europe. Classes are hosted at Technopark Zürich.",
    courses:
      "Product Manager,Data Science,Full Stack Developer,UX Design,Cyber Security",
    location: "Munich,Online,Zurich",
  },
  {
    name: "Skill Distillery",
    bootcamp_url: "https://skilldistillery.com/",
    info: "Skill Distillery is an intensive, 16-week Java bootcamp in Denver, Colorado. The course is arranged into three units -- Java Programming, Server-side Java, and Front-end Development. The curriculum focuses on the fundamentals of programming, Java (and its libraries), unit testing, Spring, Spring MVC, and using a source code repository. Students will also gain experience deploying web content to a web server and navigating the server file system from the command line. Skill Distillery graduates will be prepared to take the Oracle Certified Associate -- Java Programmer exam and will be on track for a career as a web interface designer or a full stack application developer.",
    courses: "Full Stack Developer",
    location: "Denver",
  },
  {
    name: "Software Guild",
    bootcamp_url: "https://www.thesoftwareguild.com/",
    info: "The Software Guild offers immersive full-time, online, 12-week or part-time, 10 to 14-month coding bootcamps. Courses focus on .NET/C# and Java and do a deep dive into the language fundamentals, server side, data tier, user interface, and tools. Software Guild focuses on .NET/C# and Java because those stacks are stable, proven, and in highest demand in the enterprise. The Software Guild takes driven beginners, or more experienced students passionate about development, and prepares them to compete for jobs as professional developers.",
    courses: "Full Stack Developer",
    location: "Online",
  },
  {
    name: "SPICED Academy",
    bootcamp_url: "https://www.spiced-academy.com/en",
    info: "SPICED Academy offers full-time, 12-week coding bootcamps and data science bootcamps in Berlin, Germany. The Full Stack Web Development program covers JavaScript, HTML, CSS, jQuery, MV Frameworks, NodeJS, and SQL. The data science bootcamp teaches data analysis in Python, machine learning, data visualization, SQL, noSQL, data infrastructure, and GitHub. Students will learn vital skills like effective communication, problem-solving, and self-awareness.",
    courses: "Data Science,Full Stack Developer",
    location: "Berlin,Cologne,Hamburg,Stuttgart",
  },
  {
    name: "Tech Elevator",
    bootcamp_url: "https://www.techelevator.com/",
    info: "Tech Elevator offers both full-time and part-time coding bootcamps that prepare students for a career as a software developer, starting with an Aptitude Test. Applicants can then choose to study Java or .NET. Throughout the bootcamp, students also learn HTML, CSS, SQL, API, and JavaScript. The full-time bootcamp runs for 14 weeks, Monday through Friday, 9-4:30 pm, and the part-time bootcamp runs for 30-weeks with a mix of independent study, live lectures and small-group programming. Both programs have a low student-to-instructor ratio to ensure the best supportive environment for participants. Tech Elevator's instruction is delivered both remotely and in-person at campuses located in Cincinnati, Cleveland, Columbus, Charlotte, Chicago, Dallas, Detroit, Philadelphia, Pittsburgh and Wilmington. Tech Elevator also offers students beyond its core markets, and throughout North America, class options through its National Live Remote program.",
    courses: "Full Stack Developer",
    location:
      "Charlotte,Chicago,Cincinnati,Cleveland,Columbus,Dallas,Detroit,Online,Philadelphia,Pittsburgh,Wilmington",
  },
  {
    name: "The Ohio State University Boot Camps",
    bootcamp_url: "https://eng-bootcamps.osu.edu/",
    info: "The Ohio State University College of Engineering offers a 12-week, full-time web development boot camp, and 24-week, part-time web development, cybersecurity, and UX/UI boot camps held online. The full stack curriculum includes HTML, CSS, JavaScript, jQuery, Bootstrap, Express.js, Node.js, databases, MongoDB, MySQL, and Git, with in-person and online options.",
    courses: "Full Stack Developer,UX Design,Cyber Security",
    location: "Online",
  },
  {
    name: "The Tech Academy",
    bootcamp_url: "https://www.learncodinganywhere.com/",
    info: "The Tech Academy offers several full-time and part-time technology bootcamps that can be completed online or in-person at their Portland, Oregon campus. The Tech Academy offers bootcamps in computer programming, website development, cybersecurity, and front end development. The immersive experience aims to create well-rounded technology professionals, and also gives students the option to take the course at their own pace. There are also no set starts dates or rigid scheduling. Students can enroll at any time, study from anywhere and choose whatever study schedule they would like.",
    courses: "Full Stack Developer,Front End Developer,Cyber Security",
    location: "Online,Portland",
  },
  {
    name: "Turing",
    bootcamp_url: "https://turing.edu/",
    info: "Turing School of Software & Design is a federally accredited, 7-month, full-time online training program based in Denver, CO turning driven students into professional developers. Students who take their Back End Engineering Program or their Front End Engineering Program will be surrounded by a supportive team dedicated to their career success. Turing's mission is to unlock human potential by training a diverse, inclusive student body to succeed in high-fulfillment technical careers, while Turing's vision is a world powered by technology where the people building it represent the people using it. Turing is the brainchild of Jeff Casimir and Jumpstart Labs (you might recognize these names from Hungry Academy and gSchool, among other achievements). The staff at Turing emphasizes their educational experience, not just their years as developers, and promises that successful graduates of the school will be valuable contributors to the company they choose to work for through community-driven education.",
    courses: "Front End Developer,Full Stack Developer",
    location: "Denver",
  },
  {
    name: "UW Boot Camps",
    bootcamp_url: "https://bootcamp.uw.edu/",
    info: "UW Boot Camps offer 24-week, part-time, and 12-week, full-time web development courses, and a 24-week, part-time financial technology course. The full stack curriculum includes HTML, CSS, JavaScript, jQuery, Bootstrap, Express.js, Node.js, databases, MongoDB, MySQL, and Git. The fintech curriculum covers Python programming, financial libraries, machine learning algorithms, Ethereum, blockchain, and more.",
    courses: "Full Stack Developer",
    location: "Seattle",
  },
  {
    name: "We Can Code IT",
    bootcamp_url: "https://wecancodeit.org/",
    info: "We Can Code IT (WCCI) is a full-stack software development bootcamp with physical campuses in Cleveland and Columbus, Ohio, and a virtual campus that spans nationwide. WCCI offers PreSkill and ReSkill Programs. Their PreSkill program is offered in-person or remotely and is designed to bolster the confidence of less tech-savvy students in preparation for full-stack coding bootcamp. The Reskill full-stack coding bootcamp program is offered in both C# and Java as a 14-week, in-person or remote program or a 22-week part-time remote program. Both programs cover Javascript, HTML5, CSS3, MVC, Agile Methodologies, Test Driven Development (TDD), GitHub, ORMs and more.",
    courses: "Front End Developer,Full Stack Developer",
    location: "Akron,Cincinnati,Cleveland,Columbus,Detroit,Pittsburgh",
  },
  {
    name: "Wild Code School",
    bootcamp_url: "https://www.wildcodeschool.com/en-GB",
    info: "Wild Code School is a 5-month, European training program teaching in-demand digital skills through a blended learning approach. Wild Code School was created to train digital professionals to adapt to the changing work environment. The teaching style uses a combination of e-learning, in-class training, and hands-on projects where students master agile project management methods and other collaborative tools. Students are taught web development languages and application frameworks that vary from program to program. For example: PHP/Symfony, JavaScript, AngularJS, Vue.js, React or Java and Android.",
    courses:
      "Full Stack Developer,Front End Developer,Data Science,Mobile App Development,Product Manager",
    location: "Berlin,Bordeaux,Lille,Lisbon,Lyon,Nantes,Paris",
  },
  {
    name: "Zip Code Wilmington",
    bootcamp_url: "https://www.zipcodewilmington.com/",
    info: "Zip Code Wilmington offers two full-time, 12-week bootcamp programs focused on Java and Data Engineering and Analytics in Wilmington, Delaware. Founded in 2015, Zip Code Wilmington gives students the technical, interpersonal and leadership skills needed to secure a competitive job in technology and increase their earning potential. Students attend classes Monday through Friday and put in between 80-100 hours a week.",
    courses: "Full Stack Developer",
    location: "Wilmington",
  },
];

const seedBootcamps = () => Bootcamp.bulkCreate(bootcampdata);

module.exports = seedBootcamps;
