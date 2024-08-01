import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>OOPs !!!!</h1>
      <h2>Something Went Wrong </h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </>
  );
};
export default Error;
