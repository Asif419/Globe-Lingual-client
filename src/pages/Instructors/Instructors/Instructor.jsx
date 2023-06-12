import { motion } from 'framer-motion';

const Instructor = ({ instructor }) => {
  const { user_name, user_email, user_photo_url } = instructor;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.0, opacity: 1 }}
      whileInView={{ scale: 0.9, opacity: 8 }}
      transition={{ duration: 0.7 }}
    >

      <div className="card bg-base-100 shadow-xl">
        {/* aspect-w-3 aspect-h-4  (use it in bottom line to equal image)*/}
        <figure className="px-2 pt-5">
          <img src={user_photo_url} alt="Shoes" className="rounded-xl h-32 w-32" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user_name}</h2>
          <p>{user_email}</p>
          <div className="card-actions">
            <button className="btn btn-gl">Details</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Instructor;