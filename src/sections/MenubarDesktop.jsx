export default function MenubarDesktop() {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex flex-row gap-5 items-center">
          <h1 className="text-navbar hover:text-accent font-semibold cursor-pointer transition duration-150">Home</h1>
          <h1 className="text-navbar hover:text-accent font-semibold cursor-pointer transition duration-150">About</h1>
          <h1 className="text-navbar hover:text-accent font-semibold cursor-pointer transition duration-150">Menu</h1>
          <h1 className="text-navbar hover:text-accent font-semibold cursor-pointer transition duration-150">Contact</h1>
        </div>
      </div>
      <div className="hidden md:block px-3 py-1 bg-button hover:bg-button-hover  rounded ">
        <button className="text-surface font-medium text-base transition duration-150">Order Now</button>
      </div>
    </>
  );
}
