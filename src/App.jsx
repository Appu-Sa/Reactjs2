import { useEffect, useState } from "react";
import Info from "./components/Info";
import axios from "axios";
import imd1 from "./assets/bouncing-circles.svg";
import imd2 from "./assets/error.svg";
function App() {
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getapi = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    // Loading animation and 404 Error Image
    <>
      {isLoading ? (
        <div className="loadcontainer">
          <img src={imd1} alt="" />
        </div>
      ) : hasError ? (
        <div className="loadcontainer">
          <img src={imd2} alt="" />
        </div>
      ) : (
        <Info details={details} />
      )}
    </>
  );
}

export default App;
