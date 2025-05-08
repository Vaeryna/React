import React, {useState} from "react";
import styles from "./Home.module.scss"
import {useNavigate} from "react-router-dom";

function Home() {
    const [userName, setUserName] = useState("")
    const [drawType, setDrawType] = useState("")
    const [showButton, setShowButton] = useState(true)
    const [selectedTone, setSelectedTone] = useState<string | null>(null)
    const [selectedDraw, setSelectedDraw] = useState<string | null>(null)
    const [selectedName, setSelectedName] = useState<string | null>(null)

    const navigate = useNavigate();


    const sendForm = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("userName") as HTMLInputElement)?.value;
        const draw = (form.elements.namedItem("drawType") as HTMLInputElement)?.value;
        const tone = (form.elements.namedItem("toneType") as HTMLInputElement)?.value;

        if (name) {
            if (draw === "3cards") {
                navigate('/3-draw', {
                    state: {
                        username: name,
                        tone: tone
                    }
                })
            }
            if (draw === "firstname") {
                navigate('/name-draw', {
                    state: {
                        username: name,
                        tone: tone
                    }
                })
            }
        }
        console.log("username", name, "draw", draw, "tone",  tone)

    }


    return (
        <div className={styles.home}>
            <h1 style={{marginBottom: "50px"}} className="text-center"> Bienvenue dans les Arcanes !</h1>

            <form onSubmit={sendForm} className={styles.form}>
                <div className="mb-2">
                    <h2> Quel est ton nom ?</h2>
                    <input type="text" className="form-control w-50" id="userName"
                           onChange={(e) => setSelectedName(e.target.value)}/>
                </div>
                <br/>
                <h2> Quel tirage désires-tu ? </h2>
                <div className="mb-3 form-check">
                    <input className="form-check-input" type="radio" name="drawType" id="firstname"
                           value="firstname" onChange={(e) => setSelectedDraw(e.target.value)}/>
                    <label htmlFor="firstname" className={styles.formCheckLabel}> Tirage au prénom </label>
                </div>
                <div className="mb-3 form-check">
                    <input type="radio" className="form-check-input" id="threeCardsDraw" name="drawType"
                           value="3cards"
                           onChange={(e) => setSelectedDraw(e.target.value)}/>
                    <label className={styles.formCheckLabel} htmlFor="threeCardsDraw">Tirage à 3 cartes</label>
                </div>

                {showButton && (
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#toggleTone"
                            className="btn btn-primary w-50" onClick={() => setShowButton(false)}
                            disabled={!selectedDraw || !selectedName}>
                        Tirage
                    </button>

                )}


                <div className="collapse" id="toggleTone" aria-expanded="false" aria-controls="toggleTone">
                    <h2> Un choix de tirage ? </h2>
                    <div className="mb-3 form-check">
                        <input className="form-check-input" type="radio" name="toneType" id="absurd" value="absurd"
                               onChange={(e) => setSelectedTone(e.target.value)}/>
                        <label htmlFor="absurd" className="form-label"> Absurde</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input className="form-check-input" type="radio" name="toneType" id="cuteTrash"
                               value="cuteTrash"
                               onChange={(e) => setSelectedTone(e.target.value)}/>
                        <label htmlFor="cuteTrash" className={styles.formCheckLabel}> Mignon </label>
                    </div>
                    <div className="mb-3 form-check">
                        <input className="form-check-input" type="radio" name="toneType" id="confusing"
                               value="confusing" onChange={(e) => setSelectedTone(e.target.value)}/>
                        <label htmlFor="confusing" className={styles.formCheckLabel}> Confus </label>
                    </div>

                    <div className="mb-3 form-check">
                        <input className="form-check-input" type="radio" name="toneType" id="random"
                               value="random" onChange={(e) => setSelectedTone(e.target.value)}/>
                        <label htmlFor="random" className={styles.formCheckLabel}> Aléatoire </label>
                    </div>


                    <button type="submit" className="btn btn-primary w-50" disabled={!selectedTone}>
                        Tirage
                    </button>

                </div>
            </form>
        </div>
    )
}


export default Home;