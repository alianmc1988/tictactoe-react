import React, { useEffect, useState } from "react";
// import from helpers
import { winningCheck, drawCheck } from "../helpers/game_logic";
// import Prompt_Component
import Prompt_component from "./Prompt_component";
// CSS
import "./Board_component.css";

// Initial state of the App
const initialPlayerState = {
  player1moves: [],
  player2moves: [],
  winFlag: false,
  winningCoordenates: null,
  turnFlag: true,
  drawFlag: false,
};

const Board_component = () => {
  const [game, setGame] = useState(initialPlayerState);

  useEffect(() => {
    winningStyles(game.winningCoordenates);
    // Changing players turn
    const player = !game.turnFlag ? game.player1moves : game.player2moves;

    if (player.length > 2) {
      // it will only enter to check if somebody wins when the amount of moves is >=3
      if (winningCheck(player).status) {
        const { coordenates } = winningCheck(player);
        // after check if return true, it will update the state
        setGame({
          ...game,
          player1moves: [],
          player2moves: [],
          winningCoordenates: [...coordenates],
          winFlag: true,
        });
        return;
      }
      if (drawCheck(game.player1moves)) {
        // Check if there is a draw game and update the state
        setGame({
          ...game,
          player1moves: [],
          player2moves: [],
          drawFlag: true,
        });
        return;
      }
    }
  }, [game]);

  // HandleClick
  const handleSquareClick = (e) => {
    // Markin the UI inputs according to the turnFlag and disable it
    game.turnFlag ? (e.target.value = "X") : (e.target.value = "O");
    e.target.disabled = true;
    if (game.turnFlag) {
      setGame({
        ...game,
        player1moves: [...game.player1moves, e.target.name],
        turnFlag: !game.turnFlag,
      });
    } else {
      setGame({
        ...game,
        player2moves: [...game.player2moves, e.target.name],
        turnFlag: !game.turnFlag,
      });
    }
    return;
  };
  // Set Initial State App and UI
  const returnInitialState = () => {
    setGame(initialPlayerState);
    const a = document.getElementsByTagName("input");
    for (const i of a) {
      i.value = "";
      i.disabled = false;
    }
  };
  return (
    <>
      <div className="game-container">
        {game.winFlag ? (
          <Prompt_component
            resetGame={returnInitialState}
            whoWon={!game.turnFlag ? "Player 1 won" : "Player 2 won"}
          />
        ) : (
          game.drawFlag && (
            <Prompt_component whoWon={"Tie"} resetGame={returnInitialState} />
          )
        )}
        <div style={{ padding: "2rem", text: "center" }}>
          <h3 style={{ color: "white", textAlign: "center" }}>Tic Tac Toe</h3>
          {/* First Row */}
          <div className="first-row-component row">
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={"btn-square"}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="A0"
              id="A0"
            />
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={`btn-square`}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="A1"
              id="A1"
            />
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={`btn-square`}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="A2"
              id="A2"
            />
          </div>
          {/* Second Row */}
          <div className="second-row-component row">
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={`btn-square`}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="B0"
              id="B0"
            />
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={`btn-square`}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="B1"
              id="B1"
            />
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={`btn-square`}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="B2"
              id="B2"
            />
          </div>
          {/* third Row */}
          <div className="third-row-component row">
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={`btn-square`}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="C0"
              id="C0"
            />
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={`btn-square`}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="C1"
              id="C1"
            />
            <input
              style={game.drawFlag ? { borderColor: "red" } : {}}
              className={`btn-square`}
              type="button"
              onClick={(e) => handleSquareClick(e)}
              name="C2"
              id="C2"
            />
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Board_component;

// Conditional Styles
// Winning styles
const winningStyles = (dataCoordenates) => {
  const tags = [...document.getElementsByTagName("input")];
  if (dataCoordenates) {
    for (const tag of tags) {
      for (const data of dataCoordenates[0]) {
        if (tag.name === data) {
          tag.className = "btn-square btn-winner";
        }
      }
    }
  } else {
    for (const tag of tags) {
      tag.className = "btn-square";
    }
  }
};
