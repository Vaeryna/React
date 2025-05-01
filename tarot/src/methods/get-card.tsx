export default async function GetCard(tone: string, id: number) {
    const res = await fetch(`/data/${tone}.json`)
    const data = await res.json()
    const values = Object.values(data)

    return values.find((el: any) => el.id === id)
}