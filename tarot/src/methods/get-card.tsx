export default async function GetCard(tone: string, id: number): Promise<any> {

    try {
        const res = await fetch(`/data/${tone}.json`)

        if (!res.ok) throw new Error(`Error status: ${res.status}`)

        const data = await res.json()
        const values = Object.values(data)

        return values.find((el: any) => el.id === id)
    } catch (error) {
        console.error(`Error to get cards: ${error} `)
        return Promise.reject(error)
    }
}