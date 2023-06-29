// need inquirer
// need fs to write the files
// need shapes and logo descriptions

const inquirer = require('inquirer');

const fs = require('fs');

const { generateSVG } = require('./lib/generateSVG')

const { generateShape } = require('./lib/generateShape')


// need to write the function that writes the file
// need a prompt for the questions for the user

inquirer
.prompt([
{
    type: 'input',
    name: 'nameOfLogo',
    message: 'Please type the name of your logo, use between 1-3 characters.',
},
{
    type: 'input',
    name: 'colorOfLogoName',
    message: 'Please choose a color or a hexdecimal number for the texts color.',
},
{
    type: 'input',
    name: 'colorOfLogo',
    message: 'Please choose a color or a hexdecimal number for the logos color.'
},
{
    type: 'list',
    name:'logoShape',
    message: 'Please choose a logo shape.',
    choices: ["square", "circle", "triangle"],
},
])
.then((data) => {
    const svgImg = './assets/logo.svg';
    const finalLogo = generateShape(data);

fs.writeFile(svgImg, generateSVG(finalLogo), (err) =>
err ? console.error(err) : console.log("Generated SVG Logo @ logo.svg")
 );
})
.catch((err)=> console.log(err));
