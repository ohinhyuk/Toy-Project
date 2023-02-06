import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e17055" : props.theme.cardColor};
`;

interface IDraggableCard {
  todo: string;
  index: number;
}

function DraggableCard({ todo, index }: IDraggableCard) {
  console.log("rendered", todo);
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
