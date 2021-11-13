import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: {
        _id:"618e4b36399c994b4509ca66",
        username:"testing",
        email:"testing@gmail.com",
        profilePicture:"f2.jpg",
        followings: {
            0:"618e4a59399c994b4509ca5e"
        }
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch, }}>

            {children}
        </AuthContext.Provider>
    )
}