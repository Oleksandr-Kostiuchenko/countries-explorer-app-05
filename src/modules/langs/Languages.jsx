import style from "./Languages.module.css";
import { useOutletContext } from "react-router-dom";

const Languages = () => {
  const { languages } = useOutletContext();

  if (!languages || languages.length === 0) {
    return;
  }

  const langArr = Object.values(languages);

  return (
    <>
      <ul>
        {langArr.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </>
  );
};

export default Languages;
