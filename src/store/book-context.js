import React, { useState, useReducer } from 'react';

const listReducer = (state, action) => {
    if (action.type === 'add book') {
        const books = state.map(book => book.title)
        if (books.includes(action.val.title)) {
            let index = state.findIndex(book => book.bookId === action.val.bookId)
            state[index].quantity = 1;
        } else {
            state.push(action.val);
        }
        // console.log(state);
        return state; 
    } else if (action.type === 'increment book') {
        console.log("incremented");
        state[action.index].quantity += 1;
        return state;
    } else if (action.type === 'decrement book') {
        console.log("decremented");
        state[action.index].quantity -= 1;
        return state;
    } else if (action.type === 'remove book') {
        console.log("Book Removed");
        state[action.index].quantity = 0;
        return state;
    }
}

const BookContext = React.createContext({
    bookList: [],
    totalBooks: 0,
    onClick: () => {},
    onIncrement: () => {},
    onDecrement: () => {},
    onRemove: () => {}
});

export const BookContextProvider = (props) => {

    const [totalBooks, setTotalBooks] = useState(0);

    const [list, dispatchList] = useReducer(listReducer, []);

    const bookClicked = (book) => {
        // console.log(book);
        dispatchList({type: "add book", val: book});
        setTotalBooks(prevState => prevState + 1);
        // console.log(totalBooks);
    }

    const incrementBook = (bookId) => {
        const ind = list.findIndex(ele => ele.bookId === bookId);
        dispatchList({type: "increment book", index: ind});
        setTotalBooks(prevState => prevState + 1);
        // console.log(totalBooks);
    }

    const decrementBook = (bookId) => {
        const ind = list.findIndex(ele => ele.bookId === bookId);
        dispatchList({type: "decrement book", index: ind});
        setTotalBooks(prevState => prevState - 1);
        // console.log(totalBooks);
    }

    const removeBook = (bookId) => {
        const ind = list.findIndex(ele => ele.bookId === bookId);
        dispatchList({type: "remove book", index: ind});
        setTotalBooks(prevState => prevState - 1);
        // console.log(totalBooks);
    }

    

    return (
        <BookContext.Provider value={{
            bookList: list,
            totalBooks: totalBooks,
            addBook: bookClicked,
            onIncrement: incrementBook,
            onDecrement: decrementBook,
            onRemove: removeBook
        }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContext;