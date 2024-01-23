import "./index.css";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { ButtonGoogleLogin } from "./ButtonGoogleLogin";

export default function Login() {
  return (
    <main className="bg-gradient w-screen h-screen flex justify-center px-8 ">
      <div className="container  w-full h-auto flex justify-center items-center ">
        <div className="flex flex-col card bg-white w-full h-3/4 rounded-3xl max-w-4xl py-4 px-6">
          <div className="flex flex-col w-full h-1/4 justify-center text-center text-3xl  items-center gap-1 mb-4">
            <h1 className=" text-secondary font-bold uppercase">Holy House</h1>
            <h2 className="text-2xl text-txt_secondary italic ">
              {" "}
              Seja bem-vindo!
            </h2>
          </div>

          <div className="flex flex-col w-full h-3/4 justify-center items-center gap-4">
            <div className="flex flex-col w-full h-1/2 justify-center items-center gap-4">
              <div className="flex flex-col w-full gap-1">
                <label for="emailLogin" className=" self-start ">Digite seu e-email:</label>
                <input
                  className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:border-secondary px-4"
                  type="text"
                  placeholder="E-mail"
                  id="emailLogin"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label for="emailLogin" className=" self-start ">Digite seu e-email:</label>
              <input
                className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:border-secondary px-4"
                type="password"
                placeholder="Senha"
              />
            </div>
            </div>
            <div className="flex flex-col w-full h-1/2 justify-center items-center gap-4">
              <button className="w-full h-12 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-secondary px-4 bg-secondary text-white font-bold">
                Entrar
              </button>
              {/* <button className="w-full h-12 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-secondary px-4 bg-white text-secondary font-bold">
                Cadastrar
              </button> */}
               <GoogleOAuthProvider clientId="453997831134-705bsj7ro2do4sbcvupsi94h73tg9qi4.apps.googleusercontent.com">
                <ButtonGoogleLogin />
               </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
