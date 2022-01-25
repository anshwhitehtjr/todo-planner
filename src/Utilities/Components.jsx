import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const CardItem = ({ card, index }) => {
    return (
        <Draggable draggableId={ card.id } index={ index }>
            {
                provided => (
                    <div ref={ provided.innerRef } { ...provided.draggableProps } { ...provided.dragHandleProps } className='p-5 rounded-lg border-2 bg-white border-gray-900 shadow-xl'>
                        <p>{ card.desc }</p>
                    </div>
                )
            }
        </Draggable>
    );
};
