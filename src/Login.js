import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ButtonGoogleLogin } from "./ButtonGoogleLogin";

export default function Login() {
  return (
    <main className="bg-gradient flex w-screen h-full justify-center px-4 ">
      <div className="container  w-full min-h-[620px] h-full flex justify-center items-center ">
        <div className="flex flex-col card shadow-xl bg-white w-full  md:h-1/2 rounded-3xl max-w-2xl py-4 px-6">
          <div className="flex flex-col w-full h-1/4 justify-center text-center text-3xl  items-center gap-1 mb-4">
            <h1 className=" text-secondary font-bold uppercase">Holy House</h1>
            <h2 className="text-2xl text-txt_secondary italic ">
              Seja bem-vindo!
            </h2>
          </div>

          <div className="flex flex-col w-full h-3/4 justify-center items-center gap-4">
            <div className="flex flex-col w-full h-1/2 justify-center items-center gap-4 ">
              <div className="flex flex-col w-full gap-1">
                <label for="emailLogin" className=" self-start ">
                  Digite seu e-email:
                </label>
                <input
                  className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:border-secondary px-4"
                  type="text"
                  placeholder="E-mail"
                  id="emailLogin"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label for="emailLogin" className=" self-start ">
                  Digite seu e-email:
                </label>
                <input
                  className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:border-secondary px-4"
                  type="password"
                  placeholder="Senha"
                />
              </div>
            </div>
            <div className="flex flex-col w-full h-1/2 justify-around items-center gap-4 ">
              <div className="flex flex-row items-start justify-between w-full ">
                <span className=" flex flex-col  text-sm text-txt_secondary self-start ">
                  Não possui conta?
                  <a className="text-secondary hover:underline cursor-pointer">Cadastre-se</a>
                </span>

                <a className=" text-sm justify-start  text-secondary hover:underline cursor-pointer">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="flex flex-col w-full justify-end items-center gap-4">
                <button className="w-full h-12 rounded-lg shadow-sm focus:outline-none pointer-events-auto hover:bg-orange-300 hover:text-orange-500 focus:border-secondary px-4 bg-secondary text-white font-bold">
                  Entrar
                </button>
                <GoogleOAuthProvider clientId="453997831134-705bsj7ro2do4sbcvupsi94h73tg9qi4.apps.googleusercontent.com">
                  <ButtonGoogleLogin />
                </GoogleOAuthProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
