export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">SoSiS Shop &copy; {currentYear}</footer>
  );
};
