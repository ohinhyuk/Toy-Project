export const useTabs = (initialValue, allTabs) => {
    const [currentIndex , setCurrentIndex] = useState(initialValue);
    if(!allTabs || !Array.isArray(allTabs)){
      return;
    }
    
    return{
      currentItem : allTabs[currentIndex],
      changeItem : setCurrentIndex
    };
  };