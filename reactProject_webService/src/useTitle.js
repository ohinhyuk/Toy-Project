
export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
  
    const updateTitle = () => {
      const t = document.querySelector("title");
      t.innerText = title;
    };
    useEffect(updateTitle, [title]);
  
    return setTitle;
  };