"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
       <div className='p-4'>
        <Image className='rounded-lg'
          src="/fitbg2.jpeg"
          alt="Home BG"
          width={1920} height={100}
        />
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center" >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Find your perfect Fit at FitWear.com</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Love Fit clothes? Worried about not finding the right size? You are at the right place!</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <Link href={'/tshirts'}>
        <div className="border border-gray-200 p-6 rounded-lg shadow-lg cursor-pointer">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.14.93l-.07-.07A2.926 2.926 0 0 0 20.98 0a2.886 2.886 0 0 0-2.08.86L8.858 10.9a3.04 3.04 0 0 0-.53.72 7.793 7.793 0 0 0-4.1 1.621c-.191.144-.36.316-.5.51a6.08 6.08 0 0 0-.98 1.961c-.25.69-.59 1.631-1.22 3-.42.91-.75 1.541-.98 1.981a3.092 3.092 0 0 0-.54 1.631c.014.206.08.406.19.58a2.64 2.64 0 0 0 2.23 1.07 10.462 10.462 0 0 0 8.161-3.371c.378-.44.692-.932.93-1.461a7.882 7.882 0 0 0 .69-3.361.142.142 0 0 1 .02-.04c.325-.144.62-.347.87-.6L23.14 5.1A2.888 2.888 0 0 0 24 3.021 2.927 2.927 0 0 0 23.14.93zM9.7 18.317c-.17.368-.388.711-.65 1.02a8.393 8.393 0 0 1-6.891 2.6c.05-.1.11-.21.17-.32.24-.46.58-1.11 1.02-2.061a39.058 39.058 0 0 0 1.28-3.151c.14-.491.355-.957.64-1.381.062-.08.133-.154.21-.22a5.221 5.221 0 0 1 2.59-1.14c.121.537.396 1.027.79 1.411l.07.07c.35.357.788.616 1.27.75a5.614 5.614 0 0 1-.499 2.422zM21.73 3.691L11.678 13.735a.947.947 0 0 1-.67.28.983.983 0 0 1-.67-.28l-.07-.07a.948.948 0 0 1 0-1.34L20.309 2.271c.18-.173.42-.27.671-.271a.937.937 0 0 1 .67.27l.08.08c.36.374.36.967 0 1.341z" fill="#494c4e" fill-rule="evenodd"></path> </g></svg>  
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Express Your Style</h2>
<p className="leading-relaxed text-base">
  Discover a world of creativity and self-expression with our exclusive collection of t-shirts, hoodies, mugs, and stickers. Elevate your wardrobe, add a touch of art to your daily routine, and make a statement with our unique designs.
</p>
</div>
</Link>
</div>
<div class="xl:w-1/3 md:w-1/2 p-4">
  <Link href={'/tshirts'}>
    <div class="border border-gray-200 p-6 rounded-lg shadow-lg cursor-pointer">
    <div class="w-15 h-15 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
    <Image src={'/shirt-svgrepo-com.svg'} alt='TShirt.svg' height={50} width={50}/>
    </div>
    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Artistry Unleashed</h2>
    <p className="leading-relaxed text-base">
      Our t-shirts are more than just fabric; they are canvases for self-expression. From bold and vibrant designs to intricate and thought-provoking artwork, find the perfect t-shirt to showcase your unique style.
    </p>
  </div>
  </Link>
</div>
<div class="xl:w-1/3 md:w-1/2 p-4">

<Link href={'/mugs'}>
  <div class="border border-gray-200 p-6 rounded-lg shadow-lg cursor-pointer">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
      <Image src={'/mug-svgrepo-com.svg'} alt='Mug.svg' height={40} width={40}/>
    </div>
    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Mornings Made Better</h2>
    <p className="leading-relaxed text-base">
      Start your day right with our range of delightful mugs. Sip your morning coffee or tea in style with designs that brighten your day. Choose a mug that speaks to your mood and personality.
    </p>
  </div>
  </Link>
</div>
<div class="xl:w-1/3 md:w-1/2 p-4">
<Link href={'/stickers'}>
  <div class="border border-gray-200 p-6 rounded-lg shadow-lg cursor-pointer">
    <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
    <Image src={'/sticker-smile-circle-2-svgrepo-com.svg'} alt='Sticker.svg' height={40} width={40}/>
    </div>
    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Sticker Your World</h2>
    <p className="leading-relaxed text-base">
      Unleash your creativity with our unique sticker collection. From personalizing your laptop to adding a touch of fun to your space, our stickers let you make your mark on the world.
    </p>
  </div>
  </Link>
</div>
<div class="xl:w-1/3 md:w-1/2 p-4">
<Link href={'/hoodies'}>
  <div class="border border-gray-200 p-6 rounded-lg shadow-lg cursor-pointer">
    <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
    <Image src={'/hoodie-1-svgrepo-com.svg'} alt='Hoodie.svg' height={4} width={40}/>

    </div>
    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Your Style Sanctuary</h2>
    <p className="leading-relaxed text-base">
      {`Welcome to your style sanctuary. From trendy t-shirts to cozy hoodies, artistic mugs, and expressive stickers, we've got everything you need to create a space that reflects your unique personality and style.`}
    </p>
      </div>
      </Link>
    </div>
    </div>
  </div>
</section>
          </main>
  )
}
