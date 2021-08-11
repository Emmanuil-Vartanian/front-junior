import { useState } from "react";
import generator from "generate-password";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "../styles/Index.module.css";

const Index = () => {
  const [lengthPassword, setLengthPassword] = useState(5);
  const [numberInPassword, setNumberInPassword] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generationPassword = () => {
    const password = generator.generate({
      length: lengthPassword,
      numbers: numberInPassword,
    });
    setGeneratedPassword(password);
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerBlock}>
        <span className={classes.titleGeneration}>Генерация пароля</span>
        <div className={classes.lengthPasswordBlock}>
          <span>Выберите длину пароля.</span>
          <select
            className={classes.select}
            onChange={(e) => setLengthPassword(+e.target.value)}
          >
            <option name="5">5</option>
            <option name="10">10</option>
            <option name="15">15</option>
            <option name="20">20</option>
          </select>
        </div>
        <div className={classes.checkboxBlock}>
          <span>Будут ли числа в пароле?</span>
          <input
            className={classes.checkboxFiled}
            type="checkbox"
            onChange={(e) => setNumberInPassword(e.target.checked)}
          />
        </div>
        <button className={classes.button} onClick={generationPassword}>
          Сгенерировать пароль
        </button>

        {generatedPassword !== "" && (
          <>
            <input
              className={classes.inputGeneratedPassword}
              value={generatedPassword}
              disabled
            />
            <CopyToClipboard text={generatedPassword}>
              <button className={classes.button}>Скопировать пароль</button>
            </CopyToClipboard>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
