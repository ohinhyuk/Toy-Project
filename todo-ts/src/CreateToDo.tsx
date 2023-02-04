import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);

  const onValid = ({ toDo }: IForm) => {
    setValue("toDo", "");
    setToDos((current) => [
      ...current,
      { text: toDo, id: Date.now(), category: "TO_DO" },
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
