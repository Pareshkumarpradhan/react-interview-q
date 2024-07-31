import Accordion from "./Accordion";
import data from "../data.json";

export default function Faq() {
  console.log("data", data.faqs);
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">FAQ</h1>
      {data.faqs.map((obj, index) => {
        return <Accordion qna = {obj} key={index}/>;
      })}
    </>
  );
}
