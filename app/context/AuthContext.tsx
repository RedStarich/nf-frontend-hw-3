import { createContext, useReducer } from "react";

export const AuthContext = createContext({});

export const authReducer = (state : any, action : any) => {
        switch (action.type) {
        case "login":
            return { user: action.payload, isAuthenticated: true};
        case "logout":
            return { user: null, isAuthenticated: false};
        default:
            return state;
    }
};

export const AuthContextProvider = ({children} : {children: any}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    console.log(state);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}
