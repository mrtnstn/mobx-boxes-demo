import React, { Component } from 'react';
import { observer } from 'mobx-react';

import BoxView from './box-view';
import ArrowView from './arrow-view';
import DomainModel from '../stores/domain-model';

@observer
export default class Canvas extends Component<{ store: DomainModel }> {
    render() {
        const { store } = this.props;
        return (
            <div className="App">
                <div className="canvas"
                    onClick={this.onCanvasClick}
                >
                    <svg>
                        {store.arrows.map(arrow =>
                            <ArrowView arrow={arrow} key={arrow.id} />
                        )}
                    </svg>
                    {store.boxes.map(box =>
                        <BoxView box={box} store={store} key={box.id} />
                    )}
                </div>
            </div>
        )
    }

    onCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const { store } = this.props;
        if (e.ctrlKey === false) {
            store.selection = null;
        } else {
            const newBox = store.addBox('Hi.', e.clientX - 50, e.clientY - 20, store.selection);
            store.selection = newBox;
        }
    }
}
