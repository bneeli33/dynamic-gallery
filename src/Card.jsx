import React from "react";

export default function Card({ images }) {
  return (
    <>
      {images.map((img, index) => (
        <div
          className="card"
          key={index}
          style={{ background: `url("${img.url}") no-repeat center/cover` }}
        ></div>
      ))}
    </>
  );
}
