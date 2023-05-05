class shape{
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}
class triangle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.svg = `<polygon fill="${this.shapeColor}" points="70,180 230,180 150,20"/>
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
class circle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.svg = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="this.textColor">${this.text}</text>`
    }
}
class square extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.svg = `<rect x="70" y="20" fill="${this.shapeColor}" width="160" height="160"/>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

function generateSVG(data){
    console.log(data);
    let shape;

    return ``;
}

module.exports = generateSVG;