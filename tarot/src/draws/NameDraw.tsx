// tirage d'autant de cartes que de lettre dans le prénom
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {shuffle} from "./shuffle";
import './draw.scss';
import getCard from "../methods/get-card"
import {TarotCard} from "../Data/TarotCard";


interface CardsProps {
    tone?: any
}

export function Cards({tone}: CardsProps) {
    const [card, setCard] = useState<TarotCard | null>(null);
    const [shuffleIDS, setShuffleIDS] = useState<number[]>([])
    const [cardImg, setCardImg] = useState<Record<number, string>>({})
    const backCard = "/assets/back-4.jpg"
    const [isFlipped, setIsFlipped] = useState<Array<number>>([])

    useEffect(() => {
        setShuffleIDS(shuffle())
    }, [])

    function flip(cardID: number) {
        setIsFlipped([...isFlipped, cardID])
    }

    console.log("shuffle ids", shuffleIDS)

    return (<>
        <div className="btn-group" role="group" aria-label="cards">
            {shuffleIDS.map((cardID, index) =>
                (
                    <button key={index} onClick={async () => {
                        const card: any = await getCard(tone, cardID)
                        flip(cardID)

                        if (card) {
                            setCard(card)
                            setCardImg(
                                prev => ({
                                    ...prev, [cardID]: `/assets/cards-${tone}/${cardID}.png`
                                })
                            );
                        }
                    }
                    }>
                        {isFlipped.includes(cardID) ? (<img src={cardImg[cardID]} alt="image"/>) :
                            <img src={backCard} alt="dos"/>
                        }
                    </button>
                )
            )}
        </div>
    </>)
}


function NameDraw() {
    const location = useLocation();
    const {tone, userName} = location.state

    return (
        <>
            <h1> Bienvenue </h1>
            <Cards tone={tone}></Cards>
        </>
    )
}

export default NameDraw;
