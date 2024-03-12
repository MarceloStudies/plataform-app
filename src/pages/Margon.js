import mobiliariaLogo from "../assets/img/icone-mobiliaria.png";
import holyhouseLogo from "../assets/img/logo-holy-house.png";

export default function Margon() {
  function redirect(path) {
    window.location.assign(path);
  }
  return (
    <main className="w-full h-full flex flex-col justify-center bg-gradient-to-b from-green-800 to-gray-700 ">
      <div className="flex flex-col w-full h-36 justify-start items-center">
        <div className="flex flex-col w-full  justify-start text-center text-3xl items-center gap-1 mb-4">
          <h1 className="text-green-200 font-bold uppercase">Margon Company</h1>
          {/* <h2 className="text-2xl text-txt_secondary dark:text-txtDark_primary italic">
                        Seja bem-vindo!
                    </h2> */}
        </div>
      </div>

      <div className=" flex flex-col md:flex-row container  h-auto self-center justify-center items-center gap-4">
        <button
          onClick={() => redirect("./imogon")}
          className="flex w-1/2 h-1/2 md:1/3 md:h-72 bg-gray-800 border border-blue-300 max-w-72 m-4 rounded-full shadow-xl hover:shadow-inner hover:border-blue-400 hover:max-w-80 hover:h-80 cursor-pointer flex-col "
        >
          <img className="w-auto h-auto" src={mobiliariaLogo}></img>
          {/* IMOGON */}
        </button>
        <button onClick={() => redirect("./holyhouse")} className="flex w-1/2 h-1/2 md:1/3 md:h-72 bg-gray-800 border border-orange-300 max-w-72 m-4 rounded-full shadow-xl hover:shadow-inner hover:border-orange-400 hover:max-w-80 hover:h-80 cursor-pointer flex-col ">
          <img src={holyhouseLogo}></img>
        </button>
        <button className="flex w-1/2 h-1/2 md:1/3 md:h-72 bg-gray-800 border border-green-300 max-w-72 m-4 rounded-full shadow-xl hover:shadow-inner hover:border-green-400 hover:max-w-80 hover:h-80 cursor-pointer flex-col "></button>
        <button className="flex w-1/2 h-1/2 md:1/3 md:h-72 bg-gray-800 border border-green-300 max-w-72 m-4 rounded-full shadow-xl hover:shadow-inner hover:border-green-400 hover:max-w-80 hover:h-80 cursor-pointer flex-col "></button>
      </div>
    </main>
  );
}
