import './App.css';


function App() {
    return (
        <h1> Tic ... Tac... Toe !</h1>
    );
}

let checked;
let img = require("./assets/red-cat.png");

export function Grille() {
    if (checked) {
        img = require("./assets/red-cat.png")
        console.log("checked", checked)
    }

    return (
        <table border="black 1px">
            <tbody>
            <tr>
                <td id={11}><img src={img} onClick={()=>console.log("plop")}/></td>
                <td id={12}></td>
                <td id={13}></td>
            </tr>
            <tr>
                <td id={21}></td>
                <td id={22}></td>
                <td id={23}></td>
            </tr>
            <tr>
                <td id={31}></td>
                <td id={32}></td>
                <td id={33}></td>
            </tr>
            </tbody>
        </table>
    )
}


export default App;
