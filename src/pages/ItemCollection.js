import CardCategoryFood from "../components/carroussel/CarrousselHorizontal";
import TablesFoods from "../components/table/TablesFoods";
import CardFoodInfo from "../components/card/CardFoodInfo";
import ModalCardButtons from "../components/card/ModalCard";
import Navbar from "../components/navbar/NavigationBar";
import { useState } from "react";


export default function ItemCollection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="flex w-full h-full justify-center px-4 lg:px-16 py-4 ">
      <div className="flex flex-col w-full  h-full  p-4 ">
        <CardCategoryFood />
        <div className="grid grid-cols-4 grid-rows-2 h-full my-4 w-full gap-4    ">
          <div id="table" className="col-span-4 row-span-1 lg:col-span-3 lg:row-span-2  self-start ">
            <TablesFoods />
          </div>
            <div className="col-span-4 lg:col-span-1 row-span-2">
              <CardFoodInfo/>
            </div>
            
        </div>
      </div>
      <Navbar setOpenModal={setOpenModal} />
      <ModalCardButtons openModal={openModal} setOpenModal={setOpenModal} />


    </main>
  );
}
