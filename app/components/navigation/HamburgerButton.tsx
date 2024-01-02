const HamburgerButton = ({
  toggleNavMenu,
  isOpen,
}: {
  toggleNavMenu: any;
  isOpen: boolean;
}) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-300`;
  return (
    <button
      className="flex md:hidden flex-col h-8 w-8 mx-2 rounded justify-center items-center group"
      onClick={() => toggleNavMenu(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
