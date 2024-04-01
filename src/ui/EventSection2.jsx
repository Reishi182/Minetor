export default function EventSection2() {
  return (
    <section className="bg-blue-700 px-16 py-20">
      <div className="container mx-auto mt-[-100px] flex items-center justify-between px-0 lg:px-20">
        <div className="mt-20 space-y-1">
          <h1 className="mb-3 text-left text-xl font-bold text-white lg:text-4xl">
            Ingin Event mu tampil di
            <br /> website kita?{" "}
          </h1>
          <div className="flex flex-1 text-blue-100">
            Kamu bisa banget buat daftarin event mu di
            <br /> website kita!
          </div>
          <div className="mb-6 flex">
            <button className="mt-5 w-44 rounded-lg border border-blue-200 bg-white px-2 py-2 font-semibold tracking-wide text-blue-700">
              Cek Lebih Lanjut
            </button>
          </div>
        </div>
        <img src="6.png" alt="Deskripsi Gambar" className="w-[50%]" />
      </div>
    </section>
  );
}
