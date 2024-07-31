import { useEffect, useState } from "react";
import Paginations from "./Paginations";
import axios from "axios";

export default function Post() {
  const [data, setData] = useState([]);
  const[pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => setData(res.data));
  }, [pageNo]);

  return (
    <>
      <div className="flex justify-center gap-2 flex-row">
        {data.map((item) => {
          return (
            <img
              key={item.id}
              src={item.download_url}
              alt=""
              className="h-40 w-60 rounded-md object-contain"
            />
          );
        })}
      </div>
      <Paginations pageNo={pageNo} setPageNo={setPageNo}/>
    </>
  );
}
