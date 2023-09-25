import { useLoaderData } from "react-router-dom";

const Details = () => {
  const user = useLoaderData();
  
  return (
    <div>
      <h1>details about user {user.name}</h1>
    </div>
  );
};

export default Details;