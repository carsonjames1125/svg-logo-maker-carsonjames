// triangle

const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<triangle cx='50' cy='50' r='50' fill='$(this.colorOfLogo)' />`;
    }
}

module.exports = Triangle;