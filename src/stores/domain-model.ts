import { observable } from "mobx";
import Arrow from "./arrow";
import Box from "./box";
import { v4 as uuid } from 'uuid';

export default class DomainModel {
    @observable boxes: Box[] = [];
    @observable arrows: Arrow[] = [];
    @observable selection: Box | null = null;

    constructor() {
        /*
            Some initial state
        */
        this.boxes.push(
            new Box('Rotterdam', 100, 100),
            new Box('Vienna', 650, 300)
        );

        this.arrows.push({
            id: uuid(),
            from: this.boxes[0],
            to: this.boxes[1]
        });


    }

    addBox = (name: string, x: number, y: number, fromBox: Box | null) => {
        const newBox = new Box(name, x, y);
        this.boxes.push(newBox);
        if (fromBox) {
            const newArrow = new Arrow(fromBox, newBox);
            this.arrows.push(newArrow);
        }
        return newBox;
    }

}