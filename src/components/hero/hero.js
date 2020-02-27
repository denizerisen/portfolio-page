import React, { useRef, useState, useEffect } from "react";
import { Circle, Square, Macaroni } from "./canvasUtils/particles";
import sprite from "../../assets/sprite.svg";
import Link from "../link/link";

export default function Hero() {
  const canvasRef = useRef();
  const heroRef = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const particleCount = width > 760 ? 50 : 25;

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
    for (let i = 0; i < particleCount; i++) {
      const circle_x = Math.random() * window.innerWidth;
      const circle_y = Math.random() * window.innerHeight;
      const circle_dx = Math.random() - 0.5;
      const circle_dy = Math.random() - 0.5;
      circleArray.push(
        new Circle(context, circle_x, circle_y, circle_dx, circle_dy)
      );
    }

    let macaroniArray = [];
    for (let k = 0; k < particleCount; k++) {
      const macaroni_x = Math.random() * window.innerWidth;
      const macaroni_y = Math.random() * window.innerHeight;
      const macaroni_dx = Math.random() - 0.5;
      const macaroni_dy = Math.random() - 0.5;
      macaroniArray.push(
        new Macaroni(context, macaroni_x, macaroni_y, macaroni_dx, macaroni_dy)
      );
    }

    let squareArray = [];
    for (let j = 0; j < particleCount; j++) {
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
  }, [width, height, particleCount]);

  return (
    <div className="hero-wrapper" ref={heroRef}>
      <canvas ref={canvasRef} width={width} height={height} />
      <div className="hero-text-container">
        <h1>Hello There,</h1>
        <p>
          I'm Deniz. I am a frontend developer also dabbling a
          <span> tiny bit</span> in UI design, currently based in İzmir.
        </p>
      </div>
      <div className="social-links">
        <Link url="https://twitter.com/dnzerisen" type="twitter" />
        <Link
          url="https://www.linkedin.com/in/deniz-eri%C5%9Fen-b77410161/"
          type="linkedin"
        />
        <Link url="https://github.com/denizerisen" type="github" />
      </div>
      <div className="scroll-pointer">
        <svg className="icon">
          <use href={sprite + "#scroll-arrow"} />>
        </svg>
        <p>
          scroll <br /> down
        </p>
      </div>
    </div>
  );
}
