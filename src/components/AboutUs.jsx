import axios from "axios";
import { useEffect, useState } from "react";

function AboutUs() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        setItems(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error:{error.message}</div>;
  return <div>{items.map((myItems) => myItems)}</div>;
}

export default AboutUs;
