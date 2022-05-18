const { Bootcamp } = require('../models');

const bootcampdata = [
  {
    name: 'OSU Bootcamp',
    bootcamp_url: 'https://eng-bootcamps.osu.edu/',
    info: 'The Ohio State University Coding Boot Camp.',
  },
  {
    name: 'Coding Dojo',
    bootcamp_url: 'https://www.codingdojo.com/',
    info: 'Interested in starting your new career in tech? ',
  },
  {
    name: 'Codesmith',
    bootcamp_url: 'https://www.switchup.org/bootcamps/codesmith',
    info: 'Full-Time Software Engineering Immersive, JavaScript for Beginners, Part-Time Software Engineering Immersive',
  },
  {
    name: 'General Assembly',
    bootcamp_url: 'https://www.switchup.org/bootcamps/general-assembly?src=list-featured',
    info: 'General Assembly is creating a global community of individuals empowered to pursue work they love.',
},
];

const seedBootcamps = () => Bootcamp.bulkCreate(bootcampdata);

module.exports = seedBootcamps;
