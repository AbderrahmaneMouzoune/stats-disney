import { MDBDataTableV5 } from 'mdbreact'
import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from '../../Components/Button/Button'
import { ColumnsFiles } from '../../config'

function Files({}) {
    const [files, setFiles] = useState(['lol.scc', 'zasazsaz'])

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
    id: number;
    filename: string;
    download: JSX.Element;
}

function formatFiles(files : string[]) : IFilesFormatted[] {
    return files.map((file, i) => {
        return {
            id: i,
            filename: `${file}`,
            download: <Button text={'Télécharger'} type='primary' onClick={() => window.open(`${file}`)} />,
        }
    })
}
export default Files
