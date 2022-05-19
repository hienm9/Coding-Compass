const { Bootcamp } = require("../models");

const bootcampdata = [
  {
    name: "OSU Bootcamp",
    bootcamp_url: "https://eng-bootcamps.osu.edu/",
    info: "The Ohio State University College of Engineering offers a 12-week, full-time web development boot camp, and 24-week, part-time web development, cybersecurity, and UX/UI boot camps held online. The full stack curriculum includes HTML, CSS, JavaScript, jQuery, Bootstrap, Express.js, Node.js, databases, MongoDB, MySQL, and Git, with in-person and online options.",
    courses: "Full Stack Developer,UX Design,Cyber Security",
    location: "Online",
  },
  {
    name: "Coding Dojo",
    bootcamp_url: "https://www.codingdojo.com/",
    info: "Interested in starting your new career in tech?",
    courses: "Full Stack Developer,UX Design,Cyber Security",
    location: "Online",
  },
  {
    name: "Codesmith",
    bootcamp_url: "https://www.switchup.org/bootcamps/codesmith",
    info: "Full-Time Software Engineering Immersive, JavaScript for Beginners, Part-Time Software Engineering Immersive",
    courses: "Full Stack Developer,UX Design,Cyber Security",
    location: "Online",
  },
  {
    name: "General Assembly",
    bootcamp_url:
      "https://www.switchup.org/bootcamps/general-assembly?src=list-featured",
    info: "General Assembly is creating a global community of individuals empowered to pursue work they love.",
    courses: "Full Stack Developer,UX Design,Cyber Security",
    location: "Online",
  },
];

const seedBootcamps = () => Bootcamp.bulkCreate(bootcampdata);

module.exports = seedBootcamps;
