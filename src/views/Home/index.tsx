import '@themesberg/flowbite';
import React from 'react';
import List from '../../components/List';
import Form from '../../components/Form';

function index() {
  return (
    <>
      <div className=' gradient container md:mx-auto h-screen'>
        <div className='text-center px-3 lg:px-0'>
          <h1 className='my-4 py-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight'>
            Le service Evento pour planifier vos événements
          </h1>
          <p className='leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8'>
            Créer ou gérer vos événements, en appuyant sur le bouton ci-dessous
          </p>

          <button
            data-modal-toggle='authentication-modal'
            className='mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48'
          >
            Ajouter un évènement
          </button>
          <Form />
        </div>

        <div className='flex items-center w-full mx-auto content-end'>
          <div className='browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl'></div>
        </div>
        <List />
      </div>
    </>
  );
}

export default index;
