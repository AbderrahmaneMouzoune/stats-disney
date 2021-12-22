import { AriaAttributes } from "react"

const currency = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
})

const date = new Intl.DateTimeFormat('fr-FR', { 
    dateStyle: 'full', 
})

export type Status = 'Approved' | 'Declined'

export interface IData {
    BookingId: number
    CreationDate: Date // YYYY-MM-DD
    CancellingDate: Date // YYYY-MM-DD
    AllocatedAmount: number
    PartnerId: string
    SubPartnerId: string
    SubPartnerIdentifier: string
    Score: number
    Status: Status
    Currency: string
    Product: string
    custom: any
    custom2: any
    custom3: any
    custom4: any
    custom5: any
    custom6: any
    custom7: any
    custom8: any
    custom9: any
    custom10: any
    custom11: any
    custom12: any
    custom13: any
    custom14: any
    custom15: any
}

type Sort = "asc" | "desc" | "disabled"

interface IColumns {
    label: string;
    field: string;
    sort?: Sort;
    attributes?: AriaAttributes
}

export const Columns :IColumns[] = [
    {
        label: 'ID',
        field: 'BookingId',
    },
    {
        label: 'Date de Création',
        field: 'CreationDate',
        sort: 'asc',
    },
    {
        label: 'Montant',
        field: 'AllocatedAmount',
        sort: 'asc',
    },
    {
        label: 'Status',
        field: 'Status',
    },
    {
        label: 'Score',
        field: 'Score',
    },
]

const Formatter = {
    currency,
    date
}

export default Formatter