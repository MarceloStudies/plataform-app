import NavHomeButton from "./button/NavHomeButton";
import NavListButton from "./button/NavListButton";
import NavPlusButton from "./button/NavPlusButton";
import NavSettingButton from "./button/NavSettingButton";
import NavProfileButton from "./button/NavProfileButton";


export default function Navbar() {
  function toggleTheme() {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.getElementById("teste").className = " ";
    } else {
      localStorage.theme = "dark";
      document.getElementById("teste").className = "dark";

      
    }
  }

  return (
    <div className="fixed z-50 w-full h-16 lg:h-3/4 lg:w-auto max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 lg:bottom-[10%] lg:left-8 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 lg:grid-cols-none mx-auto">
        <NavHomeButton />
        
        <NavListButton />
       
        <NavPlusButton />
        
        
        <NavSettingButton />

        <NavProfileButton />
        
        
      </div>
    </div>
  );
}
