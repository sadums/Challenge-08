const shapes = require('./shapes');
const triangle = shapes.triangle;
const circle = shapes.circle;
const square = shapes.square;

describe('Shapes', () => {
    describe('Triangle Render', () => {
        it('should return a triangle svg', () => {
            const myTriangle = new triangle('SA', 'green', 'blue');
            const result = myTriangle.render();
            const expected = `<polygon fill="blue" points="70,180 230,180 150,20"/>\n<text x="150" y="140" font-size="60" text-anchor="middle" fill="green">SA</text>`;

            expect(result).toBe(expected);
        });
    });
    describe('Square Render', () => {
        it('should return a square svg', () => {
            const mySquare = new square('SA', 'green', 'blue');
            const result = mySquare.render();
            const expected = `<rect x="70" y="20" fill="blue" width="160" height="160"/>\n<text x="150" y="120" font-size="60" text-anchor="middle" fill="green">SA</text>`;

            expect(result).toBe(expected);
        });
    });
    describe('Circle Render', () => {
        it('should return a cirle svg', () => {
            const myCircle = new circle('SA', 'green', 'blue');
            const result = myCircle.render();
            const expected = `<circle cx="150" cy="100" r="80" fill="blue" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">SA</text>`;

            expect(result).toBe(expected);
        });
    });
});