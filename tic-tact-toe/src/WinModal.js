import style from "./WinModal.module.scss"
import cheese from "./assets/fromage.png"
import fox from "./assets/renard.png"
import crow from "./assets/corbeau.png"

export function WinModal(winner) {


    return (
        <div>
            <div className={style.modal}>
                <div id={"P1"} className={style.player}>
                    <img src={fox}/>
                </div>

                <div id={"trophy"} className={`${style.trophy} ${winner === "P1" ? style.toP1 : style.toP2}`}>
                    <img src={cheese}/>
                </div>

                <div id={"P2"} className={style.player}>
                    <img src={crow}/>
                </div>
            </div>


           <p className={"texte"}> Voulez-vous rejouer ? </p>
            <div className={style.replay}>

                <button> Oui ! </button>
                <button> Nope</button>
            </div>
        </div>

    )
}

