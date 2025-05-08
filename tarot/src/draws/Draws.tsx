// tirage d'autant de cartes que de lettre dans le prénom
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {shuffle} from "../methods/shuffle";
import './draw.scss';
import getCard from "../methods/get-card"
import {TarotCard} from "../Data/TarotCard";


function Draws() {
    const location = useLocation();
    const {tone, username, draw} = location.state

    const [card, setCard] = useState<TarotCard | null>(null);
    const [shuffleIDS, setShuffleIDS] = useState<number[]>([])
    const [cardImg, setCardImg] = useState<Record<number, string>>({})
    const backCard = "/assets/back-4.jpg"
    const [isFlipped, setIsFlipped] = useState<Array<number>>([])
    const letters: Array<string> = Array.from(username)
    const [selectedCards, setSelectedCards] = useState<Record<number, TarotCard>>({})
    const [lastCard, setLastCard] = useState<TarotCard>()


    useEffect(() => {
        setShuffleIDS(shuffle())
    }, [])

    function flip(cardID: number, card: TarotCard) {
        if (draw === "firstname" && isFlipped.length < letters.length && !isFlipped.includes(cardID)) {
            setIsFlipped([...isFlipped, cardID])
            setSelectedCards(prev => ({...prev, [cardID]: card}))
            setLastCard(card)
        }
        if (draw === "3cards" && isFlipped.length < 3 && !isFlipped.includes(cardID)) {
            setIsFlipped([...isFlipped, cardID])
            setSelectedCards(prev => ({...prev, [cardID]: card}))
            setLastCard(card)
        }
    }

    return (<>
        <h1> {username}</h1>
        {selectedCards &&
            (<div className="btn-group" id="card-group" role="group" aria-label="cards">
                {
                    isFlipped.map((id) => {
                        const card = selectedCards[id]

                        return card ?
                            <img src={`/assets/cards-${tone}/${card.id}.png`} className="card-img-top"
                                 alt={`selectedCard ${card.name}`} id={`${card.id}`}/>
                            : null
                    })}
            </div>)}

        <br/>

        {selectedCards && lastCard &&
            (<div className="card text-center" id="last-card" role="group" aria-label="cards">
                <img src={`/assets/cards-${tone}/${lastCard.id}.png`} className="card-img"
                     alt={`selectedCard ${lastCard.name}`} id={`${lastCard.id}`}/>
                <div className="card-body">
                    <h5 className="card-title">{lastCard.name}</h5>
                    { lastCard.color &&
                        (<h6> {lastCard.color} - {lastCard.element}</h6>)
                    }
                    <p className="card-text"> {lastCard.interpretation}</p>
                </div>
            </div>)}
        <br/>

        {/*<div class="card">
    <img src="..." class="card-img-top" alt="...">
    */}

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

export default Draws;
