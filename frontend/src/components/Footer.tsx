export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-5 w-full text-center">
      SoSiS Shop &copy; {currentYear}
    </footer>
  );
};
