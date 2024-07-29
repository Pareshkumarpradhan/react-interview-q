import { useEffect, useState } from "react";
import Post from "./Post";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=3`
        );
        const data = await response.json();

        setData((prevData) => {
          return [...prevData, ...data];
        });
        console.log("data fetched", data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pageNo]);

  return (
    <>
      <Post data={data} setPageNo={setPageNo} />
    </>
  );
}
