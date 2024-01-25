
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ButtonGoogleLogin } from "./ButtonGoogleLogin";

export default function LoginCard() {
    return(
        <div className="flex flex-col w-full h-3/4 justify-center items-center gap-8 ">
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
                  <a href="/register" className=" text-secondary hover:underline cursor-pointer">Cadastre-se</a>
                </span>

                <a className=" text-sm justify-start  text-secondary hover:underline cursor-pointer">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="flex flex-col w-full justify-end items-center gap-4">
                <button className="w-3/5 h-12 rounded-lg shadow-sm focus:outline-none pointer-events-auto hover:bg-orange-300 hover:text-orange-500 focus:border-secondary px-4 bg-secondary text-white font-bold">
                  Entrar
                </button>
                <GoogleOAuthProvider clientId="453997831134-705bsj7ro2do4sbcvupsi94h73tg9qi4.apps.googleusercontent.com">
                  <ButtonGoogleLogin />
                </GoogleOAuthProvider>
              </div>
            </div>
          </div>
    );
}