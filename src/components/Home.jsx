import React ,{useState} from 'react'
import { BsChevronRight, BsChevronLeft} from 'react-icons/bs'
import Myslider from './Myslider';
import Button2 from './Button2';


const featuredImages = ['slideImg2.jpg', 'slideImg.jpg'];
let count = 0;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnNextClick = () => {
      count = (count + 1) % featuredImages.length;
      setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
  const productsLength = featuredImages.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
  };

  
  return (
    <div className='px-2 ps:mt-[102px] pm:mt-32 sm:mt-24 md:mt-24'>
      <div className="max-w-screen-xl m-auto ">
        <div className="w-full relative select-none">
          <div className="aspect-w-16 aspect-h-6 md:mt-24 " >
              <img src={featuredImages[currentIndex]} alt="..." />
          </div>

          <div className=" absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
              <BsChevronLeft onClick={handleOnPrevClick} className="ps:text-[18px] pm:text-[25px] md:text-[40px] bg-slate-100 rounded-full " />
              <BsChevronRight onClick={handleOnNextClick} className="bg-slate-100 rounded-full ps:text-[18px] pm:text-[25px] md:text-[40px]"/>
          </div>
        </div>
        <div>
          <h1 className='font-serif text-[#344e41] font-medium text-center mt-14 ps:text-[27px] md:text-[40px]'>SHOP BY CATEGORIES</h1>

          <div className='flex justify-center space-x-12 text-[#7a7873] my-5 pb-8 cursor-pointer font-semibold ps:mt-10 ps:text-[16px] md:text-[22px]'>
            <p className='underline underline-offset-8 hover:underline hover:text-[#621708]'>MEN</p>
            <p className='underline underline-offset-8 hover:underline hover:text-[#621708]'>WOMEN</p>
            <p className='underline underline-offset-8 hover:underline hover:text-[#621708]'>KIDS</p>
          </div>

          <div className='lg:gap-10 md:gap-10 sm:gap-10 py-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:items-center ps:mx-2 sm:mx-40 ps:items-center lg:items-center md:mx-10 sm:items-center'>

            <div className='rounded overflow-hidden shadow-lg max-w-sm mb-4 py-4 px-2'>
              <img src='men1.jpg' alt='img' className='w-[400px] h-[330px] rounded-lg' />
              <h1 className='font-serif font-semibold mb-2 text-xl pt-4'>Flip-Flops</h1>
              <p className='font-medium text-[#38411c]  mb-3'>Put your best foot forward with these flip flops</p>
              <Button2 className='mx-auto font-bold'>SHOP FLIP-FLOPS</Button2>
            </div>

            <div className='rounded overflow-hidden shadow-lg max-w-sm mb-4 py-4 px-2'>
              <img src='men2.jpg' alt='img' className='w-[400px] h-[330px] rounded-lg'/>
              <h1 className='font-serif font-semibold mb-2 text-xl pt-4'>Formal Shoes</h1>
              <p className='font-medium text-[#38411c] mb-3'>Some utterly stylish formal shoes for all your office events</p>
              <Button2 className='font-bold'>SHOP SHOES</Button2>
            </div>
            <div className='rounded overflow-hidden shadow-lg max-w-sm mb-4 py-4 px-2'>
              <img src='men3.jpg' alt='img' className='w-[400px] h-[330px] rounded-lg'/>
              <h1 className='font-serif font-semibold mb-2 text-xl pt-4'>Sportswear / Athleisure</h1>
              <p className='font-medium text-[#38411c] mb-3'>Get the sporty look and inspiration with us</p>
              <Button2 className='font-bold' >Shop Sportswear / Athleisure</Button2>
            </div>

            <div className='rounded overflow-hidden shadow-lg max-w-sm mb-4 py-4 px-2'>
              <img src='men4.jpg' alt='img' className='w-[400px] h-[330px] rounded-lg'/>
              <h1 className='font-serif font-semibold mb-2 text-xl pt-4'>Casual Sandals</h1>
              <p className='font-medium text-[#38411c] mb-3'>Meet your match with these everyday casual sandals</p>
              <Button2 className='font-bold'>SHOP CASUAL </Button2>
            </div>

          </div>

          <div className='flex justify-center ps:space-x-6 md:space-x-12 text-[#7a7873] my-5 pb-8 cursor-pointer font-semibold'>
            <p className='underline  underline-offset-8 hover:underline hover:text-[#621708]'>NEW ARRIVALS</p>
            <p className='underline underline-offset-8 hover:underline hover:text-[#621708]'>BEST SELLERS</p>
          </div>
          <main>
              <h1 className='font-bold ps:text-[25px] sm:text-[32px] text-center sm:mt-[50px] sm:mb-[50px] ps:mt-6 ps:mb-3'>NEW ARRIVALS</h1>
              <Myslider/>
          </main>

        </div>
      <div className='max-w-full h-auto m-auto font-serif border-dotted text-[#344e41] mt-24'>
          <div className=" w-full relative select-none  ">
            <div className="flex lg:aspect-w-16 lg:aspect-h-6 justify-center space-x-6 mt-20 " >
              <div>
                <img src='ayushmann.webp' alt='img' className='ps:mb-10' />
              </div>
              <div>
                <img src='rakul.webp' alt='img' className='ps:mb-10' />
              </div>
              
            </div>
          </div>
      </div>
      

      <h1 className='font-serif ps:text-lg md:text-2xl font-semibold text-[#3e5c76] text-center mt-[50px] mb-4 shadow-md m-auto'>MOST LOVED BRANDS </h1>
        
        <div className='max-w-full h-auto m-auto font-serif border-dotted text-[#344e41] mt-24'>
          <div className=" w-full relative select-none  ">
            <div className="flex lg:aspect-w-16 lg:aspect-h-6 justify-center mt-20 ps:space-x-4 " >
              <div className='lg:items-center md:items-center sm:items-center m-auto lg:ml-12 md:ml-8 sm:ml-6 es:ml-8 lg:mr-12 md:mr-8 sm:mr-6 es:mr-8'>
                <img src='ampm.jpg' alt='img' className=''/>
                <img src='logon.svg' alt='logo' className='m-auto ' />
                <button className='font-serif border-dotted text-[#344e41] hover:text-[#621708]  m-auto  flex justify-center ps:text-sm sm:text-sm md:text-lg font-semibold shadow-lg mb-10'>SHOP NOW</button>
              </div>
              <div className='max-w-full h-auto lg:items-center md:items-center sm:items-center m-auto lg:ml-12 md:ml-8 sm:ml-6 es:ml-8 lg:mr-12 md:mr-8 sm:mr-6 es:mr-8 '>
                <img src='Healers.webp' alt='img' className=''/>
                <img src='brands.svg' alt='logo' className='m-auto mt-10' />
                <button className='font-serif border-dotted text-[#344e41] hover:text-[#621708] m-auto flex justify-center ps:text-sm sm:text-sm md:text-lg font-semibold mt-10 shadow-lg mb-10'>SHOP NOW</button>
              </div>
              
            </div>
          </div>
        </div> 
        

        <div className='max-w-full h-auto m-auto font-serif border-dotted text-[#344e41]'>
          <div className=" w-full relative select-none  ">
            <div className="flex lg:aspect-w-16 lg:aspect-h-6 justify-center mt-2 ps:space-x-2 " >
              <div className='lg:items-center md:items-center sm:items-center m-auto lg:ml-12 md:ml-8 sm:ml-6 es:ml-8 lg:mr-12 md:mr-8 sm:mr-6 es:mr-8'>
                <img src='zindgi.webp' alt='img' className=''/>
                <img src='love.svg' alt='logo' className='m-auto mt-10  ' />
                <button className='absolute font-serif border-dotted text-[#344e41] hover:text-[#621708]  m-auto  ps:text-sm flex justify-center sm:text-sm md:text-lg font-semibold mt-10 shadow-lg mb-10'>SHOP NOW</button>
              </div>
              <div className='max-w-full h-auto lg:items-center md:items-center sm:items-center m-auto lg:ml-12 md:ml-8 sm:ml-6 es:ml-8 lg:mr-12 md:mr-8 sm:mr-6 es:mr-8 '>
                  <img src='luke.jpg' alt='img' className='mt-24'/>
                  <img src='lucyluke.svg' alt='logo' className='m-auto mt-10' />
                  <button className='font-serif border-dotted text-[#344e41] hover:text-[#621708] m-auto ps:text-sm flex justify-center sm:text-sm md:text-lg font-semibold mt-10 shadow-lg mb-10'>SHOP NOW</button>
              </div>
              
            </div>
          </div>
        </div> 

        <div className='font-serif border-dotted text-[#344e41] border-2 m-auto mt-24 w-[200px] border-[#868b60] flex justify-center text-lg font-semibold lg:items-center md:items-center sm:items-center'>
          <button>View All Brands</button>
        </div>
        <div className='max-w-full h-auto m-auto font-serif border-dotted text-[#344e41] mt-24'>
          <div className=" w-full relative select-none  ">
            <div className="flex lg:aspect-w-16 lg:aspect-h-6 justify-center mt-20 " >
              <div>
                <img src='Summer.webp' alt='summer' />
              </div>
              <div>
                  <img src='here.webp' alt='here' />
              </div>
              
            </div>

            <div className="absolute w-full m-auto top-1/2 transform -translate-y-1/2 items-center px-3">
                <h1 className='text-white md:text-8xl sm:text-4xl ps:text-4xl font-serif text-center'>Summer is Here! </h1>
                <p className='text-white md:text-3xl sm:text-xl font-serif text-center' >SO IS OUR COLLECTION</p>

              <div className='font-serif font-semibold flex hover:text-[#621708] mt-4'>
                <button className='m-auto border-2 bg-white w-[200px] sm:text-sm md:text-lg shadow-md'>SHOP WOMEN</button>
                <button className='m-auto border-2 bg-white w-[200px]  sm:text-sm md:text-lg shadow-md'>SHOP MEN</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home