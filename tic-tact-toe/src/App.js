import './App.css';
import {useState} from "react";
import fox from './assets/renard.png';
import crow from './assets/corbeau.png';

function App() {
    return (
        <h1> Tic ... Tac... Toe ! 💣 </h1>
    );
}

export function Grille() {
    const [img, setImg] = useState(null)
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

    function changePlayer() {
        if (player === "P1") {
            setPlayer("P2")
        }
        if (player === "P2") {
            setPlayer("P1")
        }
    }

    const handleClick = (player, casesID) => {
        const newCases = {...cases, [casesID]: player}
        setCases(newCases);
        changePlayer()
    }

    return (
        <table border="black 1px">
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
    )
}

export default App;
