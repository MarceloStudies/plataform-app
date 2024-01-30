import LoginCard from "../components/login/LoginCard";
import RegisterCard from "../components/login/RegisterCard";



export default function Login({ param }) {
  let card = param === "login" ? <LoginCard /> : param === "register" ?  <RegisterCard /> : <LoginCard />;
  

  return (
    <main className="bg-gradient dark:bgDark-gradient flex w-screen h-full justify-center px-4 ">
      <div className="container  w-full min-h-[620px] h-full flex justify-center items-center ">
        <div className="flex flex-col card shadow-xl dark:shadow-gray-900 bg-white dark:bg-bgDark_primary w-full rounded-3xl max-w-2xl p-6 md:py-6 md:px-12 animate-fadeIn">
          <div className="flex flex-col w-full h-1/4 justify-center text-center text-3xl  items-center gap-1 mb-4">
            <h1 className=" text-secondary font-bold uppercase">Holy House</h1>
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
