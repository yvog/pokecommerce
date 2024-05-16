export const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="py-8">© Copyright {year}</footer>;
};
