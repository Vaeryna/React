import {DrawResultProps} from "../Data/DrawResultProps";
import {useLocation, useNavigate} from "react-router-dom";


export function DrawResult({drawnCards, isFlipped}: DrawResultProps) {
    const navigate = useNavigate()
    const location = useLocation();
    const {tone, username, draw} = location.state


    function reset() {
        navigate(0)
    }

    return (
        <div className="draw-result text-center">
            <h1 > Voici votre tirage ...</h1>
            {drawnCards &&
                (
                    <div className="card-group" role="group" aria-label="cards">
                        {
                            isFlipped.map((id) => {
                                const card = drawnCards[id]

                                return card ?
                                    (<div className="card">
                                        <img key={id} src={`/assets/cards-${tone}/${card.id}.png`}
                                             className="card-img"
                                             alt={`selectedCard ${card.name}`} id={`${card.id}`}/>
                                    </div>)
                                    : null
                            })
                        }

                        {
                            isFlipped.map((id) => {
                                const card = drawnCards[id]

                                return card ?
                                    (<div>
                                        <p className="text-center"> {card.interpretation}</p>
                                    </div>)
                                    : null
                            })
                        }
                        <div/>

                    </div>

                )}

            <button className="btn btn-dark" onClick={() => reset()}> Retry</button>
        </div>

    )
}


