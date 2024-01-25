import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";

export default function RegisterCard() {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  return (
    <div className="flex flex-col w-full h-3/4 justify-center items-center gap-4">
      <div className="flex flex-col w-full h-1/2 justify-center items-center gap-6 ">
        <div className="flex flex-col w-full gap-1">
          <label for="emailRegister" className=" self-start ">
            Digite um e-email válido:
          </label>
          <input
            className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:border-secondary px-4"
            type="text"
            placeholder="E-mail"
            id="emailRegister"
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <label for="emailRegister" className=" self-start ">
            Digite uma senha:
          </label>
          <input
            className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:border-secondary px-4"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="emailRegister" className=" self-start ">
            Confirme sua senha:
          </label>
          <input
            className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:border-secondary px-4"
            type="password"
            placeholder="Confimação de senha"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={5}
            value={password}
            valueAgain={passwordAgain}
            onChange={(isValid) => {
              if (isValid) {
                document.getElementById("register").hidden = false;
              }
            }}
            messages={{
              minLength: "A senha tem mais de 8 caracteres.",
              specialChar: "A senha tem caracteres especiais.",
              number: "A senha tem um número.",
              capital: "A senha tem uma letra maiúscula.",
              match: "As senhas coincidem.",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-1/2 justify-around items-center gap-4 ">
        <div className="flex flex-row items-start justify-between w-full ">
          <span className=" flextext-sm text-txt_secondary self-start  ">
            Ja possui conta?
            <a
              href="/login"
              className="redirect ml-1 text-secondary hover:underline cursor-pointer"
            >
              Entrar
            </a>
          </span>
        </div>
        <div className="flex flex-col w-full justify-end items-center gap-4">
          <button
            hidden
            id="register"
            className="w-3/5 h-12 rounded-lg shadow-sm focus:outline-none pointer-events-auto hover:bg-orange-300 hover:text-orange-500 focus:border-secondary px-4 bg-secondary text-white font-bold"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
