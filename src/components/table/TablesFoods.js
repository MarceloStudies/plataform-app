export default function TablesFoods() {
  return (
    <div className="relative overflow-x-hidden shadow-lg sm:rounded-lg">
      <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white p-2 dark:bg-gray-900">
        <label for="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-slate-100 dark:bg-gray-700 dark:text-gray-400 rounded-lg">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Categoria
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
            <td className="w-4 p-4">
              <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://img.freepik.com/fotos-premium/brocolis-isolado-em-um-fundo-branco_120872-31309.jpg"
                alt="Brocólis"
              />
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
             
              <div className="">
                <div className="text-base font-semibold">Brocólis </div>
                <div className="font-normal text-gray-500">
                  Brócolis
                </div>
              </div>
            </th>
            <td className="px-6 py-4">Verduras</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                Finalizado
              </div>
            </td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
