import { BenefitType, SelectedPage } from "@/shared/types"
import { motion, stagger } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from '@/assets/BenefitsPageGraphic.png';
import CouponGraphic from "@/assets/CouponGraphic.png";
import Timer from "@/assets/timer.png";
import Water from "@/assets/water.png";
import Brushing from "@/assets/eyelash-mascara.png";
import Sleeping from "@/assets/sleeping.png";
import Curlers from "@/assets/eyelashcurler.png";
import Rubbing from "@/assets/rubbing.png";
import EyelashSerum from "@/assets/eyelashserum.png";
import OilBasedProduct from "@/assets/oilbasedserum.png";
import Mascara from "@/assets/mascarra.png";
import LashLifting from "@/assets/eyelash.png";
import BackgroundAftercare from "@/assets/bgaftercare.png"


const benefits:Array<BenefitType> = [
  {
    icon: <img alt="time" src={Timer} className="h-20 w-20" />,
    title: "LET IT SET FOR 4-5 HOURS (NO EYE MAKEUPS, TOUCH, WATER, HEAT)"
  },
  {
    icon: <img alt="water" src={Water} className="h-20 w-20" />,
    title: "AVOID WATER AND STEAM FOR 24 HOURS",
    
  },
  {
    icon: <img alt="brushing" src={ Brushing} className="h-20 w-20" />,
    title: "REGULAR BRUSHING (AFTER SHOWER ESPECIALLY)",
  },
  {
    icon: <img alt="sleep on back side" src={ Sleeping} className="h-20 w-20" />,
    title: "SLEEP ON YOUR BACK OF YOUR SIDE (MINIMAL CONTACT TO YOUR LASHES)",
  },
  {
    icon: <img alt="curler" src={ Curlers} className="h-20 w-20" />,
    title: "NO EYELASH CURLERS",
  },
  {
    icon: <img alt="rubbing" src={ Rubbing} className="h-20 w-20" />,
    title: "DO NOT TOUCH OR RUB YOUR EYES",
  },
  {
    icon: <img alt="eyelash serum" src={ EyelashSerum} className="h-20 w-20" />,
    title: "USING EYELASH SERUM WILL HELP TO KEEP THE CURL LONGER + HEALTHIER LASHES",
  },
  {
    icon: <img alt="oil based product" src={ OilBasedProduct} className="h-20 w-20" />,
    title: "DO NOT USE OIL BASED PRODUCTS INCLUDING CLEANGERS",
  },
  {
    icon: <img alt="mascara" src={ Mascara} className="h-20 w-20" />,
    title: "AVOID WATERPROOF MASCARA",
  },
  {
    icon: <img alt="lash lifting" src={ LashLifting} className="h-20 w-20" />,
    title: "SCHEDULING LASH LIFTING EVERY 6-8 WEEKS",
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren:0.2}
  }
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-ful w-5/6 py-20">
      {/* <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
        className="div"> */}
        {/* HEADER */}
        <motion.div
          className="md:my-3/5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible:{opacity:1, x:0}
          }}>
          <HText>ONGOING PROMOTION</HText>
          <p className="my-5 text-md ">
            We express our gratitude to all our customers who continue to support and cheer for La Beauté. I will always strive to find ways to give back to you all 💖
          </p>
        </motion.div>
        {/* COUPON IMAGE */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img alt="couponGraphic" src={CouponGraphic} className=""/>
        </div>

        {/* AFTER CARE */}
        <div className="py-20">
          <HText>AFTER CARE</HText>
          {/* BACKGROUND AFTERCARE */}
          <div className= "bg-background-aftercare bg-center bg-[length:300px]">
            <motion.div
            className="md:flex items-center gap-8 mt-5 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}>
              {benefits.slice(0,5).map((benefit: BenefitType) => (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
              />
            ))}
            </motion.div>
            <motion.div
            className="md:flex items-center gap-8 mt-5 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}>
              {benefits.slice(5,10).map((benefit: BenefitType) => (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
              />
            ))}
            </motion.div>

          </div>
        </div>

        {/* GRAPHICS AND DESCRIPTIONS */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
          {/* GRAPHICS */}
          <div className=" before:absolute before:-bottom-20 before:right-40 before:z[-1] before:content-circles">  
          <img
            className="mx-auto h-80 w-80"
            src={BenefitPageGraphic}
            alt="benefits-page-graphic" />
          </div>
          
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible:{opacity:1, x:0}
                }}>
                  <HText>
                    An hour of lash lifting service can save hours of makeup time up to {" "}
                    <span className="text-primary-500">6-8 weeks ⏰</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTIONS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible:{opacity:1, x:0}
              }}>
              <p className="mb-5">When it comes to choosing the right lash curls depending on each customer’s eye shape, as well as lash conditions, it is the KEY POINT of the magic lash lifting 🪄</p>
              <p className="my-5">Here, La beauté, we care the beauty of your natural lashes but also health of your lashes. We use Keratin products to make your lashes less damaged and 4 kinds of lash nutrients after the lifting service. 🖤🤍</p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16 ">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      {/* </motion.div> */}
    </section>
  )
}

export default Benefits;