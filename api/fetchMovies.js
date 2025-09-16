export async function GET(request) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const type = url.searchParams.get("type");

    let omdbUrl = "";

    if (type === "detail") {
        omdbUrl = `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${q}&plot=full`;
    } else {
        omdbUrl = `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${q}&type=movie`;
    }

    const omdbRes = await fetch(omdbUrl);
    const data = await omdbRes.json();

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "content-type": "application/json" },
    });
}
