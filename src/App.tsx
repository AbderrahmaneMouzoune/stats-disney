import './Styles/common.scss'
import SideBar from './Layout/Sidebar/Sidebar'
import { useState } from 'react'
import Dashboard from './Layout/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import LINK from './route'
import Files from './Layout/Files/Files'
import { Container, Row, Col } from 'reactstrap'

function App() {
    const [openNavBar, setopenNavBar] = useState(true)

    return (
        <>
            <SideBar isOpen={openNavBar} />
            <main className={'app'}>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <h1>Distat</h1>
                        </Col>
                    </Row>
                </Container>

                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path={LINK.dashboard} element={<Dashboard />} />
                    <Route path={LINK.fichiers} element={<Files />} />
                </Routes>
            </main>
        </>
    )
}

export default App
