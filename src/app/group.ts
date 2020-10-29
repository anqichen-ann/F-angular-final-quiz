import { Person } from './person';

export interface Group {
    id: number;
    name: string;
    trainees: Person[];
    trainers: Person[];
}