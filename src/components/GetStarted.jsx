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
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!items.length) return <div>Loading...</div>;
  
  return (
    <div>
      {items.slice(0, 10).map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
