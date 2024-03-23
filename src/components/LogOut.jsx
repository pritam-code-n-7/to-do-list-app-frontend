import axios from "axios";
import { useEffect, useState } from "react";

function AboutUs() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setItems(res.data);
        console.log(res)
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
        <div key={index}>
          <p className="text-pretty border-b border-black font-bold">{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
