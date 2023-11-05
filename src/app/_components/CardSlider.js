"use client";
import Image from "next/image";
import Link from "next/link";

// for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardSlider = () => {
  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="my-4">
     <Slider {...settings}>
          <div className="border-2 border-gray-900 rounded-lg cursor-pointer homeCard">
            <div className="mb-4">
              <Image
                src={"/shoppinggirl.jpg"}
                alt="Shopping"
                height={200}
                width={300} className="md:h-60 md:w-80 rounded-lg"
              />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Express Your Style
            </h2>
            <p className="leading-relaxed text-base">
              Discover a world of creativity and self-expression with our
              exclusive collection of T-Shirts, Hoodies, Mugs, and Stickers.
              Elevate your wardrobe, add a touch of art to your daily routine,
              and make a statement with our unique designs.
            </p>
          </div>
        
          <div className="border-2 border-gray-900  rounded-lg shadow-lg cursor-pointer homeCard">
            <div className=" mb-4">
              <Image
                src={"/darktshirt2.jpg"}
                alt="TShirt.svg"
                height={200}
                width={300} className="md:h-60 md:w-80 rounded-lg"
              />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Artistry Unleashed
            </h2>
            <p className="leading-relaxed text-base">
              Our <Link href={"/tshirts"} className="text-blue-400">T-Shirts</Link> are more than just fabric; they are canvases for
              self-expression. From bold and vibrant designs to intricate and
              thought-provoking artwork, find the perfect t-shirt to showcase
              your unique style.
            </p>
          </div>
        
          <div className="border-2 border-gray-900 rounded-lg shadow-lg cursor-pointer homeCard">
            <div className=" rounded-full mb-4">
              <Image
                src={"/mug.jpg"}
                alt="Mug.svg"
                height={200}
                width={300} className="md:h-60 md:w-80 rounded-lg"
              />
              {/* /mug-svgrepo-com.svg */}
            </div>
            <h2 className="text-lg font-medium title-font mb-2 text-gray-900">
              Mornings Made Better
            </h2>
            <p className="leading-relaxed text-base">
              Start your day right with our range of delightful <Link href={"/mugs"} className="text-blue-400">Mugs.</Link> Sip your
              morning coffee or tea in style with designs that brighten your
              day. Choose a mug that speaks to your mood and personality.
            </p>
          </div>

          <div className="border-2 border-gray-900  rounded-lg shadow-lg cursor-pointer homeCard">
            <div className=" mb-4">
              <Image
                src={"/sticker.jpg"}
                alt="Sticker.svg"
                height={200}
                width={300} className="md:h-60 md:w-80 rounded-lg"
              />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Sticker Your World
            </h2>
            <p className="leading-relaxed text-base">
              Unleash your creativity with our unique <Link href={"/stickers"} className="text-blue-400">Sticker</Link> collection. From
              personalizing your laptop to adding a touch of fun to your space,
              our stickers let you make your mark on the world.
            </p>
          </div>
          <div className="border-2 border-gray-900  rounded-lg shadow-lg cursor-pointer homeCard">
            <div className=" mb-4">
              <Image
                src={"/hoodie.jpg"}
                alt="Hoodie.svg"
                height={200}
                width={300} className="md:h-60 md:w-80 rounded-lg"
              />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Your Style Sanctuary
            </h2>
            <p className="leading-relaxed text-base">
              Welcome to your style sanctuary. From trendy <Link href={"/hoodies"} className="text-blue-400">Hoodies</Link> to cozy T-Shirts, artistic Mugs, and expressive Stickers, {`we've got everything you need to create a space that reflects your unique personality and style.`}
            </p>
          </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
