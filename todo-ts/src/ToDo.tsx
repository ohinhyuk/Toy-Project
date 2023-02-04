import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDO, toDoState } from "./atoms";

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

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
