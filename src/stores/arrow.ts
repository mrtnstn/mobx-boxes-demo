import Box from "./box";
import { v4 as uuid } from 'uuid';

export default class Arrow {
    id: string;
    from: Box;
    to: Box;

    constructor(from: Box, to: Box) {
        this.id = uuid();
        this.from = from;
        this.to = to;
    }
}