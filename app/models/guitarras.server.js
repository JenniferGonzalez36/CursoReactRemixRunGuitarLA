export async function getGuitarras(){
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    return await response.json();
}