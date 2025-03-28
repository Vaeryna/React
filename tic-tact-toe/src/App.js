import './App.css';
import {useEffect, useState} from "react";
import fox from './assets/renard.png';
import crow from './assets/corbeau.png';
import {WinModal} from "./WinModal";


export function Grille({winner, setWinner}) {
    const [player, setPlayer] = useState("P1")

    const rows = [
        [11, 12, 13],
        [21, 22, 23],
        [31, 32, 33]
    ]

    const [cases, setCases] = useState(
        {
            11: null, 12: null, 13: null, 21: null, 22: null, 23: null, 31: null, 32: null, 33: null
        }
    )

    const [isDraw, setDraw] = useState(false);


    function changePlayer() {
        if (player === "P1") {
            setPlayer("P2")
        }
        if (player === "P2") {
            setPlayer("P1")
        }
    }

    const winCombination = [
        [11, 12, 13], //ligne 1
        [21, 22, 23], //ligne 2
        [31, 32, 33], //ligne 3
        [11, 21, 31], //colonne 1
        [12, 22, 32], //colonne 2
        [13, 23, 33], //colonne 3
        [11, 22, 33], //diag 1
        [13, 22, 31] //diag 2
    ]

    function chooseWinner() {
        winCombination.forEach(winCombination => {
            const valeurs = winCombination.map(
                id => cases[id]
            )

            if (valeurs.every(val => val === "P1")) {
                console.log("P1 a gagné")
                setWinner("P1")

            }
            if (valeurs.every(val => val === "P2")) {
                console.log("P2 a gagné")
                setWinner("P2")
            }
        })
    }

    const noMoreMoves = Object.values(cases).every(val => val !== null);

    const handleClick = (player, casesID) => {
        const isCellEmpty = cases[casesID] === null;
        const hasEmptyCells = Object.values(cases).some(val => val === null);

        if (isCellEmpty && hasEmptyCells) {
            const newCases = {...cases, [casesID]: player}
            setCases(newCases)
            changePlayer()
        }
    }

    useEffect(() => {
        if (noMoreMoves && !winner) {
            setDraw(true)
        }
    }, [noMoreMoves, winner]);

    useEffect(() => {
        chooseWinner(winner)
    }, [cases]);

    function resetCases() {
        setCases({11: null, 12: null, 13: null, 21: null, 22: null, 23: null, 31: null, 32: null, 33: null})
        setPlayer("P1")
        setWinner(null)
        setDraw(false)
    }

    return (
        <>
            <table className={"table"}>
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellID) => (
                            <td key={cellID} id={cellID}
                                onClick={(e) => handleClick(player, e.currentTarget.id)}>
                                <div>
                                    {cases[cellID] === "P1" && <img src={fox} alt="P1"/>}
                                    {/*  équivalent : {cases[cellID] === "P1" ? <img src={fox} alt="P1"/> : null}     ==> signifie si P1 alors img et sinon nul    */}
                                    {cases[cellID] === "P2" && <img src={crow} alt="P2"/>}
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

            {isDraw && (
                <>
                    <h1> Match nul ! Voulez-vous rejouer ?</h1>
                    <button className={"yesButton"} onClick={resetCases}> Yes !</button>
                </>
            )}
        </>

    )

}


function App() {
    const [winner, setWinner] = useState(null)
    const [cases, setCases] = useState({
        11: null,
        12: null,
        13: null,
        21: null,
        22: null,
        23: null,
        31: null,
        32: null,
        33: null
    })
    const [player, setPlayer] = useState("P1")

    function resetCases() {
        setCases({11: null, 12: null, 13: null, 21: null, 22: null, 23: null, 31: null, 32: null, 33: null})
        setPlayer("P1")
        setWinner(null)
    }

    return (
        <div className={"body"}>
            <h1> Tic ... Tac... Toe ! 💣 </h1>
            {winner ? (
                <WinModal winner={winner} resetGame={resetCases}/>
            ) : (
                <Grille winner={winner} setWinner={setWinner}/>
            )}
        </div>
    );
}

export default App;
