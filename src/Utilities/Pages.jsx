import React, { useState } from 'react';
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
    const [boards, setBoards] = useState();

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
                <Droppable droppableId='cards' direction='horizontal'>
                    {
                        provided => (
                            <div ref={ provided.innerRef } { ...provided.droppableProps } className="grid grid-cols-4 gap-2">
                                {
                                    cards.map((card, index) => {
                                        return <CardItem card={ card } index={ index } />;
                                    })
                                }
                                { provided.placeholder }
                            </div>
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

