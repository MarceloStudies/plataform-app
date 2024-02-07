export default function CardFoodInfo() {
  return (
    <div className="flex h-full w-full rounded-lg shadow-lg">
      
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className=" text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Brocólis
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          2 de 5 kg
        </span>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700 mt-2">
          <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%]">
            {" "}
            45%
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Doação
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantidade (KG)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className={`w-6 h-6 mb-3 border-2  rounded-full shadow-lg`}
                    src="https://img.freepik.com/fotos-premium/brocolis-isolado-em-um-fundo-branco_120872-31309.jpg"
                    alt="Bonnie image"
                  />

                  <div className="ps-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                     Marcelo Gonçalves
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">500 gramas</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
