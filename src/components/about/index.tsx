import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Footer from '../footer';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const About = ({setSelectedPage}: Props) => {
  return (
    <motion.div id="about">
      <div>
        <img src="" alt="" />
        <h1>Wellcome to La Beauté</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laudantium voluptas aspernatur eum ea voluptate. Necessitatibus facilis consequatur maiores totam tempore asperiores corporis in? Qui similique omnis vero impedit est.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ut sint quod magni minima, enim corporis, eius rerum beatae suscipit facilis eum delectus. Eligendi atque ad aperiam dignissimos, rerum quos.</p>
      </div>
      <Footer/>
    </motion.div>
  )
}

export default About