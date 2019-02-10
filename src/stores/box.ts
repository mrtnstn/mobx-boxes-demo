import { computed, observable } from 'mobx';
import { v4 as uuid } from 'uuid';
import { serializable, identifier } from 'serializr';

export default class Box {
    @serializable(identifier()) id: string; // for react
    @serializable @observable   name: string = 'Box' + this.id;
    @serializable @observable   x: number = 0;
    @serializable @observable   y: number = 0;
    
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
