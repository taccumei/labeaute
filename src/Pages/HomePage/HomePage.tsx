import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import HomePageText from "@/assets/HomePageText.png";
import CouponGraphic from "@/assets/CouponGraphic.png";
import HText from "@/shared/HText";
import { motion } from 'framer-motion';
import Feedback1 from "@/assets/image1.png";
import Feedback2 from "@/assets/image2.png";
import Feedback3 from "@/assets/image3.png";
import Feedback4 from "@/assets/image4.png";
import Feedback5 from "@/assets/image5.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Footer from '@/components/footer';
import { useState } from 'react';


// import ActionButton from '@/shared/ActionButton'
// import React from 'react'

// type Props = {}

// const HomePage = (props: Props) => {
//   return (
//     <section id="home" className="gap-16 bg-white py-10 md:h-full md:pb-0">
//       {/* IMAGE AND MAIN HEADER */}
//       <div>
//         {/* MAIN HEADER */}
//         <div>
//           {/* HEADINGS */}
//           <div>
//             <div>
//               <div>
//                 <p>ENHANCE NATURAL BEAUTY</p>
//                 <div><img src="" alt="" /></div>
//               </div>
//             </div>
//             <p>How important the lashes are?
//               You can’t believe your lashes will impact a lot.
//               Change your image with lash lifting today!</p>
//           </div>
//           {/* ACTIONS */}
//           <div>
//             <button>BOOK NOW</button>
//           </div>
//         </div>
//       </div>
//       </section>
//       )};

// export default HomePage;
    
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HomePage = ({ setSelectedPage }: Props) => {
  const feedbacks = [Feedback1, Feedback2, Feedback3, Feedback4, Feedback5];
  const description = ["Lorem ipsum dolor sit amet!", "Lorem ipsum dolor sit amet!", "Lorem ipsum dolor sit amet!", "Lorem ipsum dolor sit amet!", "Lorem ipsum dolor sit amet!"];
  
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px");

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === feedbacks.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? feedbacks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  return (
      <section id="home" className="gap-16 bg-white py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
        {/* MAIN HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible:{opacity:1, x:0}
          }}
          className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className="relative">
              {/* <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-slogan"> */}
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <p className='text-4xl py-5 italic text-center'>ENHANCE NATURAL BEAUTY</p>
                <div className='flex justify-center'>
                  <img alt="home-page-text" src={HomePageText}  />
                </div>
              </div>
            </div>
            <p className='mt-8 text-md text-center'>
              How important the lashes are?
              You can’t believe your lashes will impact a lot.
              Change your image with lash lifting today!
            </p>
          </div>
          {/* ACTIONS */}
          <motion.div
            className='mt-20 text-center gap-8 text-xl'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible:{opacity:1, x:0}
            }}>
            <ActionButton setSelectedPage={setSelectedPage}>
              BOOK NOW
            </ActionButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ONGOING PROMOTION */}
      <section className="w-full py-10 bg-primary-200">
        <motion.div
          onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
          className="flex">
          {/* COUPON IMAGE */}
          <div className='md:z-10 md:ml-5 md:mt-8'>
            <img alt="couponGraphic" src={CouponGraphic} className="h-[600px]"/>
          </div>
          {/* HEADER */}
          <motion.div
          className="md:ml-20 md:w-2/5 mt-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible:{opacity:1, x:0}
            }}>
          <HText>ONGOING PROMOTION</HText>
          <p className="my-10 text-xl ">
            We express our gratitude to all our customers who continue to support and cheer for La Beauté. I will always strive to find ways to give back to you all 💖
          </p>
          </motion.div>
        </motion.div>
        {/* DESCRIPTION */}
        <motion.div>
          
        </motion.div>
      </section>
       {/* REFERALS FRIENDS PROMOTION */}
        <motion.div>
          <h1 className="mt-20 ml-5 mb-10 font-sedan italic text-5xl">Sharing is Loving</h1>
          <div className='flex'>
            <div className='w-1/3'>
              <p className='px-5 text-md h-20 text-start'>Refer your friends and family, your loved ones. You and your referring members will both have $10 off. Sharing is loving, Spread your love.</p>
              <hr className='h-0.5 bg-black mt-2 w-5/6 ml-4'/>
            </div>
            <div className='w-1/3'>
              <p className='px-5 text-md h-20 text-start'>Referring disccount is not applicable with different promotions. It only applies to your friends/family who hasn't been to La Beauté </p>
              <hr className='h-0.5 bg-black mt-2 w-5/6 ml-4'/>
            </div>
            <div className='w-1/3'>
              <p className='px-5 text-md h-20 text-start'>Your referral discount can be saved up to $60 to get free service of Keratin lash lifting</p>
              <hr className='h-0.5 bg-black mt-2 w-5/6 ml-4'/>
            </div>
          </div>
        </motion.div>
      {/* FEEDBACK FROM CUSTOMERS */}
      <section className='flex px-4 md:basis-1/2 py-2'>
        <motion.div className='flex-col w-1/2'>
          <p className='text-3xl mb-10 pt-10'>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.</p>
          <ActionButton setSelectedPage={setSelectedPage}>
            ALL FEEDBACKS
          </ActionButton>
        </motion.div>
        <div className='md:basis-1/2 flex-col w-1/2'>
          <div className='flex flex-row-reverse'>
            <ChevronRightIcon className='h-6 w-6' onClick={goToNext}/>
            <ChevronLeftIcon className='h-6 w-6' onClick={goToPrevious}/>
          </div> 
          <div className='py-5 flex-row-reverse flex'>
            <div className='px-2 w-[220px] h-[220px]'>
              <img src={feedbacks[currentIndex] } alt="fb1"/>
              <p className='mt-5 text-xl font-sans'>{description[currentIndex]}</p>
            </div>
            <div className='px-2 w-[220px] h-[220px]'>
              <img src={feedbacks[(currentIndex + 1)] } alt="fb1"/>
              <p className='mt-5 text-xl font-sans'>{description[currentIndex +1]}</p>
            </div>
          </div>
        </div>
      </section>
      {/* {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-200 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex-col w-3/5 items-center justify-between gap-8'>
              <h1>🌟 La Beauté 3.6.9 Coupon 💌🌟</h1>
              <p>This coupon is issued with sincere gratitude due to the overwhelming increase in revisiting customers 🥰</p>
              <h3>1️⃣ - Receive La Beauté Keratin Lash Lifting+ Black Tinting.</h3>
              <h3>2️⃣ - Revisit and receive Lash Lifting + Black Tinting.</h3>
              <h3>3️⃣ - When revisiting and receiving Lash Lifting, Black Tinting is complimentary 🖤🤍</h3>
              <h4>*On average, customers revisit every 6 weeks, so this coupon is applicable if you revisit within 2 months for each step!</h4>
              <h4>** You can use the coupon on the 3rd, 6th, and 9th visits. Please write down the coupon usage in the appointment note 🫶🏻</h4>
              <h4>*** Other promotions/events cannot be combined on the date of coupon usage (It‘s allowed for Steps 1 and 2).</h4>
              <h4>Once again, we express our gratitude to all our customers who continue to support and cheer for La Beauté. I will always strive to find ways to give back to you all 💖</h4>
            </div>
          </div>
        </div>
      )} */}

      {/* BREAK LINE */}
      <div className='px-4'>
        <hr className='h-0.5 bg-black mt-20 ' />
        <Footer/>
      </div>
        
      
    </section>
  )
}

export default HomePage;