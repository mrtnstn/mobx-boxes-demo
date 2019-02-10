import { observable, transaction } from "mobx";
import Arrow from "./arrow";
import Box from "./box";
import { serializable, list, reference, object, serialize, update } from "serializr";

export default class DomainModel {
    @serializable(list(object(Box))) @observable    boxes: Box[] = [];
    @serializable(list(object(Arrow))) @observable  arrows: Arrow[] = [];
    @serializable(reference(Box)) @observable       selection: Box | null = null;

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

/*
 * Serialize the domain model store to json
 */
export function serializeState(store: DomainModel) {
    return serialize(store);
}

/*
 * Update the domain model store from the given json
 */
export function deserializeState(store: DomainModel, json: string) {
    update(DomainModel, store, json);
}

/*
 * Generate 'amount' new random arrows and boxes
*/
export function generateStuff(store: DomainModel, amount: number) {
    transaction(() => {
        for (var i = 0; i < amount; i++) {
            store.boxes.push(new Box('#' + i, Math.random() * window.innerWidth * 0.5, Math.random() * window.innerHeight));
            store.arrows.push(new Arrow(
                store.boxes[Math.floor(Math.random() * store.boxes.length)],
                store.boxes[Math.floor(Math.random() * store.boxes.length)]
            ));
        }
    });
}
