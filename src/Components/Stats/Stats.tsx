import './Stats.scss'
import classnames from 'classnames'
import { useState } from 'react'
import { Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'
import Formatter, { IData } from '../../config'

interface Props {
    sales: IData[]
}

function Stats({ sales }: Props) {
    const [dayNumber, setDayNumber] = useState(7)

    const legends: ILegend[] = [
        {
            title: 'Dashboard',
            subtitle: `Vue sur le${
                dayNumber > 1 ? 's' : ''
            } ${dayNumber} derniers jours`,
        },
        {
            title: `${Formatter.currency.format(
                getTotalXDays(sales, dayNumber)
            )}`,
            subtitle: `Gain des ${dayNumber} derniers jours`,
        },
        {
            title: `${getDeltaForX2Days(sales, dayNumber)}%`,
            subtitle: `Par rapport aux ${dayNumber} derniers jours`,
        },
    ]

    const dayOptions: IDayOption[] = [
        {
            label: 'Hebdomadaire',
            value: 7,
        },
        {
            label: 'Mensuel',
            value: 30,
        }
    ]

    return (
        <div className={'card box'}>
            <div className="card-body">
                <Row>
                    <Col xl={3}>
                        <Row className={'chart-left'}>
                            {legends.map(({ title, subtitle }, i) => (
                                <Legend
                                    key={'legend-' + i}
                                    title={title}
                                    subtitle={subtitle}
                                />
                            ))}
                        </Row>
                    </Col>
                    <Col xl={9}>
                        <Row className="chart-right">
                            <Col sm={12}>
                                <ul className={'day-option-wrapper'}>
                                    {dayOptions.map(({ label, value }, i) => {
                                        return (
                                            <li
                                                key={'dayoption-' + i}
                                                className={classnames(
                                                    'day-option',
                                                    {
                                                        'is-active':
                                                            value === dayNumber,
                                                    }
                                                )}
                                                onClick={() =>
                                                    setDayNumber(value)
                                                }
                                            >
                                                {label}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Col>
                        </Row>
                        <Row className={'chart-wrapper'}>
                            <Col sm={12}>
                                <Chart
                                    height={300}
                                    options={{
                                        chart: {
                                            id: 'basic-bar',
                                            animations: {
                                                enabled: true,
                                                easing: 'easeinout',
                                                speed: 800,
                                                animateGradually: {
                                                    enabled: true,
                                                    delay: 150
                                                },
                                                dynamicAnimation: {
                                                    enabled: true,
                                                    speed: 350
                                                }
                                            },
                                            brush: {
                                                enabled: false
                                            }
                                        },
                                        xaxis: {
                                            categories: getLastXDays(
                                                sales,
                                                dayNumber
                                            ),
                                        },
                                        yaxis: {
                                            show: false,
                                        },
                                        colors: ['#7366ff', '#4433ff'],
                                        fill: {
                                            pattern: {
                                                width: 0,
                                                height: 0
                                            }
                                        }
                                    }}
                                    series={[
                                        {
                                            name: 'series-1',
                                            data: getValuesLastXDays(
                                                sales,
                                                dayNumber
                                            ),
                                        },
                                    ]}
                                    type="area"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
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

interface ILegend {
    title: string
    subtitle: string
}

function Legend({ title, subtitle }: ILegend) {
    return (
        <Col xl={12} className="legend">
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </Col>
    )
}

interface IDayOption {
    label: string
    value: number
}

export default Stats
