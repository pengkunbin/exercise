export class Shape {
    draw() { }
    resize() { }
    rotate() { }
}
export class Triangle extends Shape {
    draw() { }
}
export class Rectangle extends Shape {
    draw() { }
    get width() { return 0; }
    set width(w) { }
    get height() { return 0; }
    set height(h) { }
}
export class Circle extends Shape {
    draw() { }
    get radius() { return 0; }
    set radius(r) { }
}
