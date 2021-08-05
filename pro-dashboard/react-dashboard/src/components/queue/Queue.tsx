import React, { FC, useCallback, useState } from 'react';
import { swapArrayElements } from '../../utils/generalUtils';
import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
} from 'react-beautiful-dnd';

import steelersWinBet from './assets/steelersWinBet.png';
import travisKelceTDBet from './assets/travisKelceTDBet.svg';
import patrickMahomes from './assets/patrickMahomes.svg';
import greenBayFGBet from './assets/greenBayFGBet.svg';
import calvinRidley from './assets/Ridley_Calvin.svg';
import dandreSwift from './assets/RB.svg';

import queueSelector from './assets/queueHighlighter.svg'

import './Queue.css';

interface Person {
    id: string;
    name: string;
    image: string;
}

const dataFake = [
    {
        id: '1',
        image: steelersWinBet,
        name: 'Steelers Win Bet',
    },
    {
        id: '2',
        image: travisKelceTDBet,
        name: 'Travis Kelce TD Bet',
    },
    {
        id: '3',
        image: patrickMahomes,
        name: 'Patrick Mahomes',
    },
    {
        id: '4',
        image: greenBayFGBet,
        name: 'Green Bay FG Bet',
    },
    {
        id: '5',
        image: calvinRidley,
        name: 'Calvin Ridley',
    },
    {
        id: '6',
        image: dandreSwift,
        name: "D'Andre Swift",
    },
];

const getDragableItemStyle = (
    draggableStyle: any,
    isDragging: boolean,
    zIndex: number,
) => ({
    userSelect: 'none',
    zIndex: isDragging ? 9999 : zIndex,
    border: isDragging && '3px solid',
    borderImageSlice: isDragging && 1,
    borderImageSource:
        isDragging && 'linear-gradient(to right, #e47aff 0%, #45fafa 100%)',
    borderRight: isDragging && 0,
    ...draggableStyle,
});

const getArrowStyle = (isDragging: boolean) => ({
    background: isDragging ? '#45fafa' : '',
});

export default function Queue() {
    const [listPerson, setListPerson] = useState<Person[]>(dataFake);

    const onSortEnd = (result: DropResult): void => {
        const newList = swapArrayElements(
            listPerson,
            result.source.index,
            result.destination?.index,
        );
        setListPerson(newList);
    };

    return (
        <div className="wrap">
        <div className="queueSelector">
            <img src={queueSelector} alt="" />
        </div>
        <div className="queue-container">
            <h2>THE QUEUE</h2>
            <DragDropContext onDragEnd={onSortEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="queue-list"
                        >
                            {listPerson.map((person: Person, index: number) => (
                                <Draggable
                                    key={person.id}
                                    draggableId={person.id}
                                    index={index}
                                >
                                    {(provided: any, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            style={getDragableItemStyle(
                                                provided.draggableProps.style,
                                                snapshot.isDragging,
                                                listPerson.length - index,
                                            )}
                                            className="queue-item"
                                        >
                                            <div className="person">
                                                <img
                                                    className="avatar"
                                                    src={person.image}
                                                ></img>
                                                <span className="name">
                                                    {person.name}
                                                </span>
                                            </div>
                                            <p className="queue-item-number">
                                                {index + 1}
                                            </p>
                                            <div
                                                style={getArrowStyle(
                                                    snapshot.isDragging,
                                                )}
                                                className="queue-item-arrow"
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
        </div>
    );
}
