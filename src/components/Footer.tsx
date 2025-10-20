const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Sewa Rumah by Dhani. All rights
            reserved.
          </p>
          <p className="text-xs mt-2 opacity-75">
            Website dibuat untuk kemudahan penyewaan properti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
