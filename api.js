class WeatherAPI{
    constructor(){
        this.baseURL="https://api.openweathermap.org/data/2.5/weather";
        this.apikey="74dde49362107dc7cc94d62686134f95";
    }
   async getWeatherInfo(cityName){
        const response=await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apikey}&units=metric&lang=tr`)
        const data=await response.json()
        return data;
    }
}