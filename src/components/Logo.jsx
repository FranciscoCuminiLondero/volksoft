// Volk wordmark: the brand mark (public/assets/volk/volk-sin-fondo.png)
// plus "VOLK" set in the heading font.
//
// Default (Header/Footer): icon + text side by side, icon height tied to
// the surrounding font-size (h-[1em]) so it scales with whatever text-size
// className the caller passes.
//
// stacked (Hero): icon on top at a large fixed size, "VOLK" centered below
// it — className still controls the text size (it cascades down to the
// inner spans), independent of the icon's own size.
const Logo = ({ className = '', stacked = false }) => {
  return (
    <span
      className={`inline-flex select-none ${
        stacked ? 'flex-col items-center gap-4' : 'items-center gap-2'
      } ${className}`}
    >
      <img
        src="/assets/volk/volk-sin-fondo.png"
        alt="Volk"
        className={stacked ? 'h-20 sm:h-24 md:h-28 w-auto' : 'h-[1em] w-auto'}
      />
      <span className="font-heading font-bold tracking-tight">
        <span className="text-volk-white">VOL</span>
        <span className="text-volk-green">K</span>
      </span>
    </span>
  );
};

export default Logo;
