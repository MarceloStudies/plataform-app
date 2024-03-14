import React, { useState } from "react";
import ModalCardButtons from "../components/card/ModalCard";
import Navbar from "../components/navbar/NavigationBar";
import CardCategoryFood from "../components/carroussel/CarrousselHorizontal";


export default function Home({company}) {
    const [openModal, setOpenModal] = useState(false);
   
    return (
       <main className="w-full h-full">
         <Navbar setOpenModal={setOpenModal} company={company} />
         <ModalCardButtons openModal={openModal} setOpenModal={setOpenModal} />
         <div className="flex pl-20 pr-4 w-full h-full">
          <div className="flex bg-red-400 w-full h-screen">
          </div>

         </div>
       </main>
    );
   }
 