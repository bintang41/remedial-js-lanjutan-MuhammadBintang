async function getStarshipModelByCharacterId(id) {

    const peopleResponse = await fetch ('https://swapi.dev/api/people/' + id);
    const peopleData = await peopleResponse.json();

    const starshipUrls = peopleData.starships;

    const result = [];

    for (i = 0; i < starshipUrls.length; i++){
    const starshipsResponse = await fetch (starshipUrls[i]);
    const strashipData = await starshipsResponse.json();

    result.push(strashipData.model);
    }

    return result;
}

getStarshipModelByCharacterId(1)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
