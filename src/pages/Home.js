import CardCategoryFood from "../components/carroussel/CarrousselHorizontal";
import TablesFoods from "../components/table/TablesFoods";

export default function Home() {
  return (
    <main className="flex w-full h-full justify-center px-4 lg:px-16 py-4 ">
      <div className="flex flex-col w-full  h-full  p-4 ">
        <CardCategoryFood />
        <div className="grid grid-cols-4 grid-rows-2 h-full my-4 w-full gap-4    ">
          <div id="table" className="col-span-3 row-span-2 self-start ">
            <TablesFoods />
          </div>
            <div className="col-span-1 row-span-2 bg-red-300">

            </div>
        </div>
      </div>
    </main>
  );
}
