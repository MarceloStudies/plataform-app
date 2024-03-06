import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

export default function ModalCardButtons({ openModal, setOpenModal }) {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      {openModal && (
        <div className="fixed inset-0 z-50 overflow-y-hidden">
          <div className="flex item-start lg:items-end justify-center  px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
              onClick={() => setOpenModal(false)}
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div
              className="inline-block w-full px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white dark:bg-gray-700 dark:border-gray-600 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* header */}

              <div>
                <div className="flex items-center justify-end">
                  {/* <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200">
                    {currentPath}
                    </h3> */}
                  <button
                    onClick={() => setOpenModal(false)}
                    type="button"
                    className="inline-flex items-center justify-center w-8 h-8 text-gray-400 rounded-full hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-800"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/* body  */}
                <div className="grid grid-rows-2 grid-cols-2  w-full h-80  gap-6 ">
                  <span className="flex flex-col items-center justify-center shadow-md border-2 rounded-md w-full h-full bg-slate-200 dark:bg-slate-800 dark:border-slate-700  text-gray-600 dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-800  hover:dark:border-gray-600 hover:border-gray-300 cursor-pointer">
                    <svg
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      height="3em"
                      width="3em"
                    >
                      <path d="M200 344v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
                    </svg>
                    <span className="text-lg font-bold">Adicionar Item</span>
                  </span>
                  <span className="flex flex-col items-center justify-center shadow-md border-2 rounded-md w-full h-full bg-slate-200 dark:bg-slate-800 dark:border-slate-700  text-gray-600 dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-800  hover:dark:border-gray-600 hover:border-gray-300 cursor-pointer">
                    <svg
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      height="3em"
                      width="3em"
                    >
                      <path d="M373.1 24.97c28.1-28.117 73.7-28.117 101.8 0L487 37.09c28.1 28.12 28.1 73.71 0 101.81L289.8 336.2c-8.7 8.6-19.4 14.9-31.2 18.3l-100 28.6c-8.4 2.4-17.4 0-23.6-7-6.1-5.3-8.5-14.3-6.1-22.7l28.6-100c3.4-11.8 9.7-22.5 18.3-31.2L373.1 24.97zm67 33.94c-8.5-9.37-23.7-9.37-33.1 0L377.9 88l46.1 46.1 29.1-30c9.4-8.5 9.4-23.7 0-33.07l-13-12.12zM203.7 266.6l-16.8 58.5 58.5-16.8c4-1.1 7.5-3.2 10.4-6.1L390.1 168 344 121.9 209.8 256.2c-2.9 2.9-5 6.4-6.1 10.4zM200 64c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H88c-22.09 0-40 17.9-40 40v272c0 22.1 17.91 40 40 40h272c22.1 0 40-17.9 40-40V312c0-13.3 10.7-24 24-24s24 10.7 24 24v112c0 48.6-39.4 88-88 88H88c-48.6 0-88-39.4-88-88V152c0-48.6 39.4-88 88-88h112z" />
                    </svg>
                    <span className="text-lg font-bold">Editar Item</span>
                  </span>
                  <span className="flex flex-col items-center justify-center shadow-md border-2 rounded-md w-full h-full bg-slate-200 dark:bg-slate-800 dark:border-slate-700  text-gray-600 dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-800  hover:dark:border-gray-600 hover:border-gray-300 cursor-pointer">
                    <svg
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      height="3em"
                      width="3em"
                    >
                      <path d="M312 232c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h176zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
                    </svg>
                    <span className="text-lg font-bold">Deletar Item</span>
                  </span>
                  <span className="flex flex-col items-center justify-center shadow-md border-2 rounded-md w-full h-full bg-slate-200 dark:bg-slate-800 dark:border-slate-700  text-gray-600 dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-800  hover:dark:border-gray-600 hover:border-gray-300 cursor-pointer">
                    <svg
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      height="3em"
                      width="3em"
                    >
                      <path d="M501.6 4.186a24.105 24.105 0 00-25.44-1.063L12.12 267.1C4.184 271.7-.504 280.3.043 289.4c.547 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46 98.56 41.4a24.044 24.044 0 009.297 1.875c4.078 0 8.141-1.031 11.78-3.094a23.936 23.936 0 0011.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2L182.2 328.1 78.23 284.7 369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zm189.7-22.1l-176.6-74.19 224.6-249.5-48 323.69z" />
                    </svg>
                    <span className="text-lg font-bold">Adicionar Item</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
