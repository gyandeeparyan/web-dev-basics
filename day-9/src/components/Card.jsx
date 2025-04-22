import React from "react";

const Card = ({ avatar, name, bio, followers, following }) => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='flex px-22 md:px-12 flex-col h-[500px] py-4'>
        <div className='m-auto border-4 md:w-[450px] flex flex-col justify-center rounded-2xl'>
          <img
            className='rounded-t-2xl md:w-[450px] h-[300px] object-cover'
            src={avatar}
            alt={`${name}'s avatar`}
          />

          <div className='flex flex-col border-t-0 rounded-b-2xl bg-white px-4 py-4 gap-2'>
            <h1 className='font-bold text-xl'>{name}</h1>
            <p className='text-gray-600'>{bio}</p>
            <div className='flex gap-4'>
              <span className='font-medium'>Followers: {followers}</span>
              <span className='font-medium'>Following: {following}</span>
            </div>
            <a
              href={`https://github.com/${name}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'>
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
