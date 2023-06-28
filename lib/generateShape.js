// this helps with the usage and creation of the shapes that i have picked to give the user to choose from. 

const Square = require('./shapes/square');

const Circle = require('./shapes/circle');

const Pentagon = require('./shapes/pentagon');

// need a function that generates the shape from which was picked by the user

const generateShape = (data) => {
    const { logoShape } = data;
    switch (logoShape) {
        case "square":
            const generateSquare = new Square(data);
            return generateSquare;
            break;
        case 'circle':
            const generateCircle = new Circle(data);
            return generateCircle;
            break;
        case 'pentagon':
            const generatePentagon = new Pentagon(data);
            return generatePentagon;
            break;
    }
};

module.exports = { generateShape };