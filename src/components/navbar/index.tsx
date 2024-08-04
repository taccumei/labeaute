import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react"
import { Link } from "react-router-dom";
import Instagram from "@/assets/instagram.png";


type Props = {
  isTopOfPage: boolean,
}

const NavBar = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-200 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
          {isTopOfPage ? (
            <Link to="https://www.instagram.com/la_beaute1001/">
              <img alt="instagram" src={Instagram} className="w-6 h-6" /></Link>
          ) : (
            <Link to="/">Book Appoinment</Link>
          )}
          {/* RIGHT SIDE */}
          <div>
            <div>
              <a href=""><img src="" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar


// import { useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
// import Logo from "@/assets/Logo.png"
// // import Link from "./Link";
// import { SelectedPage } from "@/shared/types";
// import useMediaQuery from "@/hooks/useMediaQuery";
// import ActionButton from '@/shared/ActionButton';
// import Instagram from "@/assets/instagram.png";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";

// type Props = {
//   selectedPage: SelectedPage,
//   isTopOfPage: boolean,
//   setSelectedPage: (value: SelectedPage) => void;
// }

// const NavBar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
//   const flexBetween = "flex items-center justify-between";
//   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
//   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
//   const navbarBackground = isTopOfPage ? "" : "bg-primary-200 drop-shadow";

//   return (
//     <nav>
//       <div className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
//         <div className={`${flexBetween} mx-auto w-5/6`}>
//           <div className={`${flexBetween} w-full gap-16`}>
//             {/* LEFT SIDE */}
//             {isTopOfPage ? (<a href="https://www.instagram.com/la_beaute1001/" target="_blank">
//               <img alt="instagram" src={Instagram} className="w-6 h-6" />
//             </a>) : (
//                 <AnchorLink
//                   className="rounded-full text-black border-black border-[1.5px] w-[200px] px-5 py-3 hover:text-white hover:bg-black"
//                   onClick={() => setSelectedPage(SelectedPage.Appointment)}
//                   href={`#${SelectedPage.Appointment}`}>
//                 Book Appoinment
//               </AnchorLink>)}         
//             {/* RIGHT SIDE */}
//             {isAboveMediumScreens ? (
//               <div className={`${flexBetween} w-full`}>
//                 <div className={`${flexBetween} gap-8`}>
//                   <a
//                     href={SelectedPage.Home}
//                     onClick={()=>setSelectedPage(SelectedPage.Home)}
//                   ><img src={Logo} alt="logo" /></a>
//                 </div>
//                 <div className={`${flexBetween} gap-8 text-md`}>
//                   <Link to="/about" className="text-black">About</Link>

//                 {/* <Link
//                   page="About"
//                   selectedPage={selectedPage}
//                   setSelectedPage={setSelectedPage}/>
//                 <Link page="Our Services"
//                   selectedPage={selectedPage}
//                   setSelectedPage={setSelectedPage}/>
//                 <Link page="Policies"
//                   selectedPage={selectedPage}
//                   setSelectedPage={setSelectedPage}/>
//                 <Link page="After Care"
//                   selectedPage={selectedPage}
//                   setSelectedPage={setSelectedPage}/> */}
//               </div>
//               </div>
//             ) : (
//                 <button 
//                   className="rounded-full bg-secondary-500 p-2"
//                   onClick={() => setIsMenuToggled(!isMenuToggled)}>
//                   <Bars3Icon className="h-6 w-6 text-white"/>
//                 </button>
//                 )}
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU MODEL */}
//       {!isAboveMediumScreens && isMenuToggled && (
//         <div className="fixed z-40 h-[100px] top-[88px] w-full bg-white">
//           {/* CLOSE ICON */}
//           <div className="flex justify-end p-12">
//             <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
//               <XMarkIcon className="h-6 w-6 text-gray-400"/>
//             </button>
//           </div>
//           {/* MENU ITEMS */}
//           <div className="ml-[33%] flex flex-col gap-10 text-2xl">
//             <Link
//               page="Home"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage} />
//             <Link
//               page="Benefits"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}/>
//             <Link page="Our Classes"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}/>
//             <Link page="Contact Us"
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}/>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default NavBar