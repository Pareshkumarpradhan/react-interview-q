/* eslint-disable react/prop-types */
export default function Paginations({ pageNo, setPageNo }) {
  const prevThreeNoArr = Array.from({ length: 3 }, (_, i) => pageNo - 1 - i)
    .filter((value) => value > 0)
    .reverse();

  const nextThreeNoArr = Array.from({ length: 4 }, (_, i) => pageNo + i);

  const paginationArr = [...prevThreeNoArr, ...nextThreeNoArr];

  function handeleNext() {
    setPageNo(pageNo + 1);
  }
  function handelePrev() {
    setPageNo(pageNo - 1);
  }
  return (
    <>
      <div className="flex mt-6 justify-evenly">
        {pageNo > 1 ? (
          <div
            onClick={handelePrev}
            className="bg-black text-white p-2 rounded-md cursor-pointer"
          >
            {"<"}
          </div>
        ) : (
          ""
        )}

        {paginationArr.map((value, index) => {
          return (
            <div
              onClick={() => setPageNo(value)}
              key={index}
              className={
                value == pageNo
                  ? `bg-blue-500 text-white p-2 rounded-md cursor-pointer `
                  : `bg-black text-white p-2 rounded-md cursor-pointer hover:bg-gray-400`
              }
            >
              {value}
            </div>
          );
        })}
        <div
          onClick={handeleNext}
          className="bg-black text-white p-2 rounded-md cursor-pointer "
        >
          {">"}
        </div>
      </div>
    </>
  );
}
