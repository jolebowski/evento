import React from 'react';

function List() {
  return (
    <div className='container mx-auto p-4 antialiased'>
      <div>
        <div className='bg-white mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30'>
          <div className='flex p-3 border-l-8 border-yellow-600'>
            <div className=' lg:w-2/12 py-3 block'>
              <div className='text-center tracking-wide'>
                <div className='font-semibold text-4xl '>24</div>
                <div className=' font-normal text-2xl'>Sept</div>
              </div>
            </div>
            <div className='flex-1'>
              <div className='ml-3 space-y-1 border-r-2 pr-3'>
                <div className='text-base leading-6 font-normal capitalize'>
                  Séminaire
                </div>
                <div className='text-sm leading-4 font-normal'>
                  <span className='text-xs leading-4 font-normal text-gray-500'>
                    {' '}
                    Email
                  </span>{' '}
                  John Doe
                </div>
                <div className='text-sm leading-4 font-normal'>
                  <span className='text-xs leading-4 font-normal text-gray-500'>
                    Description
                  </span>
                  Préparation de la formation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
