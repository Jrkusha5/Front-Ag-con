import { createContext, useEffect,useReducer } from "react";

const intialState={
    user: localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user")) : null,
    role: localStorage.getItem("role") || null,
    token: localStorage.getItem("token") || null,
};

export const authContext =createContext(intialState);

const authReducer= (state,action)=>{
    switch(action.type){
        case 'LOGIN_START':
            return{
 
                user:null,
                role:null,
                token:null,
            };
            case "LOGIN_SUCCESS":
                return{
                    user:action.payload.user,
                    token:action.payload.token,
                    role:action.payload.role
                };

                case 'LOGOUT':
                    return{
                        user:null,
                        role:null,
                        token:null
                    };

                    default:
                    return state;

    }
};

export const AuthContextProvider = ({children})=>{
    const [state, dispatch]= useReducer(authReducer,intialState)
    useEffect(()=>{
        localStorage.getItem("user", JSON.stringify(state.user))
        localStorage.getItem("token",state.token)
        localStorage.getItem("role",state.role)
    }, [state]);

    return (
    <authContext.Provider value={{user:state.user, 
    token:state.token, 
    role:state.role, dispatch,
    }} 
    >
        {children}
    </authContext.Provider>
    )
}