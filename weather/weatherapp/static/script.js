const ApiKey="79490e8a54ee034a44416241fc295d01"
const apiurl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid="
const searchBox=document.getElementById("search1")
const searchBtn=document.getElementById("search2")
    const replay=await fetchasync function checkweather(cityname){
(apiurl + city + '&appid=${ApiKey}');
    var data=await replay.json()
    console.log(data)

}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value)
})

