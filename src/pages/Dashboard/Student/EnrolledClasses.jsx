import useUser from "../../../hooks/useUser";

const EnrolledClasses = () => {
  const [userFromDB] = useUser();
  console.log(userFromDB);
  
  return (
    <div>
      <h2>Enrolled Classes</h2>
    </div>
  );
};

export default EnrolledClasses;