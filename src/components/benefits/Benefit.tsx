import { SelectedPage } from '@/shared/types';
import { describe } from 'node:test';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const childVariants = {
  hidden: {opacity:0, scale: 0.9},
  visible: {opacity:1, scale: 1},
}
// type Props = {
//   icon: JSX.Element;
//   title: string;
//   description: string;
//   setSelectedPage: (value: SelectedPage) => void;
// }
type Props = {
  icon: JSX.Element;
  title: string;
}

// const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
const Benefit = ({icon, title}: Props) => {
  return (
    <motion.div
      variants={childVariants}
      className='mt-5 px-5 py-10 text-center h-80 '>
      <div className='mb-4 flex justify-center'>
        <div className='border-2 border-gray-100 p-6 bg-white'>
          {icon}
        </div>
      </div>

      <p className='font-bold' >{title}</p>
      {/* <p className='my-3'>{description}</p> */}
      {/* <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}>
          <p>Learn More</p>
      </AnchorLink> */}
    </motion.div>
  )
}

export default Benefit