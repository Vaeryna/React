import React, {useState} from "react";
import styles from "./scss/Home.module.scss"
import {useNavigate} from "react-router-dom";
import {ToneData} from "./Data/Tone";
import {DrawData, DrawType} from "./Data/DrawType";

function Home() {
    const [showButton, setShowButton] = useState(true)
    const [selectedTone, setSelectedTone] = useState<string | null>(null)
    const [selectedDraw, setSelectedDraw] = useState<string | null>(null)
    const [selectedName, setSelectedName] = useState<string | null>(null)

    const navigate = useNavigate();
    const toneData = Object.values(ToneData).map(({name, vf}) => name)


    const sendForm = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("userName") as HTMLInputElement)?.value;
        const draw = (form.elements.namedItem("drawType") as HTMLInputElement)?.value;
        let tone = (form.elements.namedItem("toneType") as HTMLInputElement)?.value;

        if (name) {
            if (tone === "random") {
                tone = (toneData[(Math.random() * toneData.length) | 0])
            }

            navigate('/draws', {
                state: {
                    username: name,
                    tone: tone,
                    draw: draw,
                }
            })
        }
        console.log("username", name, "draw", draw, "tone", tone)
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

                {DrawType && (
                    Object.values(DrawData).map(({name, vf}) =>
                        <div className="mb-3 form-check" key={name}>
                            <input className="form-check-input" type="radio" name="drawType" id={name}
                                   value="firstname" onChange={(e) => setSelectedDraw(e.target.value)}/>
                            <label htmlFor="firstname" className={styles.formCheckLabel}> {vf} </label>
                        </div>
                    )
                )
                }


                {showButton && (
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#toggleTone"
                            className="btn btn-dark w-50" onClick={() => setShowButton(false)}
                            disabled={!selectedDraw || !selectedName}>
                        Tirage
                    </button>

                )}


                <div className="collapse" id="toggleTone" aria-expanded="false" aria-controls="toggleTone">
                    <h2> Un choix de tirage ? </h2>

                    {ToneData &&
                        (<>
                            {Object.values(ToneData).map(({name, vf}) => {
                                return ToneData ?
                                    (<div className="mb-3 form-check" key={name}>
                                        <input className="form-check-input" type="radio" name="toneType"

                                               id={name}
                                               value={name}
                                               onChange={(e) => setSelectedTone(e.target.value)}/>
                                        <label htmlFor="absurd" className={styles.formCheckLabel}> {vf}</label>
                                    </div>) : null

                            })}
                        </>)
                    }

                    <div className="mb-3 form-check">
                        <input className="form-check-input" type="radio" name="toneType" id="random"
                               value="random" onChange={(e) => setSelectedTone(e.target.value)}/>
                        <label htmlFor="random" className={styles.formCheckLabel}> Aléatoire </label>
                    </div>


                    <button type="submit" className="btn btn-dark w-50" disabled={!selectedTone}>
                        Tirage
                    </button>

                </div>
            </form>
        </div>
    )
}


export default Home;