import Box from "./box";
import { v4 as uuid } from 'uuid';
import { serializable, identifier, reference } from "serializr";

export default class Arrow {
    @serializable(identifier())     id: string;
    @serializable(reference(Box))   from: Box;
    @serializable(reference(Box))   to: Box;

    constructor(from: Box, to: Box) {
        this.id = uuid();
        this.from = from;
        this.to = to;
    }
}