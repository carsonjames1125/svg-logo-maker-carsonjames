// pentagon

const Shape = require('./shapes');

class Pentagon extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<pentagon cx='50' cy='50' r='50' fill='$(this.logoColor)' />`;
    }
}

module.exports = Pentagon;