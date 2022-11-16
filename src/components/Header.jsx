import React from "react";

const Header = () => {
  return (
    <header className="bg-[#FBEBEA] pt-24 flex flex-col xl:flex-row  justify-center items-center px-5 pb-6">
      <section className="xl:w-6/12 text-center xl:text-start pb-6 xl:pb-0">
        <h1 className="text-[64px] leading-[70px]">Hire the Top 3% of</h1>
        <h1 className="text-[64px] leading-[70px]">Creative Talents</h1>
        <p className="text-xl leading-[24.38px] py-6 xl:w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur eget
          vel fermentum rhoncus dui integer. Risus consequat aliquet eget ipsum.
          In aliquet a dictum rhoncus varius. Nulla praesent risus viverra
          maecenas mauris tellus et phasellus posuere. Vitae ipsum dignissim
          posuere porta eu in elementum.
        </p>
        <button className="w-[347px] h-[64px] bg-[#423130] text-white rounded-md mt-5">
          Hire Top Model
        </button>
      </section>
      <section className="xl:w-6/12 flex flex-col md:flex-row justify-between gap-5">
        <img src="images/Rectangle 1.png" alt="img-one" className="w-[335px] h-[420px] rounded-[10px] " />
        <article className="bg-white w-[335px] h-[218px] flex justify-center items-center rounded-xl rounded-bl-[60px]">
          <p className="w-[278px] h-[144px] text-xl leading-[24.38px] px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur eget vel fermentum rhoncus dui integer. Risus consequat
          </p>
        </article>
      </section>
    </header>
  );
};

export default Header;
