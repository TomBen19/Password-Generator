import Input from "./input";
import {  useState } from "react";

const Passwordgene = () => {
  const [value, setValue] = useState<number>();
  const [result, setResult] = useState<string>();

  const newPasswordGene = (length: number, lowerLettersIsChecked : boolean, upperLettersisChecked : boolean, numberIsChecked : boolean) => {
    setValue(length);
    let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '123456789'
    let newResult = '';
    let newCombo = ''
    if (lowerLettersIsChecked == true && upperLettersisChecked == false && numberIsChecked == false) {
        for (let i = 0; i < length; i++) {
            newResult += lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length))
            

        }
    }
    if (lowerLettersIsChecked == false && upperLettersisChecked == true && numberIsChecked == false) {
        for (let i = 0; i < length; i++) {
            newResult += upperLetters.charAt(Math.floor(Math.random() * upperLetters.length))
            

        }
    }
    if (lowerLettersIsChecked == false && upperLettersisChecked == false && numberIsChecked == true) {
        for (let i = 0; i < length; i++) {
            newResult += numbers.charAt(Math.floor(Math.random() * numbers.length))
            

        }
    }
    if (lowerLettersIsChecked == true && upperLettersisChecked == true && numberIsChecked == false) {
        newCombo = lowerLetters + upperLetters;
        for (let i = 0; i < length; i++) {
            newResult += newCombo.charAt(Math.floor(Math.random() * newCombo.length))
            

        }
    }
    if (lowerLettersIsChecked == false && upperLettersisChecked == true && numberIsChecked == true) {
        newCombo = upperLetters + numbers;
        for (let i = 0; i < length; i++) {
            newResult += newCombo.charAt(Math.floor(Math.random() * newCombo.length))
            

        }
    }
    if (lowerLettersIsChecked == true && upperLettersisChecked == false && numberIsChecked == true) {
        newCombo = lowerLetters + numbers;
        for (let i = 0; i < length; i++) {
            newResult += newCombo.charAt(Math.floor(Math.random() * newCombo.length))
            

        }
    }
    if (lowerLettersIsChecked == true && upperLettersisChecked == true && numberIsChecked == true) {
        newCombo = lowerLetters + upperLetters + numbers;
        for (let i = 0; i < length; i++) {
            newResult += newCombo.charAt(Math.floor(Math.random() * newCombo.length))
            

        }
    }
        
        setResult(newResult);
        

    

  };

  return (
    <div>
      <Input onNewPassword={newPasswordGene}></Input>
      <p>{result}</p>
    </div>
  );
};

export default Passwordgene;
