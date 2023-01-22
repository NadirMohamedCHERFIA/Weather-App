import React, { useEffect } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {IoChevronForwardCircleSharp} from 'react-icons/io5'
import { useState } from 'react'
import Card from './../card/Card'
import './top.css'
const Top = () => {

    const [manage,setManage] = useState({Home:true,Forcast:false,About:false,Contacts:false})
    const handleClick = ()=>{
        setBurger((burger)=>!burger)
        }
    const [burger,setBurger] = useState(false);
    const handleHomeClick =()=>{
        console.log("clicked")
        setManage({Home:true,Forcast:false,About:false,Contacts:false})
    }
    const handleForcastClick =()=>{
        setManage({Home:false,Forcast:true,About:false,Contacts:false})
    }
    const handleAboutClick =()=>{
    setManage({Home:false,Forcast:false,About:true,Contacts:false})
    }
    const handleContactsClick =()=>{
setManage({Home:false,Forcast:false,About:false,Contacts:true})
    }
    window.onscroll=()=>{
        if(window.scrollY<=200){
            handleHomeClick()
        }else if(window.scrollY>200 && window.scrollY<=500){
            handleForcastClick()
        }else if(window.scrollY>500 && window.scrollY<=1200){
            handleAboutClick()
        }else if(window.scrollY>1200 && window.scrollY<=1500){
            handleContactsClick()
        }
    }
    return (
    <div className='container__header' id='top'>
            <div className={burger ? "header disable":"header"} >
                    <div className="name">
                    Weather App <TiWeatherPartlySunny/>
                    </div>
            <div className="items">
                <a href='#top'><div onClick={handleHomeClick} className={manage.Home ?'active':''}>Home</div></a>
                <a href='#forcast' ><div onClick={handleForcastClick} className={manage.Forcast ?'active':''}>Forcast</div></a>
                <a href='#about'><div onClick={handleAboutClick} className={manage.About ?'active':''}>About?</div></a>
                <a href='#socials' ><div onClick={handleContactsClick} className={manage.Contacts ?'active':''}>Contacts</div></a>
            </div>
        </div>
            <div className={burger ? 'burger__menu active' : 'burger__menu'}>
                <div className="menuLogo">
                    {burger ?<IoChevronForwardCircleSharp onClick={handleClick}/> : <AiOutlineMenu onClick={handleClick}/>}
                </div>
                <ul className='menu__items'>
                <a href='#top'><div onClick={handleHomeClick} className={manage.Home ?'active':''}>Home</div></a>
                <a href='#forcast' ><div onClick={handleForcastClick} className={manage.Forcast ?'active':''}>Forcast</div></a>
                <a href='#about'><div onClick={handleAboutClick} className={manage.About ?'active':''}>About?</div></a>
                <a href='#socials' ><div onClick={handleContactsClick} className={manage.Contacts ?'active':''}>Contacts</div></a>
                </ul>
            </div>
            <Card/>
    </div>
    )
}

export default Top