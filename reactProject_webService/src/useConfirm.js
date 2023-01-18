export const useConfirm = (message , accepted , rejected) => {

    if(!accepted || typeof accepted !== "function"){
      return;
    }
    if(rejected && typeof rejected !== "function"){
        return;
      }
  
    const confirmAction = () => {
      if(confirm(message)){
        accepted();
      }else{
        rejected();
      }
    };
  
    return confirmAction;
  
  };
  