const UserStats = ({ followers, following }) => {
  return (
    <div className='flex gap-4 mt-4'>
      <div>Followers: {followers}</div>
      <div>Following: {following}</div>
    </div>
  );
};

export default UserStats;
