import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

interface IArea {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Area = styled.div<IArea>`
  flex-grow: 1;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#b2bec3"
      : props.draggingFromThisWith
      ? "#636e72"
      : "#dfe6e9"};
`;

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IBoard {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoard) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((todo, index) => (
              <DraggableCard key={todo} todo={todo} index={index} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
