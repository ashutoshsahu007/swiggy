import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <>
      <h1>OOPs !!!!</h1>
      <h2>Something Went Wrong </h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
      <img src="error.png" alt="image not found" />
    </>
  );
};
export default Error;
