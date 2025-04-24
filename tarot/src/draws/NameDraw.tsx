// tirage d'autant de cartes que de lettre dans le prénom
import {Key, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import absurd from "../data/absurd.json"
import {shuffle} from "./shuffle";
import './draw.scss';
import backCard from "../assets/Dos-tarots.png"

export function Cards() {
    const [card, setCard] = useState({});
    const [allCards, setAllCards] = useState<any[]>([]);
    const [shuffleIDS, setShuffleIDS] = useState<number[]>([])
    const [isFlipped, setIsFlipped] = useState(true)

    useEffect(() => {
        setShuffleIDS(shuffle())
    }, [])

    console.log("ids", shuffleIDS)

    return (<>
        <div className="btn-group" role="group" aria-label="cards">
            {shuffleIDS.map((card, index) =>
                (
                    <button key={index} onClick={(e) => {

                        console.log(card)
                    }}>
                       {isFlipped ? <img src={backCard} alt={"dos"}/> : card}


                    </button>
                )
            )}
        </div>
    </>)
}


function NameDraw() {
    const location = useLocation();
    const {tone, userName} = location.state

    useEffect(() => (console.log("tone", tone)))
    // useEffect(() => (shuffle(absurd)))

    return (
        <>
            <h1> Bienvenue </h1>
            <Cards></Cards>
        </>
    )
}

export default NameDraw;
