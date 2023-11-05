import Image from 'next/image'
import CardSlider from './_components/CardSlider'

// for slider
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

export default function Home() {
  return (
    <main>
       <div className='p-4 md:p-10'>
        <Image className='rounded-lg'
          src="/fitbg2.jpeg"
          alt="Home BG"
          width={1920} height={100}
        />
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto dark:text-white">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center" >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-slate-200">Find your perfect Fit at FitWear.com</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">Love Fit clothes? Worried about not finding the right size? You are at the right place!</p>
    </div>

    <CardSlider/>
  
  </div>
</section>
          </main>
  )
}
