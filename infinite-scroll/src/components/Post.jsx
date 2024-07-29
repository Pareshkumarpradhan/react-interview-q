import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function Post({ data, setPageNo }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (parem) => {
        if (parem[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data, setPageNo]);
  return (
    <div className=" flex justify-center items-center flex-col">
      {data.map((item, index) => {
        return (
          <img
            src={item.download_url}
            key={index}
            className="image-post h-60 w-40 object-cover m-2 rounded-sm"
          />
        );
      })}
    </div>
  );
}
