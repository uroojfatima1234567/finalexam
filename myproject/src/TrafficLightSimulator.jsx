
import React, { useState, useRef, useEffect } from "react";

const lights = [
    { name: "red", color: "#ff3333", glow: "0 0 40px 10px #ff3333", off: "#3a1818" },
    { name: "yellow", color: "#ffff66", glow: "0 0 40px 10px #ffff66", off: "#3a3918" },
    { name: "green", color: "#66ff99", glow: "0 0 40px 10px #008000", off: "#183a18" },
];

export default function TrafficLightSimulator() {
    const [active, setActive] = useState(0);
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setActive((prev) => (prev + 1) % lights.length);
        }, 3000);
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <div className="lightcontainer">
            <div className="lightbox">
                {lights.map((light, idx) => (
                    <div
                        key={light.name}
                        className="light"
                        style={{
                            background: active === idx ? light.color : light.off,
                            boxShadow: active === idx ? light.glow : "0 0 10px #111 inset",
                            border: "4px solid #111",
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            margin: "0 auto",
                            transition: "background 0.5s, box-shadow 0.5s",
                        }}
                    />
                ))}
            </div>
            <style>{`
                .lightcontainer {
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                    background: #222;
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
            `}</style>
        </div>
    );
}