import React, { useRef, useState, useEffect } from "react";
import { Circle, Square, Macaroni } from "./canvasUtils/particles";

export default function Hero() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let requestId;

    let circleArray = [];
    for (let i = 0; i < 50; i++) {
      const circle_x = Math.random() * window.innerWidth;
      const circle_y = Math.random() * window.innerHeight;
      const circle_dx = Math.random() - 0.5;
      const circle_dy = Math.random() - 0.5;
      circleArray.push(
        new Circle(context, circle_x, circle_y, circle_dx, circle_dy)
      );
    }

    let macaroniArray = [];
    for (let i = 0; i < 50; i++) {
      const macaroni_x = Math.random() * window.innerWidth;
      const macaroni_y = Math.random() * window.innerHeight;
      const macaroni_dx = Math.random() - 0.5;
      const macaroni_dy = Math.random() - 0.5;
      macaroniArray.push(
        new Macaroni(context, macaroni_x, macaroni_y, macaroni_dx, macaroni_dy)
      );
    }

    let squareArray = [];
    for (let j = 0; j < 50; j++) {
      const square_x = Math.random() * window.innerWidth;
      const square_y = Math.random() * window.innerHeight;
      const square_dx = Math.random() - 0.5;
      const square_dy = Math.random() - 0.5;

      squareArray.push(
        new Square(context, square_x, square_y, square_dx, square_dy)
      );
    }

    const animate = () => {
      requestId = requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      circleArray.forEach(circle => circle.update());
      squareArray.forEach(square => square.update());
      macaroniArray.forEach(macaroni => macaroni.update());
    };

    animate();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="hero-wrapper">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}
