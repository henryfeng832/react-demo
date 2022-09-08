import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {useEffect, useState} from "react";


const DragAndDropList = () => {
    const defaultList = [0, 1, 2, 3]
    const [itemList, setItemList] = useState(defaultList)
    const [checked, setChecked] = React.useState([0]);

    useEffect(() => {
        console.log(itemList)
    }, [itemList])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleDrop = (droppedItem) => {
        console.log(droppedItem)
        if (!droppedItem.destination) return;
        var updatedList = [...itemList];
        // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        // Add dropped item
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        // Update State
        setItemList(updatedList);
    }

    return (
        <DragDropContext onDragEnd={handleDrop}>
            <Droppable droppableId="list-container">
                {(provided) => (
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {itemList.map((value, index) => {
                            const labelId = `checkbox-list-label-${value}`;
                            return (
                                <Draggable key={value+ 10} draggableId={labelId} index={index}>
                                    {(provided) => (
                                        <ListItem
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="comments">
                                                    <CommentIcon />
                                                </IconButton>
                                            }
                                            disablePadding
                                        >
                                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={checked.indexOf(value) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                            </ListItemButton>
                                        </ListItem>
                                    )}
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>

        </DragDropContext>
    );
}

export default DragAndDropList
