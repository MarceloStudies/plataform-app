import LoginCard from "../components/login/LoginCard";
import RegisterCard from "../components/login/RegisterCard";



export default function Login({ param, company }) {
  let card = param === "login" ? <LoginCard name ={company}/> : param === "register" ?  <RegisterCard  name ={company}/> : <LoginCard name ={company}/>;
  
  let name_company = company === "imogon" ? "Imogon" : "Margon";

  let color, logo, bg, bgDark;
  switch (company) {
    case "margon":
      bg = "bg-gradient-to-b from-green-400 to-gray-100";
      bgDark = "bg-gradient-to-b from-green-900 to-gray-800";
      color = "green";
      logo = "margoLogo";
      break;
    case "imogon":
      bg = "bg-gradient-to-b from-teal-400 to-gray-100";
      bgDark = "bg-gradient-to-b from-teal-900 to-gray-800";
      color = "teal";
      logo = "imogoLogo";
      break;
    default:
      bg = "bg-gradient-to-b from-orange-400 to-gray-100";
      bgDark = "bg-gradient-to-b from-orange-400 to-gray-800";
      color = "orange";
      logo = "margoLogo";
  }

  return (
    <main className={` ${bg} dark:${bgDark} flex w-screen h-full justify-center px-4 `}>
      <div className="container  w-full min-h-[620px] h-full flex justify-center items-center ">
        <div className={`flex flex-col card shadow-xl dark:shadow-gray-900 bg-white dark:bg-bgDark_primary w-full rounded-3xl max-w-2xl p-6 md:py-6 md:px-12 animate-fadeIn`}>
          <div className="flex flex-col w-full h-1/4 justify-center text-center text-3xl  items-center gap-1 mb-4">
            <h1 className={` text-${color}-400 font-bold uppercase`}>{name_company}</h1>
            <h2 className="text-2xl text-txt_secondary dark:text-txtDark_primary  italic ">
              Seja bem-vindo!
            </h2>
          </div>
          {card}
        </div>
      </div>
    </main>
  );
}
