const colorArray = [
  "#7bdff2",
  "#d4f2d2",
  "#eff7f6",
  "#f2b5d4",
  "#f7d6e0",
  "#fff6d8"
];

export function Circle(c, x, y, dx, dy) {
  this.c = c;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = Math.random() * 10 + 1;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.r, Math.PI * 2, false);

    c.fillStyle = this.color;
    c.fill();
  };

  this.update = () => {
    if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

export function Macaroni(c, x, y, dx, dy) {
  this.c = c;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = Math.random() * 20 + 1;
  this.lineWidth = Math.random() * 15 + 5;
  this.rotate = Math.PI * Math.random();

  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    c.beginPath();
    c.save();

    c.rotate(-this.rotate);
    c.arc(this.x, this.y, this.r, Math.PI, false);
    c.lineWidth = this.lineWidth;
    c.lineCap = "round";
    c.strokeStyle = this.color;
    c.stroke();

    c.restore();
  };

  this.update = () => {
    if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

export function Square(c, x, y, dx, dy) {
  this.c = c;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.length = Math.random() * 25 + 1;
  this.rotate = Math.PI * Math.random();

  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    c.beginPath();
    c.save();

    c.rotate(this.rotate);
    c.rect(this.x, this.y, this.length, this.length);
    c.fillStyle = this.color;
    c.fill();

    c.restore();
  };

  this.update = () => {
    if (this.x + this.length > window.innerWidth || this.x - this.length < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.length > window.innerHeight || this.y - this.length < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}
