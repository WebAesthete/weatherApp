const searcInput=document.querySelector(".searhInput")
const cityname=document.querySelector(".cityname")
const degree=document.querySelector(".degree");
const desc=document.querySelector(".desc")

searcInput.addEventListener("keypress",findWeatherInfo);


const WeatherApi=new WeatherAPI();
function findWeatherInfo(e){
if(e.keyCode=='13'){
    const cityname=searcInput.value.trim();
    WeatherApi.getWeatherInfo(cityname)
    .then((data)=>{
     if(data.message=="city not found"){
        alert("şehir bulunamadı")
        searcInput.value="";
     }else{
        display(data)
     }
      
       
    })
    
    .catch((err)=>console.log(err));

}
}


function display(dataa){
    cityname.textContent=dataa.name;
    degree.textContent=Math.round(dataa.main.temp)+"°";
    desc.textContent=dataa.weather[0].description;

    searcInput.value="";
}