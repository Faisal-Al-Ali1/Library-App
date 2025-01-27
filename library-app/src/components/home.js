import React from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

// const Home = ({ books }) => {
//     return (
//         <div>
//             <Header />
//             <Main books={books} />
//             <Footer />
//         </div>
//     );
// };

// export default Home;



class Home extends React.Component {
  render() {
    const { books } = this.props; // Destructure books from props
    return (
      <div>
        <Header />
        <Main books={books} />
        <Footer />
      </div>
    );
  }
}

export default Home;