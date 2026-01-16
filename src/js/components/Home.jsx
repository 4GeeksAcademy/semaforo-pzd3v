import React, { useState, useEffect } from "react";
//include images into your bundle
import ReactDOM from "react-dom/client";

//create your first component

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [state, setState] = useState(false);
  const [purple, setPurple] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (state) {
      intervalo = setInterval(() => {
        setColor((prevColor) => {
          if (prevColor === "red") {
            return "yellow";
          } else if (prevColor === "yellow") {
            return "green";
          } else if (prevColor === "green") {
            return "red";
          }
        });
      }, 3000);
    }
    return () => clearInterval(intervalo);
  }, [state]);

  return (
    <div id="semaforo">
      <div id="soporte"></div>
      <div id="cuerpo-semaforo">
        <div
          onClick={() => setColor("red")}
          className={`light bg-danger ${color === "red" ? "glow-red" : ""}`}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={`light bg-warning ${
            color === "yellow" ? "glow-yellow" : ""
          }`}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={`light bg-success ${
            color === "green" ? "glow-green" : ""
          }`}
        ></div>
        {purple && (
          <div
            onClick={() => { setColor("purple"); setState(false); }}
            className={`light bg-info ${color === "purple" ? "glow-purple" : ""}`}
            style={{ backgroundColor: "purple" }} // Forzamos el color si la clase no existe
          ></div>
        )}
      </div>
      <div className="mt-5">
        <div
          className="btn btn-primary mx-2"
          onClick={() => {
            const nextColor =
              color === "red" ? "yellow" : color === "yellow" ? "green" : "red";
            setColor(nextColor);
            setState(false);
          }}
        >
          Alternar Color
        </div>
        <div className="btn btn-primary"
          onClick={() => setPurple(!purple)}>Purpura</div>
        <div
          className="ms-2 btn btn-primary"
          onClick={() => {
            setState((state) => !state);
          }}
        >
          Auto 3s
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return <TrafficLight />;
};

export default Home;
