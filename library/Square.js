class Square {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
  render() {
    return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" style="fill: ${this.color}"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>
  `;
  }
}
module.exports = Square;
