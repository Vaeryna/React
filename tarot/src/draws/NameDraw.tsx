// tirage d'autant de cartes que de lettre dans le prénom
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {shuffle} from "./shuffle";
import './draw.scss';
import getCard from "../methods/get-card"
import {TarotCard} from "../Data/TarotCard";


function NameDraw() {
    const location = useLocation();
    const {tone, username} = location.state

    const [card, setCard] = useState<TarotCard | null>(null);
    const [shuffleIDS, setShuffleIDS] = useState<number[]>([])
    const [cardImg, setCardImg] = useState<Record<number, string>>({})
    const backCard = "/assets/back-4.jpg"
    const [isFlipped, setIsFlipped] = useState<Array<number>>([])
    const letters: Array<string> = Array.from(username)
    const [selectedCards, setSelectedCards] = useState<Record<number, TarotCard>>({})


    useEffect(() => {
        setShuffleIDS(shuffle())
    }, [])

    function flip(cardID: number, card: TarotCard) {
        setIsFlipped([...isFlipped, cardID])
        setSelectedCards(prev => ({...prev, [cardID]: card}))
    }


    // console.log("shuffle ids", shuffleIDS)
    console.log("isFlipped", isFlipped)
    console.log('isSelected', selectedCards)

    return (<>
        <h1> {username}</h1>
        {selectedCards &&
            (<div className="btn-group" id="card-group" role="group" aria-label="cards">
                {
                    isFlipped.map((id) => {
                        const card = selectedCards[id]

                        return card ? (
                            <div key={id} className="card">
                                <img src={`/assets/cards-${tone}/${card.id}.png`} className="card-img-top"
                                     alt={`selectedCard ${"car"}`}/>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {card.name}
                                    </h5>
                                    <p className="card-text">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ) : null
                    })}
            </div>)}
        <br/>

        <div className="btn-group" role="group" aria-label="cards">
            {shuffleIDS.map((cardID, index) =>
                (
                    <button key={index} onClick={async () => {
                        const card: any = await getCard(tone, cardID)
                        flip(cardID, card)

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

export default NameDraw;
