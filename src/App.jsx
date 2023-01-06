import { useEffect, useState } from 'react'
import './index.css'
import checkWin from './utils';

function App() {

  // useEffect(() => {
  //   let initialOption = prompt("Qual jogador irá começar? [Digite 1 ou 2]");

  //   while(initialOption != "1" || initialOption != "2") {
  //     initialOption = prompt("Qual jogador irá começar? [Digite 1 ou 2]");
  //   }
  // });

  const [s1, setS1] = useState(null);
  const [s2, setS2] = useState(null);
  const [s3, setS3] = useState(null);
  const [s4, setS4] = useState(null);
  const [s5, setS5] = useState(null);
  const [s6, setS6] = useState(null);
  const [s7, setS7] = useState(null);
  const [s8, setS8] = useState(null);
  const [s9, setS9] = useState(null);

  const[player1, setPlayer1] = useState(true);
  const[player2, setPlayer2] = useState(false);

  const[squaresPlayer1, setSquaresPlayer1] = useState([]);
  const[squaresPlayer2, setSquaresPlayer2] = useState([]);


  useEffect(() => {
    if(squaresPlayer1.length >= 3 || squaresPlayer2.length >= 3) {
      if(checkWin(squaresPlayer1)) {
        alert("Jogador 1 ganhou!");
        clearAll();
      } else if(checkWin(squaresPlayer2)) {
        alert("Jogador 2 ganhou!");
        clearAll();
      } else if(squaresPlayer1.length === 5 && squaresPlayer2.length === 4) {
        alert("Deu velha!");
        clearAll();
      }
    } 
  }, [squaresPlayer1, squaresPlayer2]);

  function clearAll() {
    setTimeout(() => {
      setS1(null);
      setS2(null);
      setS3(null);
      setS4(null);
      setS5(null);
      setS6(null);
      setS7(null);
      setS8(null);
      setS9(null);
      setPlayer1(true);
      setPlayer2(false);
      setSquaresPlayer1([]);
      setSquaresPlayer2([]);
    }, 2000);
  }

  function invPlayer() {
    setPlayer1(!player1);
    setPlayer2(!player2);
  }

  function handleRegister(event) {
    let square = event.target.id;
    switch (square) {
      case "s1":
        if(player1 && !s1) {
          setS1("X"); 
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s1) {
          setS1("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
      case "s2":
        if(player1 && !s2) {
          setS2("X");
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s2) {
          setS2("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
      case "s3":
        if(player1 && !s3) {
          setS3("X");
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s3) {
          setS3("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
      case "s4":
        if(player1 && !s4) {
          setS4("X");
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s4) {
          setS4("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
      case "s5":
        if(player1 && !s5) {
          setS5("X");
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s5) {
          setS5("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
      case "s6":
        if(player1 && !s6) {
          setS6("X");
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s6) {
          setS6("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
      case "s7":
        if(player1 && !s7) {
          setS7("X");
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s7) {
          setS7("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
      case "s8":
        if(player1 && !s8) {
          setS8("X");
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s8) {
          setS8("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
      case "s9":
        if(player1 && !s9) {
          setS9("X");
          setSquaresPlayer1((prev) => [...prev, square]);
          invPlayer();
        } else if(player2 && !s9) {
          setS9("O");
          setSquaresPlayer2((prev) => [...prev, square]);
          invPlayer();
        }
        break;
    
      default:
        alert("Ops! Algo não deu certo...");
        break;
    }
  }

  return (
    <div className="App">
      <div className="row">
        <span onClick={handleRegister} id ="s1" className="container">{s1}</span>
        <span onClick={handleRegister} id ="s2" className="container">{s2}</span>
        <span onClick={handleRegister} id ="s3" className="container">{s3}</span>
      </div>
      <div className="row">
        <span onClick={handleRegister} id ="s4" className="container">{s4}</span>
        <span onClick={handleRegister} id ="s5" className="container">{s5}</span>
        <span onClick={handleRegister} id ="s6" className="container">{s6}</span>
      </div>
      <div className="row">
        <span onClick={handleRegister} id ="s7" className="container">{s7}</span>
        <span onClick={handleRegister} id ="s8" className="container">{s8}</span>
        <span onClick={handleRegister} id ="s9" className="container">{s9}</span>
      </div>
    </div>
  )
}

export default App
