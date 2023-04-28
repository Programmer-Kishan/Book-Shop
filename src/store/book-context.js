import React, { useReducer } from 'react';

const listReducer = (state, action) => {
    if (action.type === 'add book') {
        state.push(action.val);
        console.log(state);
        return state; 
    } else if (action.type === 'increment book') {
        console.log("incremented");
        state[action.index].quantity += 1;
        console.log(state);
        return state;
    } else if (action.type === 'decrement book') {
        console.log("decremented");
        state[action.index].quantity -= 1;
        console.log(state);
        return state;
    } else if (action.type === 'remove book') {
        console.log("Book Removed");
        state.splice(action.index, 1);
        console.log(state);
        return state;
    }
}

const BookContext = React.createContext({
    bookList: [],
    onClick: () => {},
    onIncrement: () => {},
    onDecrement: () => {},
    onRemove: () => {}
});

export const BookContextProvider = (props) => {

    const [list, dispatchList] = useReducer(listReducer, []);

    const bookClicked = (book) => {
        console.log(book);
        dispatchList({type: "add book", val: book})
    }

    const incrementBook = (bookId) => {
        const ind = list.findIndex(ele => ele.bookId === bookId);
        dispatchList({type: "increment book", index: ind});
    }

    const decrementBook = (bookId) => {
        const ind = list.findIndex(ele => ele.bookId === bookId);
        dispatchList({type: "decrement book", index: ind});
    }

    const removeBook = (bookId) => {
        const ind = list.findIndex(ele => ele.bookId === bookId);
        dispatchList({type: "remove book", index: ind});
    }

    return (
        <BookContext.Provider value={{
            bookList: list,
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