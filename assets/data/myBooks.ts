// Import the Book class
import { Book } from '../../app/bookInfo';

// Export an array of books called BOOKS
export const BOOKS: Book[] = [
    { 
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        genre: 'Mystery',
        pubdate: 'May 24th, 2012',
        picture: './assets/images/gonegirl.jpg'
    },

    { 
        title: 'Memoirs of a Geisha',
        author: 'Arthur Golden  ',
        genre: 'Historical Fiction',
        pubdate: 'September 27th, 1997',
        picture: './assets/images/geisha.jpg'
    },

    { 
        title: 'All the Light We Cannot See',
        author: 'Anthony Doerr',
        genre: 'Historical Fiction',
        pubdate: 'May 6th, 2014',
        picture: './assets/images/lights.jpg'
    },

    { 
        title: 'Nineteen Eighty-Four',
        author: 'George Orwell',
        genre: 'Sci-Fi',
        pubdate: 'June 8th, 1949',
        picture: './assets/images/1984.jpg'
    }

];