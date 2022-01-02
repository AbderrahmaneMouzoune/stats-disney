import axios from 'axios'
import { MDBDataTableV5 } from 'mdbreact'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import API from '../../API'
import Button from '../../Components/Button/Button'
import Formatter, { ColumnsFiles } from '../../config'

function Files({}) {
    const [files, setFiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!isLoading) return

        axios
            .get(API.FILES)
            .then(function (response) {
                setFiles(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                setIsLoading(false)
            })
    })

    return (
        <Container fluid className={'all-data'}>
            <Row>
                <Col xs={12}>
                    {!isLoading && (
                        <MDBDataTableV5
                            data={{
                                columns: ColumnsFiles,
                                rows: formatFiles(files),
                            }}
                            hover
                            className="box box-data"
                        />
                    )}
                </Col>
            </Row>
        </Container>
    )
}

interface IFilesFormatted {
    Id: number
    Filename: string
    Download: JSX.Element
    CreationDate: string
}

function formatFiles(files: string[]): IFilesFormatted[] {
    return files.map((file, i) => {
        const y = file.slice(0, 4)
        const m = file.slice(4, 6)
        const d = file.slice(6, 8)

        return {
            Id: i + 1,
            Filename: `${file}`,
            Download: (
                <Button
                    text={'Télécharger'}
                    type="primary"
                    onClick={() =>
                        window.open(`${API.FILES_REPOSITORY}${file}`)
                    }
                />
            ),
            CreationDate: `${Formatter.date.format(
                new Date(`${y}-${m}-${d}`)
            )}`,
        }
    })
}

export default Files
