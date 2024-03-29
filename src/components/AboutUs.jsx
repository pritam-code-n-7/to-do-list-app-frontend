import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function AboutUs() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        setItems(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error:{error.message}</div>;
  return (
    <div className="flex flex-wrap w-[350px] justify-center">
      {items.map((item) => (
        <Card key={item.userId} {...item} />
      ))}
    </div>
  );
}

export default AboutUs;
