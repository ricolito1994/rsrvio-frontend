import React, {
    useEffect, 
    useContext, 
    useState,
    createContext
} from 'react';

export const AppContext = createContext<any>(null)

const AppContextProvider = ({children}: any) : React.ReactElement => {
    return (
        <AppContext.Provider value={{
            /**
             * put values here to be used globally
             * throughout SPA app
             * and also to track changes
             * of globally used values
             */
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;