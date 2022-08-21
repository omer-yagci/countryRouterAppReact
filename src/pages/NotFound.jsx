import notFoundImage from "../assests/notFound.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  <div className="NotFoundcontainer">
    <h1>Something went Wrong!</h1>
    <img src={notFoundImage} alt="notFoundImage" />
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  </div>;
};

export default NotFound;
