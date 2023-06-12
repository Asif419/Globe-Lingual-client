import { motion } from 'framer-motion';

const Instructor = ({ instructor }) => {
  const { user_name, user_photo_url, user_email } = instructor;
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileHover={{ scale: 1.0, opacity: 1 }}
      whileInView={{ scale: 0.9, opacity: 8 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
  );
};

export default Instructor;