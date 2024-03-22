import axios from "axios";
import { useState, useEffect } from "react";

function Dashboard() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const myItems = await axios.get(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        setItems(myItems.data);
      } catch (err) {
        console.error("it is an error", err);
      }
    };
    fetchItems();
  }, []);
  return (
    <div>
      <p>{items ? "loading..." : "data loaded"}</p>
      {items && <img className="h-1/2 w-1/2" src={items[4].url} alt="cat" />}
    </div>
  );
}

export default Dashboard;
