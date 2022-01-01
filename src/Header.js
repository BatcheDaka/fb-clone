import React from 'react';
import './Header.css';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import CottageIcon from '@mui/icons-material/Cottage';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://180dc.org/wp-content/uploads/2014/04/facebook-logo-facebook-logo-9.png" alt="facebook" />
                <div className="header__input">
                    <ScreenSearchDesktopIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option">
                    <CottageIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <GolfCourseIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <LoyaltyIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StoreMallDirectoryIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Batche Daka</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}
