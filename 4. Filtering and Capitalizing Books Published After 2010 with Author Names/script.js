const books = [
  {title: 'The Hunger Games', author: 'suzanne collins', year: 2008},
  {title: 'The Women: A Novel', author: 'T.C. Boyle', year: 2009},
  {title: 'Olive Kitteridge: Fiction', author: 'Elizabeth Strout', year: 2009},
  {title: 'The Elegance of the Hedgehog ', author: 'Muriel Barbery, Alison Anderson', year: 2009},
  {title: 'The Catcher in the Rye', author: 'j.d. salinger', year: 1951},
  {title: 'Pride and Prejudice', author: 'jane austen', year: 1813},
  {title: 'Harry Potter and the Philosopher\'s Stone', author: 'j.k. rowling', year: 1997},
  {title: 'The Lord of the Rings', author: 'j.r.r. tolkien', year: 1954},
  {title: 'The Hobbit', author: 'j.r.r. tolkien', year: 1937},
  {title: 'Doglapan (The Hard Truth about Life and Start-Ups) ', author: 'Ashneer Grover', year: 2022}
];

const filteredBooks = books.filter(book => book.year >= 2010);
const capitalizedAuthors = filteredBooks.map(book => ({title: book.title, author: book.author.toUpperCase(), year: book.year}));

console.log(capitalizedAuthors);
