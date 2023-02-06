import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "todo",
  default: {
    "To Do": ["a", "b", "c"],
    Doing: ["d", "e"],
    Done: ["f"],
  },
});
