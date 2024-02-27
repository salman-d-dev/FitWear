import Image from "next/image";
import CardSlider from "./_components/CardSlider";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-fit sm:h-[500px] overflow-hidden">
        <Image
          className="rounded-lg mx-auto object-cover object-bottom w-full p-5 dark:brightness-75"
          // src="/fitbg2.jpeg"
          src="/stylebg.jpg"
          alt="Home BG"
          sizes="100vw"

          width={100}
          height={100}
        />
        <div className="absolute bottom-10 left-10 leading-none text-[10vw] font-bold text-white dark:text-gray-300 font-serif flex justify-center items-start flex-col">
        <span className="mb-2">Fit</span>
        <span className="ml-[10vw]">Wear</span>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto dark:text-white">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-slate-200">
              Find your perfect Fit at FitWear.com
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
              Love Fit clothes? Worried about not finding the right size? You
              are at the right place!
            </p>
          </div>

          <CardSlider />
        </div>
      </section>
    </main>
  );
}
