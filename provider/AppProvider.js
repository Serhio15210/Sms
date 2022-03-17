import React, {useContext, useState} from "react";


const AppContext = React.createContext(null);

const AppProvider = ({children}) => {
const [cardNumber,setCardNumber]=useState('')
const [cardData,setCardData]=useState([])

    return (
        <AppContext.Provider
            value={{
                cardNumber,setCardNumber,cardData,setCardData
            }}
        >
            {children}
        </AppContext.Provider>
    );
};


const useCardData = () => {
    const card = useContext(AppContext);
    return card;
};

export {AppProvider, useCardData};
