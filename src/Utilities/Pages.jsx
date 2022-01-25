import React, { useState } from 'react';
import { Board, CardItem } from './Components';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';

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
        {
            id: "fifthtodo",
            desc: "This is a desc 5"
        },
        {
            id: "sixthtodo",
            desc: "This is a desc 6"
        },
    ];
    const boardsInit = [
        {
            name: "Done",
            cardID: "thirdtodo"
        },
        {
            name: "Doing",
            cardID: "firsttodo"
        },
    ];
    const [cards, setCards] = useState(cardsInit);
    const [boards, setBoards] = useState(boardsInit);

    const updateCardState = result => {
        if (!result.destination) return;
        const items = Array.from(cards);
        const [reorderedItems] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItems);
        setCards(items);
    };

    return (
        <>
            {/* <DragDropContext onDragEnd={ updateCardState }>
                {
                    boards.map((e, index) => {
                        return <Droppable key={ e.name } droppableId={ e.name } direction='horizontal'>
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
                        </Droppable>;
                    })
                }
            </DragDropContext> */}
            <Board cards={ cards } />
        </ >
    );
};

export const About = () => {
    return (
        <h1 className="text-center text-red-700">About, World!</h1>
    );
};

