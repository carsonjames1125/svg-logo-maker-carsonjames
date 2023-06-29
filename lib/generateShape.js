// this helps with the usage and creation of the shapes that i have picked to give the user to choose from. 

const Square = require('./shapes/square');

const Circle = require('./shapes/circle');

const Triangle = require('./shapes/triangle');

// need a function that generates the shape from which was picked by the user

const generateShape = (input) => {
    const { logoShape } = input;
    switch (logoShape) {
        case "square":
            const generateSquare = new Square(input);
            return generateSquare;
            break;

        case 'circle':
            const generateCircle = new Circle(input);
            return generateCircle;
            break;

        case 'triangle':
            const generateTriangle = new Triangle(input);
            return generateTriangle;
            break;
    }
};

module.exports = { generateShape };