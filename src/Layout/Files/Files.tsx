import { MDBDataTableV5 } from 'mdbreact'
import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from '../../Components/Button/Button'
import Formatter, { ColumnsFiles } from '../../config'

function Files({}) {
    const [files, setFiles] = useState(['20211226000000_Carrefour-Voyages_booking-NALA', '20211226000000_Carrefour-Voyages_booking-NALA'])

    const [dataTable, setDataTable] = useState({
        columns: ColumnsFiles,
        rows: formatFiles(files),
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
                    className="box box-data"
                />
            </Col>
        </Row>
    </Container>
    )
}

interface IFilesFormatted {
    Id: number;
    Filename: string;
    Download: JSX.Element;
    CreationDate: string;
}

function formatFiles(files : string[]) : IFilesFormatted[] {
    return files.map((file, i) => {
        return {
            Id: i,
            Filename: `${file}`,
            Download: <Button text={'Télécharger'} type='primary' onClick={() => window.open(`${file}`)} />,
            CreationDate: `${Formatter.date.format(
                // new Date(`${y}-${m}-${d}`)
            )}`
        }
    })
}

export default Files
