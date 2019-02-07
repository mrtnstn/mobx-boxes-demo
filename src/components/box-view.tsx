import React, { Component } from 'react';
import { observable, transaction, computed } from 'mobx';
import { observer } from 'mobx-react';
import Draggable, { DraggableCore, DraggableData, DraggableProps, DraggableEventHandler } from 'react-draggable';
import Box from '../stores/box';
import DomainModel from '../stores/domain-model';

@observer
export default class BoxView extends Component<{ box: Box, store: DomainModel }> {
    render() {
        const { box } = this.props;
        return (
            <DraggableCore onDrag={this.handleDrag}>
                <div
                    style={{
                        width: box.width,
                        left: box.x,
                        top: box.y
                    }}
                    onClick={this.handleClick}
                    className={this.isSelected ? 'box box-selected' : 'box'}
                >
                    {box.name}
                </div>
            </DraggableCore>
        )
    }

    @computed get isSelected() {
        return this.props.store.selection && this.props.store.selection.id === this.props.box.id;
    }

    handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.props.store.selection = this.props.box;
        e.stopPropagation();
    }

    handleDrag: DraggableEventHandler = (e, data) => {
        transaction(() => {
            this.props.box.x += data.deltaX;
            this.props.box.y += data.deltaY;
        });
    }
}
