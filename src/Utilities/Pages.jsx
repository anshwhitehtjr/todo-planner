import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import { CardItem } from './Components';

export const Home = () => {
    const cardsInit = [
        {
            id: "firsttodo",
            desc: "This is a desc 1"
        },
        {
            id: "secondtodo",
            desc: "This is a desc 2"
        },
        {
            id: "thirdtodo",
            desc: "This is a desc 3"
        },
        {
            id: "fourthtodo",
            desc: "This is a desc 4"
        },
    ];
    const [cards, setCards] = useState(cardsInit);

    const handleDragEnd = result => {
        if (!result.destination) return;

        const items = Array.from(cards);
        const [reorderedItems] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItems);
        setCards(items);
    };

    return (
        <div className='container mx-auto'>
            <DragDropContext onDragEnd={ handleDragEnd }>
                <Droppable droppableId='cards'>
                    {
                        provided => (
                            <ul ref={ provided.innerRef } { ...provided.droppableProps } className="grid grid-row-4 gap-2">
                                {
                                    cards.map((card, index) => {
                                        return (
                                            <Draggable key={ card.id } draggableId={ card.id } index={ index } >
                                                {
                                                    provided => (
                                                        <li ref={ provided.innerRef } { ...provided.draggableProps } { ...provided.dragHandleProps } className='p-5 rounded-lg border-2 border-gray-900 shadow-xl'>
                                                            <p>{ card.desc }</p>
                                                        </li>
                                                    )
                                                }
                                            </Draggable>
                                        );
                                    })
                                }
                                { provided.placeholder }
                            </ul>
                        )
                    }
                </Droppable>
            </DragDropContext>
        </div >
    );
};

export const About = () => {
    return (
        <h1 className="text-center text-red-700">About, World!</h1>
    );
};

