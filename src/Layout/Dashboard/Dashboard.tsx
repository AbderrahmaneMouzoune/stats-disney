import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import API from '../../API'
import AllData from '../../Components/AllData/AllData'
import Stats from '../../Components/Stats/Stats'
import TotalSale from '../../Components/TotalSale/TotalSale'

function Dashboard({}) {
    const [sales, setSales] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!isLoading) return

        axios
            .get(API.ALLDATA)
            .then(function (response) {
                setSales(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                setIsLoading(false)
            })
    })

    return (
        <>
            {!isLoading && (
                <>
                    <Container fluid>
                        <Row>
                            <Col sm={12}>
                                <Stats sales={sales} />
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col xl={4} md={12}>
                                <TotalSale sales={sales} />
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    )
}

export default Dashboard
