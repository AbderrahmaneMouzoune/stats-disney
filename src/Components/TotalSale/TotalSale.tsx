import './TotalSale.scss'
import { Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'
import Formatter, { IData } from '../../config'
import { useState } from 'react'
import classNames from 'classnames'

interface Props {
    sales: IData[]
}

function TotalSale({ sales }: Props) {
    const [onTheLastXDays, setOnTheLastXDays] = useState(6)

    return (
        <div className={'box'}>
            <Row className={'card-header'}>
                <Col xl={9} lg={8} xs={9}>
                    <h6 className={'card-text'}>
                        Vente sur les {onTheLastXDays} derniers jours
                    </h6>
                    <h4 className={'card-text'}>
                        {Formatter.currency.format(
                            getTotalXDays(sales, onTheLastXDays)
                        )}
                    </h4>
                    <small>
                        * Par rapport aux {onTheLastXDays} derniers jours
                    </small>
                </Col>
                <Col xl={3} lg={4} xs={3} className="card-align-right">
                    <h6
                        className={classNames({
                            'txt-success':
                                getDeltaForX2Days(sales, onTheLastXDays) > 0,
                            'txt-error':
                                getDeltaForX2Days(sales, onTheLastXDays) < 0,
                        })}
                    >
                        {getDeltaForX2Days(sales, onTheLastXDays) !== 0 &&
                        getDeltaForX2Days(sales, onTheLastXDays) > 0
                            ? '+'
                            : '-'}
                        {getDeltaForX2Days(sales, onTheLastXDays)}%
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
                            categories: getLastXDays(sales, onTheLastXDays),
                        },
                        colors: ['#7366ff', '#4433ff'],
                    }}
                    series={[
                        {
                            name: 'series-1',
                            data: getValuesLastXDays(sales, onTheLastXDays),
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

function getLastXDays(sales: IData[], x: number): string[] {
    return sales.slice(-x).map((sale) => {
        return `${Formatter.dateShort.format(new Date(sale.CreationDate))}`
    })
}

function getValuesLastXDays(sales: IData[], x: number): number[] {
    return sales.slice(-x).map((sale) => {
        return Number(sale.AllocatedAmount)
    })
}

function getTotalXDays(sales: IData[], x: number): number {
    const values = getValuesLastXDays(sales, x)

    return Number(values.reduce((sum, acc) => sum + acc, 0).toFixed(2))
}

function getDeltaForX2Days(sales: IData[], x: number): number {
    const x2 = x * 2

    const actual = getTotalXDays(sales, x)
    const before = getTotalXDays(sales, x2) - actual

    return Number(((before * 100) / actual).toFixed(2))
}

export default TotalSale
