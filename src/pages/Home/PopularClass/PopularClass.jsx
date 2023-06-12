import { motion } from 'framer-motion';

const PopularClass = ({ c }) => {
  const { class_name, class_price, class_photo_url, enrolled_students } = c;


  return (
    <motion.div
      animate="visible"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="card card-compact bg-base-100 shadow-xl"
    >
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className="max-h-[30vh] object-cover w-full" src={class_photo_url} alt={class_name} /></figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title">{class_name}</h2>
            </div>
            <div>
              <p className="font-extrabold text-base">${class_price}</p>
            </div>
          </div>
          <p>{enrolled_students} students enrolled</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularClass;