interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/phone-a-ca-logo.png"
        alt="Phone-a-CA Logo"
        className="h-10 w-auto md:h-12"
      />
    </div>
  );
};

export default Logo;
