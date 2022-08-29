import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DASHBOARD } from '../../../routes/backend'

export default function Sidebar() {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    {/* Dashboard */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" exact={true} className="nav-link" to={DASHBOARD.INDEX}>
                            <i className="mdi mdi-home menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </NavLink>
                    </li>
                    {/* Crafter */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.CRAFTERS_LIST}>
                            <i className="mdi mdi-emoticon menu-icon"></i>
                            <span className="menu-title">Crafters</span>
                        </NavLink>
                    </li>
                    {/* Place */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.PLACES}>
                            <i className="mdi mdi-directions-fork menu-icon"></i>
                            <span className="menu-title">Place</span>
                        </NavLink>
                    </li>
                    {/* Island */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.ISLANDS}>
                            <i className="mdi mdi-home-map-marker menu-icon"></i>
                            <span className="menu-title">Islands</span>
                        </NavLink>
                    </li>
                    {/* House */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.HOUSES}>
                            <i className="mdi mdi-scale-bathroom menu-icon"></i>
                            <span className="menu-title">Houses</span>
                        </NavLink>
                    </li>
                    {/* Item */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.ITEMS}>
                            <i className="mdi mdi-sitemap menu-icon"></i>
                            <span className="menu-title">Items</span>
                        </NavLink>
                    </li>
                    {/* Station */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.STATIONS}>
                            <i className="mdi mdi-bank menu-icon"></i>
                            <span className="menu-title">Stations</span>
                        </NavLink>
                    </li>
                    {/* Chest */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.CHESTS}>
                            <i className="mdi mdi-grid-large menu-icon"></i>
                            <span className="menu-title">Chests</span>
                        </NavLink>
                    </li>
                    {/* Task */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.TASKS}>
                            <i className="mdi mdi-view-headline menu-icon"></i>
                            <span className="menu-title">Tasks</span>
                        </NavLink>
                    </li>
                    {/* Setting */}
                    <li className="nav-item">
                        <NavLink activeClassName="guild-color" className="nav-link" to={DASHBOARD.SETTINGS}>
                            <i className="mdi mdi-settings menu-icon"></i>
                            <span className="menu-title">Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
