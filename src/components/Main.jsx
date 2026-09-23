import { MoveRight } from "lucide-react";
import coffeSection from "../assets/coffe-section.jpg";
import star from "../assets/star.png";
export default function Main() {
  return (
    <>
      <main className="min-h-screen bg-coffee-100 flex mb-20 pb-24">
        <section className="mt-20 mx-5 flex flex-col gap-4 ">
          <div className="flex flex-col gap-3 md:w-3/4">
            <div className="flex flex-col gap-1.5">
              <span className="text-3xl font-stretch-50% text-coffee-800 md:text-5xl">Perfect Coffe,</span>
              <span className="text-3xl font-stretch-50% text-coffee-accent md:text-5xl">Perfect Moments</span>
            </div>
            <div className="">
              <p className="text-primary">Experience the finest coffee beans, expertly roasted and brewed to perfection. Every cup tells a story of passion, quality, and craftsmanship.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full mt-2 md:flex-row md:gap-4 md:items-center md:justify-start">
            <button className="bg-button hover:bg-button-hover py-1 rounded flex flex-row items-center justify-center transition duration-150 gap-2 text-white text-xs md:text-sm font-semibold md:px-5">
              Explore Menu <MoveRight />
            </button>
            <button className="bg-white hover:bg-button py-1.25 rounded gap-2 text-xs font-semibold border-button border text-button hover:text-white md:px-6 md:text-sm transition duration-150">Find Us</button>
          </div>
          <div className="flex flex-row gap-2 w-full mt-10 px-1  justify-between md:justify-start md:gap-6">
            <p className="flex flex-col gap-1 items-center font-medium text-xl md:text-2xl text-coffee-600">
              10+ <span className="font-normal text-xs md:text-sm text-primary">Years Experience</span>
            </p>
            <p className="flex flex-col gap-1 items-center font-medium text-xl md:text-2xl  text-coffee-600">
              50+ <span className="font-normal text-xs text-primary md:text-sm">Coffee Varieties</span>
            </p>
            <p className="flex flex-col gap-1 items-center font-medium text-xl md:text-2xl  text-coffee-600">
              1000+<span className="font-normal text-xs text-primary md:text-sm">Happy Customers</span>
            </p>
          </div>
          <div className="mt-10 flex flex-col relative">
            <div className="bg-cover bg-center w-full h-125 rounded-lg" style={{ backgroundImage: `url(${coffeSection})` }}></div>
            <div className="flex flex-row gap-4 items-center border-2 border-coffee-100 w-max p-3 rounded-lg bg-white absolute -bottom-10 -left-6">
              <div className="bg-amber-100 p-3 rounded-full">
                <img src={star} alt="" className="w-5 h-5" />
              </div>
              <div className="flex flex-col  items-start">
                <p className="font-normal text-primary text-xs">4.9/5 Rating</p>
                <p className="text-coffee-accent text-xs font-normal">Based on 500+ reviews</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
