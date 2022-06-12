import React from 'react'
import './Home.css';
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from '@material-ui/core'
import Search from './Search'

function Home() {
  return (
    <div className='home'>

        <div className='home_header'>

            <div className='home_headerLeft'>
                <p>Sobre Google</p>
                <p>Tienda</p>
            </div>
            <div className='home_headerRight'>
                <p>Gmail</p>
                <p>Imágenes</p>
                <AppsIcon />
                <Avatar />
            </div>

        </div>
        <div className='home_body'>
            <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'/>
        </div>
        <div className='home_inputContainer'>
            <Search />
        </div>
    </div>
  )
}

export default Home