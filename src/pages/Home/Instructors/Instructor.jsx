
const Instructor = ({ instructor }) => {
  const { user_name, user_photo_url, user_email } = instructor;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={user_photo_url} />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user_name}</h2>
        <p>{user_email}</p>
      </div>
    </div>
  );
};

export default Instructor;