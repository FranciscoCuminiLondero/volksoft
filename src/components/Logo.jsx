// Volk wordmark: the brand mark (public/assets/volk/volk-sin-fondo.png)
// plus "VOLK" set in the heading font. The icon's height is tied to the
// surrounding font-size (h-[1em]), so it scales together with whatever
// text-size className the caller passes (Header/Footer/Hero each use a
// different size).
const Logo = ({ className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img
        src="/assets/volk/volk-sin-fondo.png"
        alt="Volk"
        className="h-[1em] w-auto"
      />
      <span className="font-heading font-bold tracking-tight">
        <span className="text-volk-white">VOL</span>
        <span className="text-volk-green">K</span>
      </span>
    </span>
  );
};

export default Logo;
