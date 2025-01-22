import { useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = () => {
      axios.get("http://localhost:8000/", {
          withCredentials: true,
        })
        .then((response) => {
            console.log("CSRF Token set successfully:", response);
            setMessage(response.data.message);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
