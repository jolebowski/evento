import React from 'react';

function index() {
  return (
    <div className='mt-6'>
      <div className=' px-10 py-6 mx-auto'>
        <div className='max-w-6xl px-10 py-6 mx-auto bg-gray-50'>
          <div className='mt-2'>
            <div className='font-light text-gray-600'>
              <h1 className='font-bold text-gray-700'>Par John Doe</h1>
            </div>
          </div>

          <div className='max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100'>
            <div>
              <p className='mt-2 p-8'>Préparation de la formation</p>
            </div>
          </div>
        </div>

        <div className='max-w-4xl py-16 xl:px-8 flex justify-center mx-auto'>
          <div className='w-full mt-16 md:mt-0 '>
            <form className='relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7'>
              <h3 className='mb-6 text-2xl font-medium text-center'>
                Ecrire un commentaire
              </h3>
              <div className='py-6'>
                <label className='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'>
                  Auteur 
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='john@doe.fr'
                />
              </div>
              <textarea
                name='comment'
                className='w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg'
                placeholder='Votre commentaire'
              ></textarea>
              <button
                type='submit'
                className='mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48'
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        <div className='max-w-4xl px-10 py-16 mx-auto bg-gray-100  bg-white min-w-screen animation-fade animation-delay  px-0 px-8 mx-auto sm:px-12 xl:px-5'>
          <p className='mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center sm:mx-0'>
            Tous les commentaires de cet événement
          </p>
          <div className='flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3'>
            <div>
              <h3 className='text-lg font-bold text-purple-500 sm:text-xl md:text-2xl'>
                Johne Doe 2
              </h3>
              <p className='text-sm font-bold text-gray-300'>August 22,2021</p>
              <p className='mt-2 text-base text-gray-600 sm:text-lg md:text-normal'>
                wsh la zone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
