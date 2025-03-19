import { useOutletContext } from "react-router-dom";
import style from "./Borders.module.css";

const Borders = () => {
  const { borders } = useOutletContext();

  if (!borders || borders.length === 0) {
    return <p>No borders</p>;
  }

  return (
    <>
      <ul>
        {borders.map((border, index) => (
          <li key={index}>{border}</li>
        ))}
      </ul>
    </>
  );
};

export default Borders;
