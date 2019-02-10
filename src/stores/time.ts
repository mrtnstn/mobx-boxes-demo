import { autorun, transaction, observable } from 'mobx';
import DomainModel, { serializeState, deserializeState } from './domain-model';

export default class History {
    store: DomainModel;
    states: any[] = [];
    currentFrame: number = -1;
    changingState: boolean = false;

    constructor(store: DomainModel) {
        this.store = store;
    }

    startLogging() {
        autorun(() => {
            if (this.changingState) {
                this.changingState = false;
            } else {
                if (this.currentFrame != -1) {
                    this.states.splice(this.currentFrame + 1);
                    this.currentFrame = -1;
                }
            }
            this.states.push(serializeState(this.store));
        });
    }

    previousState() {
        if (this.currentFrame == -1) {
            this.currentFrame = this.states.length;
        }
        if (this.currentFrame > 0) {
            this.currentFrame--;
            this.changingState = true;
            transaction(() =>
                deserializeState(this.store, this.states[this.currentFrame])
            );
        }
    }

    nextState() {
        if (this.currentFrame > -1 && this.currentFrame < this.states.length - 1) {
            this.currentFrame++;
            this.changingState = true;
            transaction(() =>
                deserializeState(this.store, this.states[this.currentFrame])
            );
        }
    }
}
