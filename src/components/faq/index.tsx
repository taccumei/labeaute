import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';


type Props = {
  setSelectedPage: (value: SelectedPage )=> void;
}

const Faq = ({ setSelectedPage }: Props) => {
  return (
    // <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Faq)}>
      <div>
        <h1>CANCELLATION POLICIES</h1>
        <div>
          <h2>PENALTY</h2>
          <p>Please give us at least 24 hours of notice, otherwise a penalty of $30 will be charged for late notices made with less than 24 hours or for a NO-SHOW.</p>
          <h2>RUNNING LATE</h2>
          <p>15minutes grace period, if you are running late more than 15minutes, it will be considered as a Cancellation with a $30 penalty. You may have to make a new appointment.</p>
          <h2>NO-SHOW</h2>
          <p>When you NO-SHOW once without updating us for your appointment, you are not able to make a new appointment with us for the future.</p>
          <p>Thank you for understanding♥︎</p>
        </div>
      </div>
    // </motion.div>
  )
}

export default Faq;