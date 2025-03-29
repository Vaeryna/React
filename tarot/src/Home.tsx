import React, {useState} from "react";

function Home() {
    const [userName, setUserName] = useState("")

    const sendForm = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("username", userName)
    }


    return (
        <>
            <h1> Bienvenue dans les Arcanes !</h1>
            <form onSubmit={sendForm}>
                <label htmlFor={"name"}> Quel est ton nom ? <input id={"name"} type="text" onChange={(e) => setUserName(e.target.value)} value={userName}/></label>


                <label htmlFor={"tirage"}> Quel tirage désires-tu ? <select id={"tirage"}>
                    {/*<radio value={"firstname"}> Tirage au prénom ?</radio>*/}
                    {/*<radio value={"threeCards"}> Tirage en 3 cartes ?</radio>*/}
                </select></label>

            </form>
        </>
    )
}


export default Home;