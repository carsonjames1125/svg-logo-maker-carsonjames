// this program helps generate the logo, shape, and text from the user responses. 

// class Shape {
//     constructor(colorOfLogo, nameOfLogo, colorOfLogoName) {
//         this.colorOfLogo = colorOfLogo;
//         this.nameOfLogo = nameOfLogo;
//         this.colorOfLogoName = colorOfLogoName;
//     }
// };

// code does not generate the logo going to try something new
// need colors for the program to run 

const shapeColor = require('colors');

class Shape {
    constructor({ nameOfLogo, colorOfLogoName, colorOfLogo, logoShape }) {
        this.logoShape = logoShape;

        this.validateTextResponse(nameOfLogo);
        this.nameOfLogo = nameOfLogo;

        this.validateColorResponse(colorOfLogoName);
        this.colorOfLogoName = colorOfLogoName;

        this.validateColorResponse(colorOfLogo);
        this.colorOfLogo = colorOfLogo;
    }

    // need and if section for if the input is blank

    ifResponseEmpty(input) {
        if (!input) throw new Error("Please give an input for the section.");
    }

    validateTextResponse(input) {
        this.ifResponseEmpty(input);
// text must be three characters or less
        if (input.length > 3) {
            throw new Error("text cannot be longer than 3 characters")
        }
    }

    validateColorResponse(input) {
        this.ifResponseEmpty(input);
        //changes input to lowercase
        input = input.toLowerCase();

        if (!shapeColor(input)) {
            throw new Error("Please enter a valid color or color hex code for the logo.");
        }
    }
    
    render() {
        throw new Error('error processing data');
    }
}

module.exports = Shape;