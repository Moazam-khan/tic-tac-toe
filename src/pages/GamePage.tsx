








import React, { useState, useEffect } from "react";
import light from "../assets/NewAssets/Game/light.png";
import { message } from "antd";
import up from "../assets/NewAssets/Game/up.png";
import left from "../assets/NewAssets/Game/left.png";
import X from "../assets/NewAssets/Game/X.png";
import O from "../assets/NewAssets/Game/O.png";
import bart from "../assets/NewAssets/Game/bart.png";
import tom from "../assets/NewAssets/Game/tom.png";
import useBreakpoint from "@/hooks/useBreakpoint";


const GamePage: React.FC = () => {
  
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [timer, setTimer] = useState(10);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningStreak, setWinningStreak] = useState({ playerOne: 0, playerTwo: 0 });

  useEffect(() => {
    if (winner) return;

    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer, winner]);

  useEffect(() => {
    if (timer <= 0 && !winner) {
      handleTurnChange();
    }
  }, [timer, winner]);

  const handleTurnChange = () => {
    setIsPlayerOneTurn(!isPlayerOneTurn);
    setTimer(10);
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    // Store "X" or "O" instead of images
    newBoard[index] = isPlayerOneTurn ? "X" : "O";
    setBoard(newBoard);
    checkWinner(newBoard);
    handleTurnChange();
  };

  const checkWinner = (board: Array<string | null>) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        const currentPlayer = isPlayerOneTurn ? "Player 1" : "Player 2";
        setWinner(currentPlayer);
        message.success(`${currentPlayer} Wins!`);
        
        // Update winning streak
        if (currentPlayer === "Player 1") {
          setWinningStreak((prevStreak) => ({
            ...prevStreak,
            playerOne: prevStreak.playerOne + 1,
          }));
        } else {
          setWinningStreak((prevStreak) => ({
            ...prevStreak,
            playerTwo: prevStreak.playerTwo + 1,
          }));
        }
        return;
      }
    }

    if (board.every((cell) => cell !== null)) {
      setWinner("Draw");
      message.info("It's a draw!");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerOneTurn(true);
    setTimer(10);
    setWinner(null);
  };
  const screens = useBreakpoint();
  console.log(screens.xs)
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center",padding:screens.xs ? "8px ":"none" }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', alignSelf: 'stretch',  }}>
          <div style={{ display: 'flex', padding: '3px 9px', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '600', lineHeight: 'normal', textAlign: 'center', border: isPlayerOneTurn ? '1px solid white' : 'none', background: 'rgba(23, 142, 85, 0.44)', color: '#FFF' }}>
            P1
          </div>
         

          <div style={{ display: 'flex', padding: '3px 9px', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '600', lineHeight: 'normal', textAlign: 'center', width: '58px', background: 'rgba(23, 142, 85, 0.80)', color: '#FFF', border: 'none' }}>
            {`${winningStreak.playerOne}-${winningStreak.playerTwo}`}
          </div>

          <div style={{ display: 'flex', padding: '3px 9px', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '600', lineHeight: 'normal', textAlign: 'center', background: 'rgba(23, 142, 85, 0.44)', color: '#FFF', border: !isPlayerOneTurn ? '1px solid white' : 'none' }}>
       P2
          </div>

          <div style={{ display: 'flex', padding: '3px 9px', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', fontFamily: 'Poppins', fontSize: '18px', fontWeight: '600', lineHeight: 'normal', textAlign: 'center', width: '58px', background: '#FFF', border: 'none', color: '#10C283' }}>
            {timer}s
          </div>
        </div>
      </div>

      <img src={up} style={{ marginBottom: screens.xs ? "6px" : "20px", width: screens.xs ?   "65%":"100%" ,marginTop: screens.xs ?   "6px":"none"}} />

      <div style={{ display: "flex", flexWrap: "wrap", padding: "16px", flexDirection: "row", alignItems: "flex-start", gap: "12px", borderRadius: "14px", border: "3px dashed #FFF", background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(10.5px)", justifyContent: "center", maxWidth: screens.xs ? "375px" : "610px", position: "relative" }}>
        {!screens.xs && (
 <img src={left} style={{ position: "absolute", top: "40%", left: "-120px", transform: "translateY(-50%)" }} />
        )}

        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              display: "flex",
              width:screens.xs ? "80px" : "180px",
              height:screens.xs ? "80px" : "180px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap:screens.xs ? "5px": "10px",
              borderRadius: "10px",
              background: index % 2 === 0 ? "rgba(23, 142, 85, 0.80)" : "rgba(23, 142, 85, 0.50)",
            
            }}
          >
            {value === "X" ? (
              <img src={X} alt="X" style={{ width:screens.xs ? "40px" : "104px", height:screens.xs ? "40px" : "114px" }} />
            ) : value === "O" ? (
              <img src={O} alt="O" style={{ width:screens.xs ? "40px" : "104px", height:screens.xs ? "40px" : "110px" }} />
            ) : (
              <img src={light} alt="placeholder" style={{ width:screens.xs ? "80px" : "180px", height:screens.xs ? "100px" : "180px" }} />
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        {winner ? (
          <p style={{ fontFamily: "Poppins", fontSize: "20px", color: "#FFF", fontWeight: 600 }}>
            {`Winner: ${winner}`}
          </p>
        ) : (
          <p style={{ fontFamily: "Poppins", fontSize: "20px", color: "#FFF", fontWeight: 600 }}>
            {`Next Player: ${isPlayerOneTurn ? "Player 1 (X)" : "Player 2 (O)"}`}
          </p>
        )}
      </div>
    {
    <>
       {!screens.xs && (
       <>
       <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              position: "absolute",
              top: "50%",
              left: "15px",
              transform: "translateY(-50%)",
              backdropFilter: "blur(6.5px)",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Player 1
            </p>
            <div
              style={{
                borderRadius: "26px",
                border: isPlayerOneTurn ? '1px solid white' : 'none',
                background: "rgba(4, 128, 86, 0.54)",
                display: "flex",
                width: "170px",
                padding: "30px 20px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              <img src={bart} alt="Player 1" />
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  Player 1
                </p>
                <p
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  Bart Ermens
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              backdropFilter: "blur(6.5px)",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Player 2
            </p>
            <div
              style={{
                borderRadius: "26px",
                background: "rgba(4, 128, 86, 0.54)",
                display: "flex",
                width: "170px",
                padding: "30px 20px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: !isPlayerOneTurn ? '1px solid white' : 'none',
                gap: "16px",
              }}
            >
              <img src={tom} alt="Player 2" />
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  Player 2
                </p>
                <p
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  Tom Rath
                </p>
              </div>
            </div>
          </div>
          </>
          )}
          </>
          }

      <div style={{ display: "flex", gap: "20px", marginTop:screens.xs ? "0px" : "30px" }}>
        <button
          onClick={resetGame}
          style={{
            padding: "10px 20px",
            fontFamily: "Poppins",
            fontSize: "16px",
            backgroundColor: "#178E55",
            color: "#FFF",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default GamePage;
