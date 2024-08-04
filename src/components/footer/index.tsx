
import Logo from "@/assets/Logo.png";
import FooterImg from "@/assets/footer.png"
import { PhoneIcon, InboxIcon, MapPinIcon } from "@heroicons/react/24/solid";
import InstagramIcon from "@/assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <div className="justify-content mx-auto gap-16 md:flex">
        <div className="mt-16 basis-1/3 md:mt-0">
          <img src={Logo} alt="logo"/>
          <br />
          <img src={FooterImg} alt="FooterImg" className="h-60 w-60"/>
          <p className="my-5">Follow us on <a className="underline" href="https://www.instagram.com/la_beaute1001/" target="_blank">Instagram</a>
          </p>         
        </div>
        <div className="mt-16 basis-1/3 md:mt-0">
          <h4 className="font-bold">Hours</h4>
          <div className="flex my-4">
            <div className="flex-col mr-5">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div className="flex-col">
              <p>Closed</p>
              <p>10:30 a.m. - 8:00 p.m.</p>
              <p>10:30 a.m. - 8:00 p.m.</p>
              <p>10:30 a.m. - 8:00 p.m.</p>
              <p>10:30 a.m. - 8:00 p.m.</p>
              <p>10:30 a.m. - 8:00 p.m.</p>
              <p>10:30 a.m. - 8:00 p.m.</p>
            </div>
          </div>
          <p>&copy;2024 La Beauté</p>
          <p>All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/3 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <div className="flex">
            <div className="flex-col justify-center mx-2 my-2">
              <PhoneIcon className="h-6 w-6 my-2" />
              <InboxIcon className="h-6 w-6 my-2" />
              <img src={InstagramIcon} alt="instagram icon" className="w-6 h-6" />
              <MapPinIcon className="h-6 w-6 my-2" />
            </div>
            <div className="flex-col justify-center mx-2 my-2">
              <p className="my-2">(333)456-9204</p>
              <p className="my-2">labeaute@gmail.com</p>
              <p className="my-2">la_beaute1001</p>
              <p className="my-2">402 W Pender, 406 VANCOUVER, British Columbia V6B1T6</p>
            </div>
          </div>          
        </div>
      </div>
    </footer>
  )
}

export default Footer;