import { useState } from "react";
import "./App.css";
import useForm from "./useForm";
import getRandomChar from "./Utills";
import getSpecialChar from "./Utills";
import { toast } from "react-hot-toast";

function App() {
  const [values, setValues] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: false,
    symbol: false,
  });
  const [result, setResult] = useState(" ");
  const fieldArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65, 98),
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48, 57),
    },
    
    {
      field: values.symbol,
      getChar:() => getSpecialChar(),
    },
  ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let generatedPassword = " ";
    const checkedFields = fieldArray.filter(({ field }) => field);

    for (let i = 0; i < values.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length);
      // console.log(index,"--");
      const letter = checkedFields[index]?.getChar();
      // console.log(letter, "letters");
      if (letter) {
        generatedPassword += letter;
      }
    }

    if (generatedPassword) {
      setResult(generatedPassword);
    }
    else{
      toast.error("plz select at least one option");
    }
  };

  const handleClipboard = async () => {
    if (result !==" ") {
      await navigator.clipboard.writeText(result);
      toast.success("copied !");
      console.log(" copied in clipboard ==>>", { result });
    }
    else{
      toast.error(" no password to copy!");
    }
  };
  console.log(" generate password == ", result);

  return (
    <div className="row justify-content-center mt-5 ">
      <div className="col-lg-4 col-md-5 col-sm-10 col-10 system p-3">
        <form id="pg-form" onSubmit={handleOnSubmit}>
          <div className="result d-flex">
            <input
              type="text"
              id="result"
              placeholder="Min 6 Char"
              readOnly
              value={result}
            />
            <div className="clipboard " onClick={handleClipboard}>
             <div className="copy-but p-1"> <i className="copy-button" style={{textDecoration:"none" }}> copy text </i></div>
            </div>
          </div>
          <div className="field">
            <div className=" ">
              <label htmlFor="length">Length</label>
            </div>
            <div className=" ">
              <input
                type="number"
                id="length"
                min={6}
                max={10}
                className="number"
                name="length"
                value={values.length}
                onChange={setValues}
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="field">
            <div className=" ">
              <label htmlFor="capital"> Capital </label>
            </div>
            <div className=" ">
              <input
                type="checkbox"
                id="capital"
                name="capital"
                checked={values.capital}
                onChange={setValues}
              />
            </div>
          </div>
          <div className="field">
            <div className=" ">
              <label htmlFor="small"> Small </label>
            </div>
            <div className=" ">
              <input
                type="checkbox"
                id="Small"
                name="small"
                checked={values.small}
                onChange={setValues}
              />
            </div>
          </div>
          <div className="field">
            <div className=" ">
              <label htmlFor="number"> Number</label>
            </div>
            <div className=" ">
              <input
                type="checkbox"
                id="number"
                name="number"
                checked={values.number}
                onChange={setValues}
              />
            </div>
          </div>
           <div className="field">
            <div className=" ">
              <label htmlFor="symbol"> Symbol</label>
            </div>
            <div className=" ">
              <input
                type="checkbox"
                id="symbol"
                name="symbol"
                checked={values.symbol}
                onChange={setValues}
              />
            </div>
          </div> 
          <div className="button mt-3 text-center">
            <button type="submit">Generate Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
