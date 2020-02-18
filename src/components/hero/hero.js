import React, { useRef, useState, useEffect } from "react";
import { Circle, Square, Macaroni } from "./canvasUtils/particles";

export default function Hero() {
  const canvasRef = useRef();
  const heroRef = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

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
    <div className="hero-wrapper" ref={heroRef}>
      <canvas ref={canvasRef} width={width} height={height} />
      <div className="hero-text-container">
        <h1>Hello There,</h1>
      </div>
      <div className="scroll-pointer">
        <svg
          width="8"
          height="41"
          viewBox="0 0 8 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.64645 40.6648C3.84171 40.8601 4.15829 40.8601 4.35355 40.6648L7.53553 37.4829C7.7308 37.2876 7.7308 36.971 7.53553 36.7758C7.34027 36.5805 7.02369 36.5805 6.82843 36.7758L4 39.6042L1.17157 36.7758C0.976311 36.5805 0.659728 36.5805 0.464466 36.7758C0.269204 36.971 0.269204 37.2876 0.464466 37.4829L3.64645 40.6648ZM3.5 0L3.5 40.3113H4.5L4.5 0L3.5 0Z"
            fill="#0F2E5C"
          />
        </svg>
        <p>
          scroll <br /> down
        </p>
      </div>
    </div>
  );
}
