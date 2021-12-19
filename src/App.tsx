import './Styles/common.scss'
import SideBar from './Layout/Sidebar/Sidebar'
import { Col, Container, Row } from 'reactstrap'
import TotalSale from './Components/TotalSale/TotalSale'
import { MDBDataTableV5 } from 'mdbreact'
import Sales from '../static/data.json'
import { useState } from 'react'

function App() {

    const [dataTable, setDataTable] = useState(Sales)

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
                    <Row>
                        <Col xs={12}>
                            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={dataTable} />;
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default App