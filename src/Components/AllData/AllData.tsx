import './AllData.scss'
import { MDBDataTableV5 } from 'mdbreact'
import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Columns } from '../../config'
import Sales from '../../../static/data.json'

function AllData() {
    const [dataTable, setDataTable] = useState({
        columns: Columns,
        rows: Sales,
    })

    return (
        <Container fluid className={'all-data'}>
            <Row>
                <Col xs={12}>
                    <MDBDataTableV5
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={dataTable}
                        hover
                        className='box'
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AllData
