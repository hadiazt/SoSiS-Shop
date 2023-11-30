import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">SoSiS Shop &copy; {currentYear}</footer>
  );
}
