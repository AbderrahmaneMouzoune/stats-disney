import './Sidebar.scss'
import React from 'react'
import { NavItem, NavLink, Nav } from 'reactstrap'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faFile } from '@fortawesome/free-solid-svg-icons'
import LINK from '../../route'

interface ISidebar {
    isOpen?: boolean
}

function SideBar({ isOpen }: ISidebar) {
    return (
        <aside
            className={classNames('sidebar box', {
                'sidebar-is-active': isOpen,
            })}
        >
            <div className="sidebar-header">
                <h3>{'Distats'}</h3>
            </div>
            <hr />
            <div className="sidebar-menu">
                <Nav>
                    <NavItem>
                        <NavLink tag={Link} to={LINK.dashboard}>
                            <FontAwesomeIcon icon={faChartLine} />
                            <span className={'nav-link-text'}>Dashboard</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={LINK.fichiers}>
                            <FontAwesomeIcon icon={faFile} />
                            <span className={'nav-link-text'}>Fichiers</span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </aside>
    )
}

export default SideBar
