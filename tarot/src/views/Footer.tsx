import {CSSProperties} from "react";

const styleImg: CSSProperties = {
    borderRadius: "50%",
    width: "5vh"
}

const styleFooter: CSSProperties = {
    fontFamily: "font-mono text-xs",
    fontSize: "small",
    display: "flex",
    flexDirection: "row",
    paddingTop: "20%"
}


function Footer() {
    return (
        <footer style={styleFooter}>
            <div className="container-fluid mb-3">
                <p> Toutes les images et prédictions ont été générées par Intelligence Artificielle (Gencraft et
                    ChatGPT)</p>
                <p> Hebergeur : Vercel, San Francisco (États-Unis) </p>
            </div>
            <div className="container-fluid mb-3">
                <p> Ce site ne collecte ni ne stocke aucune données personnelle. Aucun coookie n'est déposé </p>
                <p> Les tirages sont purement ludiques, ils n'ont aucune valeur prédictive ou juridique </p>
            </div>

            <div className="container-fluid mb-3">
                <p>
                    <img src="/assets/Frekinor.png" style={styleImg} alt="Frekinor logo"/> Frekinor </p>
                <p> ©2025 Arcanomancie. Tous droits réservés</p>
            </div>


        </footer>
    )
}

export default Footer;

