import { MoralisProvider } from "react-moralis";
import SmDeposit from "./SmDeposit";



const App = () => {


  return (
    <MoralisProvider initializeOnMount = {false}>
        
        <SmDeposit />
      
        
     </MoralisProvider> 
  )   
};

export default App;