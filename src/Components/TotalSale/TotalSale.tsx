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
                    <h6 className={'card-text'}>
                        Vente sur les 7 derniers jours
                    </h6>
                    <h4 className={'card-text'}>
                        {Formatter.currency.format(totalPrice)}
                    </h4>
                    <small>* Par rapport aux 7 derniers jours</small>
                </Col>
                <Col xl={3} lg={4} xs={3} className="card-align-right">
                    <h6 className={'txt-sucess'}>
                        65%
                        <small>
                            <sup>*</sup>
                        </small>
                    </h6>
                </Col>
            </Row>
            <div className={'card-graph'}>
                <Chart
                    options={{
                        chart: {
                            id: 'basic-bar',
                        },
                        xaxis: {
                            categories: getLast7days(),
                        },
                        colors: ['#7366ff', '#4433ff'],
                    }}
                    series={[
                        {
                            name: 'series-1',
                            data: getValueLast7Days(),
                        },
                    ]}
                    type="area"
                    theme={{
                        mode: 'dark',
                    }}
                />
            </div>
        </div>
    )
}

function getTotal(): number {
    const sales = Data
    return Number(
        sales
            .reduce(
                (sum, { AllocatedAmount }: { AllocatedAmount: number }) =>
                    sum + Number(AllocatedAmount),
                0
            )
            .toFixed(2)
    )
}

function getLast7days(): string[] {
    const sales = Data

    return sales.slice(-7).map((sale) => {
        return sale.CreationDate
    })
}

function getValueLast7Days(): number[] {
    const sales = Data

    return sales.slice(-7).map((sale) => {
        return Number(sale.AllocatedAmount)
    })
}

export default TotalSale
