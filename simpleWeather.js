const apiUrl = "http://api.weatherapi.com/v1/current.json";
const apiKey = "7b24dbb9d8a34787ad7110801231010";
const queryLoc = "Jakarta";

const requestUrl = apiUrl + "?key=" + apiKey + "&q=" + queryLoc;

// fetch data from API
fetch(requestUrl)
    .then(response => {

        if(response.ok)
            return response.json();

        throw new Error("network response not ok");

    })
    .then(data =>{

        // extract relevant data
        const cityName = data.location.name;
        const cityRegion = data.location.region;
        const cityCountry = data.location.country;

        const lastUpdated = data.current.last_updated;
        const tempC = data.current.temp_c;
        const currCondition = data.current.condition.text;

        console.log(`City: ${cityName}`);
        console.log(`Region: ${cityRegion}`);
        console.log(`Country: ${cityCountry}`);
        console.log(`Last updated: ${lastUpdated}`);
        console.log(`Current Temperature: ${tempC} Centigrade`);
        console.log(`Current Condition: ${currCondition}`);

    })
    .catch(error =>{

        console.error("Fetch error", error);

    })