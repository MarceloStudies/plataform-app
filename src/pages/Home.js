import React, { useState } from "react";
import ModalCardButtons from "../components/card/ModalCard";
import Navbar from "../components/navbar/NavigationBar";

export default function Home() {
    const [openModal, setOpenModal] = useState(false);
   
    return (
       <main className="w-full h-full">
         <Navbar setOpenModal={setOpenModal} />
         <ModalCardButtons openModal={openModal} setOpenModal={setOpenModal} />
       </main>
    );
   }
