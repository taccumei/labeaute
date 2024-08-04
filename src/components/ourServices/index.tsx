import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ServiceType } from "@/shared/types";
import Service from "./Services";
import ActionButton from "@/shared/ActionButton";

const services: Array<ServiceType> = [
  {
    name: "Keratine Eyelash Lifting",
    description: "A keratin lash lift is a cosmetic procedure that enhances the appearance of the eyelashes by curling and lifting them. The treatment aims to create a more open and voluminous look in the eyes.",
    image: image1
  },
  {
    name: "Eyelash Black Tinting",
    description: "Make your eyelash darker. It will bring an effect of wearing a mascara.",
    image: image2,
  },
  {
    name: "Eyelash lifting + black tinting",
    description: "A keratin lash lifting with black tinting. Save up $10 if you book these services as a set.",
    image: image3,
  },
  {
    name: "Eyelash extensions removal",
    description: "Only applicable for clients who are getting other services.",
    image: image4,
  },
  {
    name: "Under lash perm",
    description: "Under lash perm makes your eyes even bigger!",
    image: image5,
  }
]

type Props = {
  setSelectedPage:(value: SelectedPage)=>void
}

const ourServices = ({ setSelectedPage }: Props) => {
  const buttonStyle = "rounded-md px-1 py-1 hover:bg-primary-300 hover:text-white text-red-400"
  return (
    <section id="ourservices" className="w-full bg-primary-100 py-40">
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.OurServices)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible:{opacity:1, x:0}
          }}
        >
          <div>
            <HText>OUR SERVICES</HText>
            <div className="flex flex-col items-center justify-center pt-10">
              <ul>
                <li className="py-2">
                  <p>KERATINE EYELASH LIFTING</p>
                  <button className={buttonStyle}>Book</button>
                  <p>$60.00 - 1 hr</p>                  
                </li>
                <li className="py-2">
                  <p>EYELASH EXTENSIONS REMOVAL</p>
                  <p>$20.00 - 15 mins - <button className={buttonStyle}>Book</button></p>
                </li>
                <li className="py-2">
                  <p>EYELASH LIFTING + BLACK LIFTING</p>
                  <p>$80.00 - 1 hr 30 mins - <button className={buttonStyle}>Book</button></p>
                </li>
                <li className="py-2">
                  <p>UNDER LASH PERM</p>
                  <p>$30.00 - 30 mins - <button className={buttonStyle}>Book</button></p>
                </li>
                <li className="py-2">
                  <p>EYELASH BLACK LIFTING</p>
                  <p>$30.00 - 40 mins - <button className={buttonStyle}>Book</button></p>
                </li>
              </ul>
            </div>            
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-[500px] overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {services.map((item: ServiceType, index)=>(
            <Service
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default ourServices;