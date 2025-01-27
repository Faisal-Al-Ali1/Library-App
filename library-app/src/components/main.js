import React from 'react';

// const Main = ({ books }) => {
//   return (
//     <main>
//       {books.map((book) => (
//         <div className="card" key={book.id}>
//           <h3>{book.title}</h3>
//           <p>Author: {book.author}</p>
//           <p>Book # : {book.isbn}</p>
//         </div>
//       ))}
//     </main>
//   );
// };

// export default Main;



class Main extends React.Component {
  render() {
    const { books } = this.props; // Destructure books from props
    return (
      <main>
        {books.map((book) => (
          <div className="card" key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Book # : {book.isbn}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default Main;