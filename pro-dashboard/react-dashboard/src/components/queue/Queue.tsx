import React, { FC, useCallback, useState } from 'react';
import { swapArrayElements } from '../../utils/generalUtils';
import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
} from 'react-beautiful-dnd';

import './Queue.css';

interface Person {
    id: string;
    name: string;
    image: string;
}

const dataFake = [
    {
        id: '1',
        image: 'https://www.takadada.com/wp-content/uploads/2019/07/Cr-7.jpg',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '2',
        image: 'https://www.takadada.com/wp-content/uploads/2019/07/Toni-Kross.jpg',
        name: 'Toni Kroos',
    },
    {
        id: '3',
        image: 'https://vtv1.mediacdn.vn/thumb_w/650/2020/9/13/anh-avatar-1599972574845705232408.jpg',
        name: 'Cristiano Ronaldo',
    },
    {
        id: '4',
        image: 'https://cdnmedia.thethaovanhoa.vn/Upload/B0g2ZnIe48e9au7dkcAV3w/files/000039/0000000000000000000211/00000262/00026/0019/001/009/0002/5/Cau%20chuyen%20ve%20mot%20huyen%20thoai.jpg',
        name: 'Toni Kroos',
    },
    {
        id: '5',
        image: 'https://i1.wp.com/vi.ghienbongda.vn/wp-content/uploads/2020/04/avatar1-5106d-0800.jpg?resize=630%2C400&ssl=1',
        name: 'Toni Kroos',
    },
    {
        id: '6',
        image: 'https://www.takadada.com/wp-content/uploads/2019/07/Antoine-Griezmann-2.jpg',
        name: 'Cristiano Ronaldo',
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
    );
}
