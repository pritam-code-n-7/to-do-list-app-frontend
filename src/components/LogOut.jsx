import axios from "axios";
import { useEffect, useState } from "react";

function AboutUs() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/global"
        );
        setItems(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!items) return <div>Loading...</div>;
  
  // Display only the first 10 items
  const itemsToShow = items && items.length > 10 ? items.slice(0, 10) : items;

  return (
    <div>
      {itemsToShow.map((item, index) => (
        <div key={index}>{/* Render each item here */}</div>
      ))}
    </div>
  );
}

export default AboutUs;
