import { useState } from "react";
import { listingsData, getShowData } from "../api";
import { useEffect } from "react";
import Show from "./show";
import { Link } from "react-router-dom";
import ListingCard from "../components/card";

function Home() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await listingsData();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((value, index) => (
          <ListingCard data={value} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Home;
