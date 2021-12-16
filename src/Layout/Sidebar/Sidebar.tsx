import './Sidebar.module.scss'
import React from 'react'
import { NavItem, NavLink, Nav } from 'reactstrap'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface ISidebar {
    isOpen?: boolean
    toggle?: React.MouseEventHandler<HTMLSpanElement> | undefined
}

function SideBar({ isOpen, toggle }: ISidebar) {
    return (
        <div className={classNames('sidebar box', { 'is-open': isOpen })}>
            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: '#fff' }}>
                    &times;
                </span>
                <h3>{'APPNAME'}</h3>
            </div>
            <div className="side-menu">
                <Nav vertical className="list-unstyled pb-3">
                    <p>Dummy Heading</p>
                    <NavItem>
                        <NavLink tag={Link} to={'/stats'}>
                            Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/files'}>
                            Fichiers
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    )
}

export default SideBar
