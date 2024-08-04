import { useEffect, useState } from "react";
import NavBar from "./components/navbar/index"
import { SelectedPage } from "./shared/types"
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className="app bg-gray-20">
      <NavBar isTopOfPage={isTopOfPage} />
      <HomePage/>
      {/* <NavBar
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} /> */}
      
      {/* <HomePage setSelectedPage={setSelectedPage} /> */}
      {/* <About setSelectedPage={setSelectedPage}/> */}
      {/* <Benefits setSelectedPage={setSelectedPage}/> */}
      {/* <OurServices setSelectedPage={setSelectedPage}/> */}
      {/* <Faq setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App;
