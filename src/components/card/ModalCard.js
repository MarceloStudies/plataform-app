import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function ModalCard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} position ='center' >
        <Modal.Header className='p-2'>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className='grid w-full h-full grid-cols-2 grid-rows-2  gap-2'>
            <div className='bg-red-200 w-full h-24'></div>
            <div className='bg-red-300 w-full h-24'></div>
            <div className='bg-red-400 w-full h-24'></div>
            <div className='bg-red-500 w-full h-24'></div>


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
