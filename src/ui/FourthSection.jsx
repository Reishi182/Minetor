const FourthSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto space-y-14 px-8 lg:px-28 ">
        <div className="space-y-2">
          <h1 className="text-left text-3xl font-bold text-blue-700">
            Terhubung dengan Mentor dan kembangkan kemampuan mu!
          </h1>
          <h4 className="text-left text-lg text-black">
            Minetor menghubungkan kamu dengan para mentor di berbagai bidang
          </h4>
        </div>
        <div className="mx-auto grid w-full grid-cols-1 justify-center gap-5 md:w-[90%]  md:grid-cols-2 ">
          <img src="Rectangle9.png" className="w-full" />
          <img src="Rectangle10.png" className="w-full" />
        </div>
        <img src="Rectangle11.png" className="mx-auto w-full lg:w-[90%] " />
      </div>
    </section>
  );
};

export default FourthSection;
