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
    bootcamp_url: "https://www.coderfoundry.com/",
    info: "Codesmith offers full-time (12-week) and part-time (38-week) immersive software engineering bootcamps in Los Angeles, New York City, and online. Codesmith is a selective, need-blind program focusing largely on computer science and full-stack JavaScript, with an emphasis on technologies like React, Redux, Node, build tools, Dev Ops and machine learning. This program enables Codesmith students (known as Residents) to build open-source projects, with the aim of moving into positions as skilled software engineers. Codesmith Residents become engineers, not technicians, through a deep understanding of advanced JavaScript practices, fundamental computer science concepts (such as algorithms and data structures), and object-oriented and functional programming. Codesmith helps residents develop strong problem-solving abilities and technical communication skills -- valued capacities in a software engineer.",
    courses: "Front End Developer,Full Stack Developer",
    location:
      "Atlanta,Birmingham,Boston,Chicago,Dallas,Houston,London,Los Angeles,New York City,Online,Philadelphia,Phoenix,Portland,Seattle",
  },
  // {
  //   name: "OSU Bootcamp",
  //   bootcamp_url: "https://eng-bootcamps.osu.edu/",
  //   info: "The Ohio State University College of Engineering offers a 12-week, full-time web development boot camp, and 24-week, part-time web development, cybersecurity, and UX/UI boot camps held online. The full stack curriculum includes HTML, CSS, JavaScript, jQuery, Bootstrap, Express.js, Node.js, databases, MongoDB, MySQL, and Git, with in-person and online options.",
  //   courses: "Full Stack Developer,UX Design,Cyber Security",
  //   location: "Online",
  // },
  // {
  //   name: "Coding Dojo",
  //   bootcamp_url: "https://www.codingdojo.com/",
  //   info: "Interested in starting your new career in tech?",
  //   courses: "Full Stack Developer,UX Design,Cyber Security",
  //   location: "Online",
  // },
  // {
  //   name: "Codesmith",
  //   bootcamp_url: "https://www.switchup.org/bootcamps/codesmith",
  //   info: "Full-Time Software Engineering Immersive, JavaScript for Beginners, Part-Time Software Engineering Immersive",
  //   courses: "Full Stack Developer,UX Design,Cyber Security",
  //   location: "Online",
  // },
  // {
  //   name: "General Assembly",
  //   bootcamp_url:
  //     "https://www.switchup.org/bootcamps/general-assembly?src=list-featured",
  //   info: "General Assembly is creating a global community of individuals empowered to pursue work they love.",
  //   courses: "Full Stack Developer,UX Design,Cyber Security",
  //   location: "Online",
  // },
];

const seedBootcamps = () => Bootcamp.bulkCreate(bootcampdata);

module.exports = seedBootcamps;
