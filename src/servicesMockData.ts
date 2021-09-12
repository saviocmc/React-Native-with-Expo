import { Service } from "./models";

export const services: Service[] = [
    {
        id: 1,
        name: 'Banho',
        price: 79.9,
        description: 'Não dê banho no seu gato',
        quantity: 0,
    },
    {
        id: 2,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina V4. Seu gato precisa de duas',
        quantity: 0,
    },
    {
        id: 3,
        name: 'Vacina Antirrábica',
        price: 99.9,
        description: 'Uma dose da vacina Antirrábica. Seu gato precisa de uma por ano',
        quantity: 0,
    },
]