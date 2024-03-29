import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minute",
  default: 0,
});

export const minuteSelector = selector({
  key: "minuteSelector",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = +newValue * 60;
    set(minuteState, minutes);
  },
});
