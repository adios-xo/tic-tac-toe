import React, { useState } from "react";

import Square from "./Square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));

    const [xTurn, setXTurn] = useState(true);

    const clickHandler = (index) => {
        if (state[index])
            return;

        const prevState = [...state];
        prevState[index] = xTurn ? "X" : "O";
        setState(prevState);
        setXTurn(!xTurn);
    };

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }

        return null;
    }

    const checkTie = () => {
        return state.every(index => index !== null);
    }

    const isWinner = checkWinner();
    const isTie = checkTie();

    return (
        <div className="board-container">
            {isWinner ? <>
                <h2>
                    {isWinner} Wins
                </h2>
                <br />
                <button onClick={() => setState(Array(9).fill(null))}>
                    play again
                </button>
            </> : isTie ? <>
                <h2>
                    It's a Tie
                </h2>
                <br />
                <button onClick={() => setState(Array(9).fill(null))}>
                    play again
                </button>
            </> : <>
                <h1>
                    Tic Tac Toe
                </h1>
                <h2>
                    {xTurn ? "X" : "O"}'s Turn
                </h2>
                <div className="board-row">
                    <Square onClick={() => clickHandler(0)} value={state[0]} />
                    <Square onClick={() => clickHandler(1)} value={state[1]} />
                    <Square onClick={() => clickHandler(2)} value={state[2]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => clickHandler(3)} value={state[3]} />
                    <Square onClick={() => clickHandler(4)} value={state[4]} />
                    <Square onClick={() => clickHandler(5)} value={state[5]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => clickHandler(6)} value={state[6]} />
                    <Square onClick={() => clickHandler(7)} value={state[7]} />
                    <Square onClick={() => clickHandler(8)} value={state[8]} />
                </div>
            </>}
        </div>
    );
}

export default Board;