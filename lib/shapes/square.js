// square

const Shape = require('./shapes');

class Square extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<Square cx='50' cy='50' r='50' fill='$(this.logoColor)' />`;
    }
}

module.exports = Square;