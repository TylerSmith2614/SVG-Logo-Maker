const Circle = require("../library/Circle.js");

describe("Circle", () => {
  it("Should render an SVG file that has a circle shape.", () => {
    const svg = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
  <circle cx="150" cy="100" r="80" fill="undefined" />
    
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
    
  </svg>`;
    const circle = new Circle();
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(svg);
  });
});
