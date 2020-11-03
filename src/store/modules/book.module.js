
import {bookService} from '@/services/book.service.js';


export default {
    state: {
        books: null,
        booksFilterBy: {
            txt: '',
            price: 0
        },
        reviews: []
    },
    getters: {
        books(state){
            return state.books;
        },
        booksToShow(state) {
            const books = state.books
            if (state.booksFilterBy.txt !== ""){
                return books.filter((book) =>
                    book.title.includes(state.booksFilterBy.txt)
                );
            }
            const minPrice = +state.booksFilterBy.price;
            if (minPrice > 0){
                return books.filter((book) => book.listPrice.amount > minPrice);
            }
            return books;
        }
    },
    mutations: {
        setBooks(state, { books }) {
            state.books = books
        },
        removeBook(state, { id }) {
            const idx = state.books.findIndex(book => book.id === id)
            state.books.splice(idx, 1)
        },
        saveBook(state, { book }) {
            const idx = state.books.findIndex(currBook => book.id === currBook.id)
            if (idx === -1) state.books.unshift(book)
            else state.books.splice(idx, 1, book)
        },
        setBooksFilterBy(state, { filterBy }) {
            state.booksFilterBy = filterBy
        }
    },
    actions: {
        async loadBooks(context) {
            const books = await bookService.query()
            context.commit({ type: 'setBooks', books })
        },
        async removeBook({ commit }, { id }) {
            await bookService.remove(id)
            commit({ type: 'removeBook', id })
        },
        async saveBook({ commit }, { book }) {
            const savedBook = await bookService.save(book)
            commit({ type: 'saveBook', book: savedBook })
            return savedBook
        },
        async getBook(context, { id }) {
            return id ? await bookService.get(id) : bookService.getEmptyBook()
        }
    },
    modules: {}
}