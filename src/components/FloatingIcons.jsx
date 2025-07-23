"use client";

const FloatingIcons = ({ icons }) => (
  <div
    className={`absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-30`}
  >
    {icons.map((icon, index) => (
      <div
        key={index}
        className="absolute animate-pulse"
        style={{
          left: `${icon.x}%`,
          top: `${icon.y}%`,
          animationDelay: `${index * 0.5}s`,
          animationDuration: "3s",
        }}
      >
        {icon.component}
      </div>
    ))}
  </div>
);

export default FloatingIcons;