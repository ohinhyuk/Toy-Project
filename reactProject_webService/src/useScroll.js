export const useScroll = () => {
    const [xy, useXy] = useState({
      x: 0,
      y: 0
    });
  
    const onScroll= () =>{
      useXy({
        x : window.scrollX ,
         y :window.scrollY}
         );
    }
  
    useEffect( ()=>{
      
      window.addEventListener("scroll" , onScroll);
      
      return () => window.removeEventListener("scroll" ,onScroll);
    
    }, [])
  
    return xy;
  };