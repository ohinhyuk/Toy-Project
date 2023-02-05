import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categories, IToDO, toDoSelector, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDO) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);

    setToDos((prev) => {
      const targetIndex = prev.findIndex((ToDo) => ToDo.id === id);
      const newToDo = {
        text,
        id,
        category: name as any,
      };

      return [
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };

  const setToDos = useSetRecoilState(toDoState);

  const onDelete = () => {
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      return [...prev.slice(0, targetIndex), ...prev.slice(targetIndex + 1)];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== categories.DOING && (
        <button name={categories.DOING + ""} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.TO_DO && (
        <button name={categories.TO_DO + ""} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== categories.DONE && (
        <button name={categories.DONE + ""} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ToDo;
