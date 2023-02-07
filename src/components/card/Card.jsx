import React from 'react'
import {TbTemperature} from 'react-icons/tb'
import './card.css'
import {useEffect,useState} from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {BsWind} from 'react-icons/bs'
import {GiWindsock} from 'react-icons/gi'
import CloudRainSun from './../../images/cloud_rain_sun.png'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);
const forcastDayOptions=[
{
    id:1,
    option:'This Day'
},{
    id:2,
    option:'Next Day'
},{
    id:3,
    option:'After 2 Days'
},{
    id:4,
    option:'After 3 Days'
},
{
    id:5,
    option:'After 4 Days'
},{
    id:6,
    option:'After 5 Days'
},{
    id:7,
    option:'After 6 Days'
}
]
    const days ={
    0:"Sunday",
    1:"Monday",
    2:"Thursday",
    3:"Wednesday",
    4:"Tuesday",
    5:"Friday",
    6:"Saturday"
}
const Months ={
    0:"January",
    1:"February",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"Jully",
    7:"August",
    8:"September",
    9:"November",
    10:"Décember"
}
const cities=[
    {
    id:1,
    name:"Paris",
    latitude:48.866667,
    longitude:2.333333
    },
    {
    id:2,
    name:"Lille",
    latitude:50.633333,
    longitude:3.066667
    },
    {
    id:3,
    name:"Strasbourg",
    latitude:48.5734053,
    longitude:7.7521113
    },
    {
    id:4,
    name:"Marseille",
    latitude:43.300000,
    longitude:5.400000
    },
    {
    id:5,
    name:"Chicago",
    latitude:41.739685,
    longitude:-87.554420
    },
    {
    id:6,
    name:"Madrid",
    latitude:40.4167754,
    longitude:-3.7037902
    },
    {
    id:7,
    name:"Algiers",
    latitude:36.737232,
    longitude:3.086472
    },
]
const forcastOptions=[
{
    id:1,
    option:'temperatureandwindspeed'
},
{
    id:2,
    option:'temperature'
},
{
    id:3,
    option:'windspeed'
},
]
const Card = () => {
    // ********************************************************************
    const [currentWeather,setCurrentWeather] = useState(null)
    const [trigger,setTrigger] = useState(true)
    const [city,setCity] = useState(cities[0].name)
    const [labels,setLabels] = useState([])
    const [dataTemp,setDataTemp] = useState([])
    const [windSpeed,setWindSpeed] = useState([])
    const [selectedForcastOption,setSelectedForcastOption] = useState('temperatureandwindspeed')
    const [coord,setCoor]=useState({latitude:52.52,longitude:13.41})
    const [geolocationsetted,setGeolocationSetted] = useState(false)
    const [selectedForcastDay,setSelectedForcaseDay] = useState('This Day')
    // ********************************************************************
    const options = {
    // responsive: true,
    // aspectRation : 1/3,
    maintainAspectRatio: false,
    scale:{
        y:{
            // max:50,
            // main:-30,
            // step:5
        }
    },
    plugins: {
    legend: {
        position: 'top',
        labels:{
        font:{
            size: window.innerWidth > 600 ? 24 : 10,

        }
    }
    },
    title: {
        display: true,
        text: 'Weather Forcast',
        font:{
            size: window.innerWidth > 400 ? 24 : 8,
            fontColor:'white'
        }
    },
    },
};

    window.setTimeout(()=>{
        setTrigger(!trigger)
    },60000)
    async function weather (){
        try{
            // console.log("New coord" ,coord)
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coord.latitude}&longitude=${coord.longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,cloudcover`)
                if(response.ok){
                    const responseJson = await response.json()
                    setCurrentWeather(responseJson)
                }
        }catch(err){
            console.log(err)
        }
    }  
    useEffect(()=>{
        weather()
    },[trigger])
    useEffect(()=>{
        if(currentWeather!==null){
            let i=0
            const modifDate=[]
            currentWeather.hourly.time.forEach((e)=>{
                modifDate[i]=String(e).substring(11,16);
                i++;
            })
            if(selectedForcastDay==='This Day'){
                setDataTemp(currentWeather.hourly.temperature_2m.slice(0,24))
                setWindSpeed(currentWeather.hourly.windspeed_10m.slice(0,24))
                setLabels(modifDate.slice(0,24));
            }else if (selectedForcastDay==='Next Day'){
                setLabels(modifDate.slice(24,48));    
                setDataTemp(currentWeather.hourly.temperature_2m.slice(24,48))
                setWindSpeed(currentWeather.hourly.windspeed_10m.slice(24,48))
            }else if(selectedForcastDay==='After 2 Days'){    
                setDataTemp(currentWeather.hourly.temperature_2m.slice(48,72))
                setWindSpeed(currentWeather.hourly.windspeed_10m.slice(48,72))
                setLabels(modifDate.slice(48,72));    
            }else if(selectedForcastDay==='After 3 Days'){
                setDataTemp(currentWeather.hourly.temperature_2m.slice(72,96))
                setWindSpeed(currentWeather.hourly.windspeed_10m.slice(72,96))
                setLabels(modifDate.slice(72,96));    
            }else if(selectedForcastDay==='After 4 Days'){
                setDataTemp(currentWeather.hourly.temperature_2m.slice(96,120))
                setWindSpeed(currentWeather.hourly.windspeed_10m.slice(96,120))
                setLabels(modifDate.slice(96,120));    
            }else if(selectedForcastDay==='After 5 Days'){
                setDataTemp(currentWeather.hourly.temperature_2m.slice(120,144))
                setWindSpeed(currentWeather.hourly.windspeed_10m.slice(120,144))
                setLabels(modifDate.slice(120,144));    
            }else if(selectedForcastDay==='After 6 Days'){
                setDataTemp(currentWeather.hourly.temperature_2m.slice(144,168))
                setWindSpeed(currentWeather.hourly.windspeed_10m.slice(144,168))
                setLabels(modifDate.slice(144,168));    
            }

        }
    },[currentWeather,selectedForcastDay])
    const data = {
    labels,
    datasets: (selectedForcastOption==='temperatureandwindspeed')? [
    {
        fill:true,
        label: 'Temperature',
        data:dataTemp,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
        fill:true,
        label: 'WindSpeed',
        data: windSpeed,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
    ]:(selectedForcastOption==='temperature')?[
    {
        fill:true,
        label: 'Temperature',
        data:dataTemp,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
] : (selectedForcastOption==='windspeed')?[
 {
        fill:true,
        label: 'WindSpeed',
        data: windSpeed,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
] : null
};
    useEffect(()=>{
    },[selectedForcastOption])

    const dayCalc=(currentWeather)=>{
        if(currentWeather){
            const d= new Date(currentWeather.current_weather.time)
            return days[d.getDay()] +" "+ d.getDate()+" "+ Months[d.getMonth()]+" " + d.getFullYear()
        }else{
            return "Loading ..."
        }
    }
    async function getLocation() {
        await navigator.geolocation
        navigator.geolocation.getCurrentPosition((position,err)=>{
            if(position){
                setGeolocationSetted(true)
                    setCoor({latitude:parseFloat(position.coords.latitude),longitude:position.coords.longitude})
                    setCity('LocalCity')
                    setTrigger((trigger)=>!trigger)
                }
        })
    }
    const handlecitychange = (e)=>{
        setGeolocationSetted(false)
        cities.forEach((c)=>{
            if(c.name===e.target.value){
                setCity(c.name);
                setCoor({latitude:c.latitude,longitude:c.longitude})
                setTrigger((trigger)=>!trigger)
            }
        })
    }
    const handleForcastOptionChange =(e)=>{
            forcastOptions.forEach((f)=>{
            if(f.option===e.target.value){
                setSelectedForcastOption(f.option)
            }
        })
    }
    const handleForcastDay=(e)=>{
        forcastDayOptions.forEach((d)=>{
            if(d.option===e.target.value){
                setSelectedForcaseDay(d.option)
            }
        })
    }
    return <div className='container' >
            <div className="geolocation"  >
                <h3>Select a city from the list below or get the weather at your city

                </h3>
                <div className="geolocationLogo">
            <IoLocationSharp onClick={()=>{getLocation()}}/>
                </div>
            </div>
        <div className="card">
            <div className="search">
                <select onChange={handlecitychange}> 
                    <option value="..." key={0} selected={geolocationsetted ? "selected" : ""}>...</option>
                    {cities.map((c)=>
                        <option value={c.name} key={c.id}>{c.name}</option>
                    )}
                </select>
            </div>
            <div className="card__body">
                <img src={CloudRainSun} alt="" className='weatherState'/>
                {/* <img src={currentWeather.weathercode===2 ||currentWeather.weathercode===3 ? CloudRainSun: currentWeather.weathercode===1 ?CloudSun : currentWeather.weathercode===71 || currentWeather.weathercode===72 ||currentWeather.weathercode===75 ||currentWeather.weathercode===77 ? Snowwy : currentWeather.weathercode===0 ? Sunny : null } alt="" className='weatherState'/> */}
                <div className="city">
                    {city}    
                </div>
                <div className="temperature">
                {/* <strong>Temperature</strong> */}
                <TbTemperature/>   : {currentWeather? currentWeather.current_weather.temperature +' °C' : "Loading..."}
                </div>
                <div className="wind__speed">
                    {/* <strong>Wind speed</strong> */}
                    <BsWind/> : {currentWeather? currentWeather.current_weather.windspeed +' km/h' : "Loading..."}
                </div>
                <div className="wind__direction">
                    {/* <strong>Wind direction</strong> */}
                    <GiWindsock/> : {currentWeather? currentWeather.current_weather.winddirection +' °' : "Loading..."}
                </div>
                <div className="date">
                    {dayCalc(currentWeather)}
                </div>
            </div>
        </div>
        <div className="forcast" id="forcast">
            <div className="selectionForcast">
                <select name="" id="" onChange={handleForcastOptionChange}>
                    {forcastOptions.map((f)=>
                        <option value={f.option} key ={f.id}>{f.option}</option>
                    )}
                </select>
                <select name="" id="" onChange={handleForcastDay}>
                    {forcastDayOptions.map((f)=>
                        <option value={f.option} >{f.option}</option>
                    )}
                </select>
            </div>
            <div className="line">
                <Line options={options} data={data} 
                height={"100%"}
                />
            </div>
        </div>
    </div>
}

export default Card