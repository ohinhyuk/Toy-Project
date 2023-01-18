export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      // event.returnValue = "";
    };
    const enable = () => {
      window.addEventListener("beforeunload", listener);
    };
    const unable = () => {
      window.removeEventListener("beforeunload", listener);
    };
  
    return { enable, unable };
  };