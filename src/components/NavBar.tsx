import React, {useState} from 'react';
import "./navbar.css"
import { GiMaterialsScience } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TABS = [
    "About",
    "Contact",
    "Pricing"
]

export default function NavBar() {
    const navigate = useNavigate();
    const [isMenu, setIsMenu] = useState(false);

    return (
        <div id="navbar" className={isMenu ? "active" : ""}>
            <div className={isMenu ? 'expandable active' : 'expandable'}>
                {TABS.map(tab => (
                    <Button key={tab} className='nav-tab' variant="outlined" onClick={() => {navigate(tab.toLowerCase()); setIsMenu(false)}}>
                        {tab}
                    </Button>
                ))}
            </div>
            <div className='default-bar'>
                <div className='brand'>
                    <GiMaterialsScience />
                    <h1>Empire Digital Solutions</h1>
                </div>
                <div className='menu' onClick={() => setIsMenu(val => !val)}>
                    <CiMenuBurger/>
                </div>
            </div>
        </div>
    )
}
