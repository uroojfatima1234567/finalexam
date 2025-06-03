import React from 'react';

export default function TrafficLightSimulator() {
  const lights = [
  { name: "red", color: "#ff3333", glow: "0 0 40px 10px #ff3333", off: "#3a1818" },
  { name: "yellow", color: "#ffff66", glow: "0 0 40px 10px #ffff66", off: "#3a3918" },
  { name: "green", color: "#66ff99", glow: "0 0 40px 10px #008000", off: "#183a18" },
];

  return (
    <div className="lightcontainer">
      <div className="lightbox">
        {lights.map((light) => (
          <div key={light.name} className="light" />
        ))}
      </div>

      <style>{`
        .lightcontainer {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #222;
          min-height: 100vh;
        }
        .lightbox {
          background: #333;
          border-radius: 30px;
          padding: 30px 20px;
          box-shadow: 0 0 20px #111;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100px;
        }
        .light {
          border: 4px solid #111;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin: 0 auto;
          background: #3a1818;
          box-shadow: 0 0 10px #111 inset;
        }
      `}</style>
    </div>
  );
}
