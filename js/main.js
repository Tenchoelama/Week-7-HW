



const getData = async (city) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6550584c95ce3ea26b141ff52561dcd`)
    return response.data
}



const form = document.querySelector('#search_city')

form.addEventListener('submit', (search) => {
    search.preventDefault()
    city = search.target[0].value
})

let create_list = (city, high, low, wind, humidity) => {

  const FHigh = Math.round((high - 273.15) * 9/5 + 32);
  const FLow = Math.round((low - 273.15) * 9/5 + 32);
    
    const html = `
    <tr>
    <td>City</td>
  </tr>
  <tr>
    <td>${city}</td>
  </tr>
  <tr>
    <td>High</td>
  </tr>
  <tr>
    <td>${FHigh} F</td>
  </tr>
  <tr>
    <td>Low</td>
  </tr>
  <tr>
    <td>${FLow} F</td>
  </tr>
  <tr>
    <td>Wind Speed</td>
  </tr>
  <tr>
    <td>${wind} mph</td>
  </tr>
  <tr>
    <td>Humidity</td>
  </tr>
  <tr>
    <td>${humidity} %</td>
  </tr>
`;

        document.querySelector('tbody').insertAdjacentHTML('beforeend', html);
}


const load_data = async () => {
    
    document.querySelector('tbody').innerHTML = ''
    const x = await getData(city);
        create_list(
            city,
            x.main.temp_max,
            x.main.temp_min,
            x.wind.speed,
            x.main.humidity
    );
    
 }

 
