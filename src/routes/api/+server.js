import { json } from "@sveltejs/kit";

export async function GET() {
    const response = await fetch('https://api.yomomma.info/');

    const data = await response.json();
    
    return json(data);
}