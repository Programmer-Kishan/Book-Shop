import React, { useReducer } from 'react';

const listReducer = (state, action) => {

}

const BookContext = React.createContext({
    bookList: [],
    onClick: () => {}
});

export const BookContextProvider = (props) => {

    const [list, dispatchList] = useReducer(listReducer, []);

    const bookClicked = (bookID) => {
        console.log(bookID);
    }

    return (
        <BookContext.Provider value={{
            bookList: list,
            onClick: bookClicked
        }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContext;