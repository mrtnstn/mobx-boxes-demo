import { computed, observable } from 'mobx';
import { v4 as uuid } from 'uuid';

export default class Box {
    id: string; // for react
    @observable name: string = 'Box' + this.id;
    @observable x: number = 0;
    @observable y: number = 0;
    @computed get width(): number {
        return this.name.length * 15;
    }

    constructor(name: string, x: number, y: number) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.id = uuid();
    }
}
