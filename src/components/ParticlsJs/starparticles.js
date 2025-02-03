/* eslint-disable no-unused-vars */
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const StarComponent = (props) => {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff", // Black background for night sky
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "trail",
          },
        },
        modes: {
          trail: {
            delay: 0.1,
            quantity: 10,
            length: 10,
            fillColor: "#f71b1e",
          },
        },
      },
      particles: {
        color: {
          value: "#f71b1e", // White shooting stars
        },
        move: {
          enable: true,
          speed: 8, // Fast-moving stars
          direction: "top-right", // Diagonal shooting effect
          straight: true, // Ensures straight movement
          outModes: {
            default: "out", // Stars disappear when out of view
          },
        },
        number: {
          value: 30, // Fewer but visible shooting stars
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: 100, // Full visibility
          animation: {
            enable: true,
            speed: 0.1,
            minimumValue: 0.0,
            sync: false,
          },
        },
        shape: {
          type: "circle", // Star shapes
        },
        size: {
          value: { min: 2, max: 3 }, // Varying star sizes
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
            sync: false,
          },
        },
        shadow: {
          enable: true,
          color: "#ffffff",
          blur: 5, // Glow effect
        },
        trail: {
          enable: true,
          length: 10,
          fillColor: "#ffffff", // Leaves a trail
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default StarComponent;
