import { atom, selector } from "recoil";

export enum categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDO {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<categories>({
  key: "toDoCategory",
  default: categories.TO_DO,
});

export const toDoState = atom<IToDO[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const category = get(categoryState);
    const toDos = get(toDoState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
