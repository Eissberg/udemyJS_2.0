'use strict';

class Rectangle {
    constructor (heigth, width) {
        this.heigth = heigth;
        this.width = width;
    }

    calcArea() {
        return this.heigth * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(heigth, width, text, bgColor) {
       super(heigth, width);                        //Наследование из класса Rectangle
       this.text = text;
       this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }

}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());