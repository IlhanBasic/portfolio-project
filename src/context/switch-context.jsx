import { useState } from "react";
import { createContext } from "react";
export const LightMode = createContext({
    checked:false
});
export default function LightModeProvider({children}){
    const [checked,setChecked] = useState(false);
    function handleChange(){
        setChecked(state=>!state);
    }
    const contextValue={
        checked,
        handleChange
    }
    return <LightMode.Provider value={contextValue}>
        {children}
    </LightMode.Provider>
}