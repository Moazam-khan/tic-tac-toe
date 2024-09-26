import React, { useState } from "react";
import light from "../assets/NewAssets/Game/light.png";
import { useEffect } from "react";
import { message } from "antd";
import up from "../assets/NewAssets/Game/up.png";
import left from "../assets/NewAssets/Game/left.png";
import bart from "../assets/NewAssets/Game/bart.png";
import tom from "../assets/NewAssets/Game/tom.png";
import X from "../assets/NewAssets/Game/X.png";
import O from "../assets/NewAssets/Game/O.png";

const GamePage: React.FC = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [timer, setTimer] = useState(10); // Single timer for both players
  const [winner, setWinner] = useState<string | null>(null);
 

  useEffect(() => {
    if (winner) return; // Stop timer if there's a winner

    const timerInterval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer, winner]);

  // Handle when timer reaches 0
  useEffect(() => {
    if (timer <= 0 && !winner) {
      handleTurnChange();
    }
  }, [timer, winner]);

  // Handle turn changes and reset the timer to 10 seconds
  const handleTurnChange = () => {
    setIsPlayerOneTurn(!isPlayerOneTurn);
    setTimer(10); // Reset timer
  };


  const handleClick = (index: number) => {
    if (board[index] || winner) return; // Prevent changing if already clicked or if there's a winner
    
    const newBoard = [...board];
    const xImage = X; // Replace with the actual path to the X image
    const oImage = O; // Replace with the actual path to the O image
    newBoard [index]  = isPlayerOneTurn ? 
         ( <img        
         style={{   
          display: "flex",
          width: "104px",
          height: "114px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexShrink: 0,
        }}
        src={xImage}
        alt="X"     />  ) : (   <img
        style={{
          display: "flex",
          width: "104px",
          height: "110px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexShrink: 0,
        }}
        src={oImage}
        alt="O"
      />
    );
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
        setWinner(isPlayerOneTurn ? "Player 1" : "Player 2");
        message.success(`${isPlayerOneTurn ? "Player 1" : "Player 2"} Wins!`);
        return;
      }
    }

    if (board.every(cell => cell !== null)) {
      setWinner("Draw");
      message.info("It's a draw!");
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerOneTurn(true);
    setTimer(10);
    setWinner(null);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
          }}
        >
          {/* Player 1 Block */}
          <div
            style={{
              display: 'flex',
              padding: '3px 9px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              fontFamily: 'Poppins',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: 'normal',
              textAlign: 'center',
              border: '1px solid white',
              background: 'rgba(23, 142, 85, 0.44)', // Semi-transparent green
              color: '#FFF',
            }}
          >
            {isPlayerOneTurn ? "Your Turn" : "Player 1"}
          </div>
  
          {/* Score Block */}
          <div
            style={{
              display: 'flex',
              padding: '3px 9px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              fontFamily: 'Poppins',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: 'normal',
              textAlign: 'center',
              width: '58px',
              background: 'rgba(23, 142, 85, 0.80)', // 80% opacity green
              color: '#FFF',
              border: 'none',
            }}
          >
            0-0
          </div>
  
          {/* Player 2 Block */}
          <div
            style={{
              display: 'flex',
              padding: '3px 9px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              fontFamily: 'Poppins',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: 'normal',
              textAlign: 'center',
              background: 'rgba(23, 142, 85, 0.44)', // 44% opacity green
              color: '#FFF',
              border: 'none',
            }}
          >
            {isPlayerOneTurn ? "Player 2" : "Your Turn"}
          </div>
  
          {/* Timer Block */}
          <div
            style={{
              display: 'flex',
              padding: '3px 9px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              fontFamily: 'Poppins',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: 'normal',
              textAlign: 'center',
              width: '58px',
              background: '#FFF', // White background for timer block
              border: 'none',
              color: '#10C283', // Green text color
            }}
          >
            {timer}s
          </div>
        </div>
      </div>
  
      <img src={up} style={{ marginBottom: "20px", marginTop: "20px" }} />
  
      {/* Game Board */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "16px",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "12px",
          borderRadius: "14px",
          border: "3px dashed #FFF",
          background: "rgba(255, 255, 255, 0.01)",
          backdropFilter: "blur(10.5px)",
          justifyContent: "center",
          maxWidth: "610px",
          position: "relative",
        }}
      >
        <img
          src={left}
          style={{
            position: "absolute",
            top: "40%",
            left: "-120px",
            transform: "translateY(-50%)",
          }}
        />
  
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              display: "flex",
              width: "180px",
              height: "180px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "10px",
              background:
                index % 2 === 0
                  ? "rgba(23, 142, 85, 0.80)"
                  : "rgba(23, 142, 85, 0.50)",
            }}
          >
            {value || (
              <img
                src={light}
                alt="placeholder"
                style={{ width: "104px", height: "114px" }}
              />
            )}
          </div>
        ))}
      </div>
  
      {/* Winner or Next Player */}
      <div style={{ marginTop: "20px" }}>
        {winner ? (
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              color: "#FFF",
              fontWeight: 600,
            }}
          >
            {`Winner: ${winner}`}
          </p>
        ) : (
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              color: "#FFF",
              fontWeight: 600,
            }}
          >
            {`Next Player: ${isPlayerOneTurn ? "Player 1 (X)" : "Player 2 (O)"}`}
          </p>
        )}
      </div>
  
      {/* Reset and Play Again Buttons */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
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
          Reset
        </button>
        <button
          onClick={resetGame} // Play again uses the same reset function
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
          Play Again
        </button>
      </div>
    </div>
  );
  
};

export default GamePage;
