import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import useUser from "../../../hooks/useUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const image_upload_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
  const { control, register, handleSubmit, reset, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [user] = useUser();
  const [axiosSecure] = useAxiosSecure();
  const { _id: user_id, user_name, user_email } = user;
  //TODO: remove https://cors-anywhere.herokuapp.com/ from imageHostingURL
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;

  const onSubmit = async (data) => {
    setErrorMessage(null);

    const formData = new FormData();
    formData.append('image', data.image[0]);

    const { nameOfClass, price, totalSeat, classDetails } = data;

    axios.post(imageHostingURL, formData)
      .then(response => {
        if (response.data.success) {
          const class_photo_url = response.data.data.display_url;
          const newClass = {
            instructor_email: user_email,
            instructor_id: user_id,
            class_name: nameOfClass,
            class_photo_url,
            class_price: price,
            total_seats: totalSeat,
            enrolled_students: 0,
            class_status: 'pending',
            class_details: classDetails,
            admin_review: ''
          }
          axiosSecure.post('/add-class', newClass)
            .then((response) => {
              if (response.data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Done! Wait for response',
                  showConfirmButton: false,
                  timer: 1500
                })
                // TODO: sent to the classes list of instructor
              }
            }).catch(error => {
              setErrorMessage(error.message);
            })
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
      })


  }

  return (
    <div className="min-h-[100vh] flex justify-center items-center m-5 md:m-2">
      <div className="w-full md:w-2/3">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          {/* instructor name */}
          <div className="px-2 md:px-20 flex-col w-full items-center">
            <p className="label-text">Instructor Name*</p>
            <input type="text" className="input input-bordered w-full my-1 p-3 rounded-lg" defaultValue={user_name} readOnly {...register("instructorName")} />
            {errors.instructorName && <p className="text-sm text-red-700">You can not modify it</p>}
          </div>
          {/*instructor email */}
          <div className="px-2 md:px-20 flex-col w-full items-center">
            <p className="label-text">Email*</p>
            <input type="instructorEmail" className="input input-bordered w-full my-1 p-3 rounded-lg" defaultValue={user_email} readOnly {...register("email")} />
            {errors.instructorEmail && <p className="text-sm text-red-700">You can not modify it</p>}
          </div>
          {/* class name */}
          <div className="px-2 md:px-20 flex-col w-full items-center">
            <p className="label-text">Class Name*</p>
            <input type="text" className="input input-bordered w-full my-1 p-3 rounded-lg" placeholder="German Grammar" {...register("nameOfClass", { required: true })} />
            {errors.nameOfClass && <p className="text-sm text-red-700">This field is required</p>}
          </div>
          {/* Class image */}
          <div className="px-2 md:px-20 flex-col grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* total seat */}
            <div className="">
              <p className="label-text">Max Seat*</p>
              <input type="number" className="input input-bordered w-full my-1 p-3 rounded-lg" placeholder="30" {...register("totalSeat", { required: true, min: 10, max: 100 })} />
              {errors.totalSeat?.type === 'required' && <p className="text-sm text-red-700">This field is required</p>}
              {errors.totalSeat?.type === 'min' && <p className="text-red-600">One class need at least 10 students</p>}
              {errors.totalSeat?.type === 'max' && <p className="text-red-600">One class can not exceed 100 students</p>}
            </div>
            {/* price */}
            <div className="">
              <p className="label-text">$ Price*</p>
              <input type="number" className="input input-bordered w-full my-1 p-3 rounded-lg" placeholder="34" {...register("price", { required: true, min: 0 })} />
              {errors.price?.type === 'required' && <p className="text-sm text-red-700">This field is required</p>}
              {errors.price?.type === 'min' && <p className="text-red-600">Price should be 0 or positive</p>}
            </div>
          </div>
          {/* class image upload */}
          <div className="px-2 md:px-20 flex-col">
            <label className="label">
              <span className="label-text">Class Image*</span>
            </label>
            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
          </div>
          {/* details */}
          <div className="px-2 md:px-20 flex-col w-full items-center">
            <p className="label-text">Details</p>
            <Controller
              name="classDetails"
              control={control}
              defaultValue=""
              placeholder="Enter your message"
              render={({ field }) => (
                <textarea
                  {...field}
                  className="textarea input input-bordered w-full my-2"
                  rows={1}
                />
              )}
            />
            {errors.nameOfClass && <p className="text-sm text-red-700">This field is required</p>}
          </div>
          {
            errorMessage && (
              <div className='border border-red-400 text-center rounded-lg w-2/3 mx-auto text text-red-600 m-2 '>
                <p>{errorMessage}</p>
              </div>
            )
          }
          <button onClick={() => setErrorMessage(null)} className="btn-gl" type="submit">Add Class</button>
        </form>
      </div>
    </div >
  );
};

export default AddClass;