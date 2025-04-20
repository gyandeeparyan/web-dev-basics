import React from "react";

const Card = ({imgUrl,title}) => {
  return (
    <div className=' flex  justify-center items-center h-[100vh]'>
      <div className='flex px-22  md:px-12 flex-col h-[500px] py-4'>
        <div className='m-auto border-4 md:w-[450px] flex flex-col justify-center rounded-2xl'>
          <img
            className='rounded-t-2xl md:w-[450px]'
            src={imgUrl}
            alt='image'
          />

          <div className='flex flex-col border-t-0 rounded-b-2xl bg-white px-2 py-2'>
            <button
              onClick={() => {
                console.log("HELLO");
              }}
              className='flex w-[25%] rounded-2xl px-2 py-1 border-2 bg-white'>
              Click
            </button>
            <h1 className='font-bold'>{props.title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas!
            </p>
            <a href='#' className='text-blue-600'>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
