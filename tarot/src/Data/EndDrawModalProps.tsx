import {TarotCard} from "./TarotCard";



export interface EndDrawModalProps {
    drawnCards: Record<number, TarotCard>,
    tone: string,
    isFlipped: Array<number>
}