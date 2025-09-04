import React, { useState } from "react";
import "./App.css";

export default function App() {
  // Armstrong states
  const [armNum, setArmNum] = useState("");
  const [armRes, setArmRes] = useState("");

  // Factorial states
  const [factNum, setFactNum] = useState("");
  const [factRes, setFactRes] = useState("");

  // Greatest states
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [greatest, setGreatest] = useState("");

  // Armstrong Function
  const checkArmstrong = () => {
    const n = parseInt(armNum);
    if (isNaN(n)) return setArmRes("Please enter a valid number");
    const digits = n.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
    setArmRes(sum === n ? `${n} is an Armstrong number` : `${n} is not an Armstrong number`);
  };

  // Factorial Function
  const calcFactorial = () => {
    const n = parseInt(factNum);
    if (isNaN(n) || n < 0) return setFactRes("Enter a non-negative number");
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    setFactRes(`Factorial of ${n} = ${f}`);
  };

  // Greatest of 3 Function
  const findGreatest = () => {
    const a = parseFloat(num1), b = parseFloat(num2), c = parseFloat(num3);
    if ([a, b, c].some(isNaN)) return setGreatest("Enter all numbers");
    setGreatest(`Greatest = ${Math.max(a, b, c)}`);
  };

  return (
    <div className="container">
      <h1>ReactJS Programs</h1>

      {/* 1. Natural Numbers */}
      <div className="card">
        <h2>1. First 10 Natural Numbers</h2>
        <p>{[...Array(10).keys()].map(n => n+1).join(", ")}</p>
      </div>

      {/* 2. Armstrong */}
      <div className="card">
        <h2>2. Armstrong Number Checker</h2>
        <input
          type="number"
          placeholder="Enter number"
          value={armNum}
          onChange={(e) => setArmNum(e.target.value)}
        />
        <button onClick={checkArmstrong}>Check</button>
        <p>{armRes}</p>
      </div>

      {/* 3. Factorial */}
      <div className="card">
        <h2>3. Factorial Calculator</h2>
        <input
          type="number"
          placeholder="Enter number"
          value={factNum}
          onChange={(e) => setFactNum(e.target.value)}
        />
        <button onClick={calcFactorial}>Calculate</button>
        <p>{factRes}</p>
      </div>

      {/* 4. Greatest of 3 */}
      <div className="card">
        <h2>4. Greatest of 3 Numbers</h2>
        <div className="row">
          <input type="number" placeholder="Num 1" value={num1} onChange={(e)=>setNum1(e.target.value)} />
          <input type="number" placeholder="Num 2" value={num2} onChange={(e)=>setNum2(e.target.value)} />
          <input type="number" placeholder="Num 3" value={num3} onChange={(e)=>setNum3(e.target.value)} />
        </div>
        <button onClick={findGreatest}>Find</button>
        <p>{greatest}</p>
      </div>
    </div>
  );
}
