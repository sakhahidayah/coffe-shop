export default function MenuBarMobile() {
  return (
    <>
      <div className="flex flex-col  gap-4 px-7 py-4 border-b-inline  border-b-2 bg-coffee-50">
        <div className="flex flex-col item-start gap-4 mx-3">
          <h1 className="text-navbar hover:text-accent font-semibold cursor-pointer transition duration-150">Home</h1>
          <h1 className="text-navbar hover:text-accent font-semibold cursor-pointer transition duration-150">About</h1>
          <h1 className="text-navbar hover:text-accent font-semibold cursor-pointer transition duration-150">Menu</h1>
          <h1 className="text-navbar hover:text-accent font-semibold cursor-pointer transition duration-150">Contact</h1>
        </div>
        <div className="mx-3 w-full  flex justify-center items-center rounded bg-button py-2 hover:bg-button-hover">
          <button className="text-surface font-medium text-sm transition duration-150">Order Now</button>
        </div>
      </div>
    </>
  );
}
