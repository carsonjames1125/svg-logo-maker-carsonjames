// this js is to help generate the logo to be used in the application

const generateSVG = (shape) => {
    return
    //need to insert a starter image to use and the html and css aspects 
    ` <svg viewBox= "0 0 100 100 width='300' height='200'>
    ${shape.render()}
    <text
    x='50%'
    y='${shape.logoShape != 'square' ? '50%' : '40%'}'
    text-anchor='middle'
    fill='${shape.textColor}'
    font-size='15px' letter-spacing='3px'
    font-family='monospace'>$(shape.logoName)
    </text>
    </svg>
    `;
};

module.exports = { generateSVG };