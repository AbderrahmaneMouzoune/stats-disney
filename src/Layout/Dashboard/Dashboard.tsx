import { Container, Row, Col } from 'reactstrap'
import AllData from '../../Components/AllData/AllData'
import TotalSale from '../../Components/TotalSale/TotalSale'

function Dashboard({}) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xl={4} md={12}>
                        <TotalSale />
                    </Col>
                </Row>
            </Container>
            <AllData />
        </>
    )
}

export default Dashboard
