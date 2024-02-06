export default function CardFoodInfo() {
  return (
    <div className="flex h-full w-full rounded-lg shadow-lg">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Brocólis
        </h5>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[45%]"
          ></div>
        </div>
      </div>
    </div>
  );
}
