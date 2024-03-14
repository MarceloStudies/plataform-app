import NavHomeButton from "./button/NavHomeButton";
import NavListButton from "./button/NavListButton";
import NavPlusButton from "./button/NavPlusButton";
import NavSettingButton from "./button/NavSettingButton";
import NavProfileButton from "./button/NavProfileButton";

export default function Navbar({ setOpenModal, company }) {
  
  return (
     <div className="fixed z-50 w-full h-16 lg:h-3/4 lg:w-auto max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 lg:bottom-[10%] lg:left-8 left-1/2 dark:bg-gray-700 dark:border-gray-600">
       <div className="grid h-full max-w-lg grid-cols-5 lg:grid-cols-none mx-auto">
         <NavHomeButton  company={company}/>
         <NavListButton company={company}/>
         <NavPlusButton setOpenModal={setOpenModal} company={company}/>
         <NavSettingButton company={company}/>
         <NavProfileButton company={company}/>
       </div>
     </div>
  );
 }
