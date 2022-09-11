import React, { useContext, useEffect } from "react";
import { GlobalStateInterface, GlobalStateProvider, useGlobalState } from '../../utils/globalStateProvider';
const Home = () => {
   const { setGlobalState } = useGlobalState();
   const { globalState } = useGlobalState();
   useEffect(() => {
      setGlobalState((prev) => ({ ...prev, loading: true }));
      console.log(globalState.loading)
   },[])
   return (
      <div>
         <h1>
            Welcoming to Rick and Morty Universe
         </h1>
         <p>This is a fan site to search for chracters, episodes and more.</p>
      </div>
   )
}

export default Home;