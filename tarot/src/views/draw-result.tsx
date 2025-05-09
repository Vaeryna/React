import {DrawResultProps} from "../Data/DrawResultProps";



export function DrawResult({drawnCards, tone, isFlipped}: DrawResultProps) {

    return (
        <div className={"draw-result"}>
            <h1 className="text-center"> Voici votre tirage ...</h1>
            {drawnCards &&
                (
                    <div className="btn-group"  role="group" aria-label="cards">
                        {
                            isFlipped.map((id) => {
                                const card = drawnCards[id]

                                return card ?
                                    (<div className="card">
                                        <img key={id} src={`/assets/cards-${tone}/${card.id}.png`} className="card-img"
                                             alt={`selectedCard ${card.name}`} id={`${card.id}`}/>
                                        <p className="card-text text-center"> {card.interpretation}</p>
                                    </div>)
                                    : null
                            })
                        } </div>


                )}
        </div>

    )
}


