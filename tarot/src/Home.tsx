import React, {useState} from "react";
import styles from "./Home.module.scss"
import {useNavigate} from "react-router-dom";

function Home() {
    const [userName, setUserName] = useState("")
    const [drawType, setDrawType] = useState("")

    const navigate = useNavigate();



    const sendForm = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("userName") as HTMLInputElement)?.value;
        const draw = (form.elements.namedItem("drawType") as HTMLInputElement)?.value;

        if(name && draw) {
            navigate('/name-draw', {
                state: {
                    userName: name,
                    drawType: draw
                }
            })
        }
        console.log("username", name, draw)

    }


    return (
        <div className={styles.home}>
            <h1 style={{marginBottom: "50px"}} className="text-center"> Bienvenue dans les Arcanes !</h1>

            <form onSubmit={sendForm} className={styles.form}>
                <div className="mb-2">
                    <h2> Quel est ton nom ?</h2>
                    <input type="text" className="form-control w-50" id="userName"/>
                </div>
                <br/>
                <h2> Quel tirage désires-tu ? </h2>
                <div className="mb-3 form-check">
                    <input className="form-check-input" type="radio" name="drawType" id="firstname" value="firstname"/>
                    <label htmlFor="firstNameDraw" className="form-label"> Tirage au prénom </label>
                </div>
                <div className="mb-3 form-check">
                    <input type="radio" className="form-check-input" id="threeCardsDraw" name="drawType" value="3cards"/>
                    <label className="form-check-label" htmlFor="threeCardsDraw">Tirage à 3 cartes</label>
                </div>
                <button type="submit" className="btn btn-primary w-50">
                    Tirage
                </button>
            </form>

        </div>
    )
}


export default Home;