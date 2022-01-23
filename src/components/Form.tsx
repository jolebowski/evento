import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const [event, setEvent] = useState({
    id: '',
    nameEvent: '',
    email: '',
    description: '',
    date: '',
  });

  //const dispatch = useDispatch();

  /*const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADDEVENT',
      payload: event,
    });
    setEvent({
      id: '',
      nameEvent: '',
      email: '',
      description: '',
      date: '',
    });
  };

  const handleChange = (e) => {
    if (e.target.classList.contains('inp-title')) {
      const newObject = { ...article, id: uuidv4(), title: e.target.value };
      setArticle(newObject);
    } else if (e.target.classList.contains('inp-body')) {
      const newObject = { ...article, body: e.target.value };
      setArticle(newObject);
    }
  };*/

  return (
    <div
      id='authentication-modal'
      aria-hidden='true'
      className='hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center'
    >
      <div className='relative w-full max-w-md px-4 h-full md:h-auto'>
        <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
          <div className='flex justify-end p-2'>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
              data-modal-toggle='authentication-modal'
            >
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Ajouter un évènement
            </h3>
            <div>
              <label className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
                Nom de l'événement
              </label>
              <input
                type='text'
                name='event'
                id='text'
                className='inp-event bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='Séminaire de formation'
              />
            </div>
            <div>
              <label className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
                Adresse email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='john@doe.fr'
              />
            </div>
            <div>
              <label className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
                Date
              </label>
              <input
                id='date'
                type='date'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div className='flex-auto w-full mb-1 text-xs space-y-2'>
              <label className='font-semibold text-gray-600 py-2'>
                Description
              </label>
              <textarea
                name='description'
                id=''
                className='w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4'
                placeholder='Enter your comapny info'
              ></textarea>
              <p className='text-xs text-gray-400 text-left my-3'>
                You inserted 0 characters
              </p>
            </div>

            <button
              type='submit'
              data-modal-toggle='authentication-modal'
              className='mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48'
            >
              Ajouter un évènement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
