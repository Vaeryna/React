import {EndDrawModalProps} from "../Data/EndDrawModalProps";
import "../scss/modal.scss"


export function EndDrawModal({drawnCards, tone, isFlipped}: EndDrawModalProps) {

    return (
        <>
            <h1 className="text-center"> Voici votre tirage ...</h1>
            {drawnCards &&
                (<div className="btn-group" id="card-group" role="group" aria-label="cards">
                    {
                        isFlipped.map((id) => {
                            const card = drawnCards[id]

                            return card ?
                                <img key={id} src={`/assets/cards-${tone}/${card.id}.png`} className="card-img"
                                     alt={`selectedCard ${card.name}`} id={`${card.id}`}/>
                                : null
                        })} </div>)}
        </>

    )
}

