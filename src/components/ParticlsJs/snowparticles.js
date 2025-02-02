/* eslint-disable no-unused-vars */
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const SnowParticles = (props) => {
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
          value: "#ffffff", // Set background color to black
        },
      },
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: "#f71b1e", // White particles for snow
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: false,
          },
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          
          outModes: {
            default: "bounce",
          },
          speed: 6,
          direction: "bottom", // Falling snow
          outModes: {
            default: "out",
          },
        },
        lineLinked: {
          enable: false, // No linking for snow
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 1,
          },
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 100,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default SnowParticles;
