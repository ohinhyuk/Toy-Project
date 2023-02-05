import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);

  const onValid = ({ toDo }: IForm) => {
    setValue("toDo", "");
    setToDos((current) => [
      ...current,
      { text: toDo, id: Date.now(), category },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: "Please write a To Do" })}
          type="text"
          placeholder="Write a name"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default CreateToDo;
