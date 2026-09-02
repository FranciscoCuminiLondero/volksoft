// Placeholder wordmark for the Volk brand.
// Swap this for the real logo file once it's available: drop the asset in
// public/assets/volk/ (see public/assets/volk/README.md) and replace this
// component's markup with an <img> pointing at it. Every place that needs
// the logo (Header, Footer, Hero) already imports this single component,
// so the swap is a one-file change.
const Logo = ({ className = '' }) => {
  return (
    <span
      className={`inline-flex items-baseline font-bold tracking-tight select-none ${className}`}
    >
      <span className="text-volk-white">VOL</span>
      <span className="text-volk-green">K</span>
    </span>
  );
};

export default Logo;
