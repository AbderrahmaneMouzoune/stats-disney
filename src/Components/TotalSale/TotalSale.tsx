import './TotalSale.scss'
import { Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'
import Data from '../../../static/data.json'
import Formatter from '../../config'

function TotalSale({}) {

    const totalPrice = getTotal()

    return (
        <div className={'box'}>
            <Row className={'card-header'}>
                <Col xl={9} lg={8} xs={9}>
                    <h6 className={'card-text'}>Total Sale</h6>
                    <h4 className={'card-text'}>{Formatter.format(totalPrice)}</h4>
                    <p className={'card-text'}>Compare to last week</p>
                </Col>
                <Col xl={3} lg={4} xs={3} className="card-align-right">
                    <h6 className={'txt-sucess'}>65%</h6>
                </Col>
            </Row>
            <div className={'card-graph'}>
                <Chart
                    options={{
                        chart: {
                            id: 'basic-bar',
                        },
                        xaxis: {
                            categories: [
                                1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                                1999,
                            ],
                        },
                    }}
                    series={[
                        {
                            name: 'series-1',
                            data: [30, 40, 45, 50, 49, 60, 70, 91],
                        },
                    ]}
                    type="area"
                />
            </div>
        </div>
    )
}

function getTotal() : number {
    const sales = Data;
    return Number(sales.reduce( ( sum, { AllocatedAmount } : { AllocatedAmount: number } ) => sum + AllocatedAmount , 0).toFixed(2))
}

export default TotalSale
