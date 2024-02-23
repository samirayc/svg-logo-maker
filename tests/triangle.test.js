const Triangle = require('../assets/Triangle.js');

describe('Triangle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const triangle = new Triangle('aqua','SYC','lightpink');
        expect(triangle.render()).toEqual(`
        <svg version="2" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="aqua"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="lightpink">SYC</text>
        </svg>
        `
        );
    });
});