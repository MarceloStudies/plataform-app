import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function NavPlusButton() {
    const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          data-tooltip-target="tooltip-new"
          type="button"
          onClick={() => setOpenModal(true)}
          className="inline-flex items-center justify-center w-10 h-10 font-medium bg-amber-600 rounded-full hover:bg-amber-700 group focus:ring-4 focus:ring-amber-300 focus:outline-none dark:focus:ring-amber-800"
        >
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span className="sr-only">New item</span>
        </button>
      </div>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        position="center"
      >
        <Modal.Header className="p-2"></Modal.Header>
        <Modal.Body>
          <div className="grid w-full h-full grid-cols-2 grid-rows-2  gap-2">
            <div className="bg-red-200 w-full h-24"></div>
            <div className="bg-red-300 w-full h-24"></div>
            <div className="bg-red-400 w-full h-24"></div>
            <div className="bg-red-500 w-full h-24"></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
