import './Styles/common.scss'
import SideBar from './Layout/Sidebar/Sidebar'
import { Col, Container, Row } from 'reactstrap'
import TotalSale from './Components/TotalSale/TotalSale'

function App() {
    return (
        <>
            <SideBar />
            <main className={'app'}>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <h1>Distat</h1>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col xl={4} md={12}>
                            <TotalSale />
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default App
