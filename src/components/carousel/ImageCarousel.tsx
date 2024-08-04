import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Feedback1 from "@/assets/image1.png";
import Feedback2 from "@/assets/image2.png";
import Feedback3 from "@/assets/image3.png";
import Feedback4 from "@/assets/image4.png";
import Feedback5 from "@/assets/image5.png";
import Feedbacks from '../feedback/Feedbacks';
import { ImageSliderType } from '@/shared/types';
import { motion } from 'framer-motion';

type Props = {}

const ImageCarousel = (props: Props) => {
  const responsive = {
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
  };

  
  const feedbacksData: Array<ImageSliderType> = [
    {
      id: 1,
      url: Feedback1,
      desc: "Lorem ipsum dolor sit amet"
    },
    {
      id: 2,
      url: Feedback2,
      desc: "Lorem ipsum dolor sit amet"
    },
    {
      id: 3,
      url: Feedback3,
      desc: "Lorem ipsum dolor sit amet"
    },
    {
      id: 4,
      url: Feedback4,
      desc: "Lorem ipsum dolor sit amet"
    },
    {
      id: 5,
      url: Feedback5,
      desc: "Lorem ipsum dolor sit amet"
    },
  ]

  const feedbacks = feedbacksData.map((item: ImageSliderType) => <Feedbacks key={item.id} url={item.url} desc={item.desc} />)


  return (
    <div>
      <Carousel
      responsive={responsive}
      itemClass="carousel-item-padding-1-px">
        {feedbacks}
      </Carousel>
    </div>   
  )
}

export default ImageCarousel;