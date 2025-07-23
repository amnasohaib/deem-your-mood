"use client";

const AnimatedIcon = ({ icon, position, delay }) => {
  const animationClass = {
    float: "animate-bounce",
  };

  return (
    <div
      className={`absolute text-2xl opacity-40 ${animationClass.float} pointer-events-none select-none`}
      style={{
        left: position.x,
        top: position.y,
        animation: `0.8s ease-out ${delay}ms forwards, bounce 8s ease-in-out ${
          delay + 800
        }ms infinite`,
      }}
    >
      {icon}
    </div>
  );
};

export default AnimatedIcon;