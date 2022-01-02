import './AllData.scss'
import { MDBDataTableV5 } from 'mdbreact'
import { Container, Row, Col } from 'reactstrap'
import Formatter, { Columns, IData, Status } from '../../config'

interface Props {
    sales: IData[]
}

function AllData({ sales }: Props) {
    return (
        <Container fluid className={'all-data'}>
            <Row>
                <Col xs={12}>
                    <MDBDataTableV5
                        data={{
                            columns: Columns,
                            rows: formatSales(sales),
                        }}
                        hover
                        className="box box-data"
                    />
                </Col>
            </Row>
        </Container>
    )
}

interface IDataFormatted {
    BookingId: number
    CreationDate: string
    AllocatedAmount: string
    Status: Status
    Score: number
}

function formatSales(sales: IData[]): IDataFormatted[] {
    return sales.map((sale) => {
        return {
            BookingId: sale.BookingId,
            CreationDate: `${new Date(
                sale.CreationDate
            ).toLocaleDateString()} (${Formatter.date.format(
                new Date(sale.CreationDate)
            )})`,
            AllocatedAmount: Formatter.currency.format(
                Number(sale.AllocatedAmount)
            ),
            Status: sale.Status,
            Score: sale.Score,
        }
    })
}

export default AllData
