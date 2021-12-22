import './AllData.scss'
import { MDBDataTableV5 } from 'mdbreact'
import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Formatter, { Columns, Status } from '../../config'
import Sales from '../../../static/data.json'

function AllData() {
    const [dataTable, setDataTable] = useState({
        columns: Columns,
        rows: formatSales(),
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

interface IDataFormatted {
    BookingId: number;
    CreationDate: string;
    AllocatedAmount: string;
    Status: Status;
    Score: number
}

function formatSales() : IDataFormatted[] {
    // Sales : IData
    // @ts-ignore
    return Sales.map((sale) => {
        return {
            BookingId: sale.BookingId,
            CreationDate: `${sale.CreationDate} (${Formatter.date.format(new Date(sale.CreationDate))})`,
            AllocatedAmount: Formatter.currency.format(sale.AllocatedAmount),
            Status: sale.Status,
            Score: sale.Score
        };
    })
}

export default AllData
