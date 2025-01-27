import React, { useState } from 'react';
import  { Component } from 'react';
import './App.css';
import Home from './components/home';

// function App() {
//   const [state] = useState({
//     books: [
//       {
//         id: 1,
//         title: "فن الحرب",
//         author: "سون تزو",
//         isbn: "9780140439199",
//       },
//       {
//         id: 2,
//         title: "الأوديسة",
//         author: "هوميروس",
//         isbn: "9780140268867",
//       },
//       {
//         id: 3,
//         title: "1984",
//         author: "جورج أورويل",
//         isbn: "9780451524935",
//       },
//       {
//         id: 4,
//         title: "الجريمة والعقاب",
//         author: "فيودور دوستويفسكي",
//         isbn: "9780140449136",
//       },
//       {
//         id: 5,
//         title: "البؤساء",
//         author: "فيكتور هوجو",
//         isbn: "9780140444308",
//       },
//       {
//         id: 6,
//         title: "الغريب",
//         author: "ألبير كامو",
//         isbn: "9780679720201",
//       },
//       {
//         id: 7,
//         title: "هاري بوتر وحجر الفيلسوف",
//         author: "ج. ك. رولينج",
//         isbn: "9780747532743",
//       },
//       {
//         id: 8,
//         title: "الأمير",
//         author: "نيكولو مكيافيلي",
//         isbn: "9780140449150",
//       },
//       {
//         id: 9,
//         title: "موبي ديك",
//         author: "هرمان ملفيل",
//         isbn: "9780142437247",
//       },
//       {
//         id: 10,
//         title: "الكوميديا الإلهية",
//         author: "دانتي أليغييري",
//         isbn: "9780140448955",
//       },
//       {
//         id: 11,
//         title: "آنا كارنينا",
//         author: "ليو تولستوي",
//         isbn: "9780143035008",
//       },
//       {
//         id: 12,
//         title: "الحارس في حقل الشوفان",
//         author: "ج. د. سالينجر",
//         isbn: "9780316769488",
//       },
//       {
//         id: 13,
//         title: "الخيميائي",
//         author: "باولو كويلو",
//         isbn: "9780061122415",
//       },
//       {
//         id: 14,
//         title: "قصة مدينتين",
//         author: "تشارلز ديكنز",
//         isbn: "9780141439600",
//       },
//       {
//         id: 15,
//         title: "الشمس تشرق أيضًا",
//         author: "إرنست همنغواي",
//         isbn: "9780743297332",
//       },
//     ],
//   });

//   return (
//     <div className="App">
//       <Home books={state.books} />
//     </div>
//   );
// }

// export default App;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: "فن الحرب",
          author: "سون تزو",
          isbn: "9780140439199",
        },
        {
          id: 2,
          title: "الأوديسة",
          author: "هوميروس",
          isbn: "9780140268867",
        },
        {
          id: 3,
          title: "1984",
          author: "جورج أورويل",
          isbn: "9780451524935",
        },
        {
          id: 4,
          title: "الجريمة والعقاب",
          author: "فيودور دوستويفسكي",
          isbn: "9780140449136",
        },
        {
          id: 5,
          title: "البؤساء",
          author: "فيكتور هوجو",
          isbn: "9780140444308",
        },
        {
          id: 6,
          title: "الغريب",
          author: "ألبير كامو",
          isbn: "9780679720201",
        },
        {
          id: 7,
          title: "هاري بوتر وحجر الفيلسوف",
          author: "ج. ك. رولينج",
          isbn: "9780747532743",
        },
        {
          id: 8,
          title: "الأمير",
          author: "نيكولو مكيافيلي",
          isbn: "9780140449150",
        },
        {
          id: 9,
          title: "موبي ديك",
          author: "هرمان ملفيل",
          isbn: "9780142437247",
        },
        {
          id: 10,
          title: "الكوميديا الإلهية",
          author: "دانتي أليغييري",
          isbn: "9780140448955",
        },
        {
          id: 11,
          title: "آنا كارنينا",
          author: "ليو تولستوي",
          isbn: "9780143035008",
        },
        {
          id: 12,
          title: "الحارس في حقل الشوفان",
          author: "ج. د. سالينجر",
          isbn: "9780316769488",
        },
        {
          id: 13,
          title: "الخيميائي",
          author: "باولو كويلو",
          isbn: "9780061122415",
        },
        {
          id: 14,
          title: "قصة مدينتين",
          author: "تشارلز ديكنز",
          isbn: "9780141439600",
        },
        {
          id: 15,
          title: "الشمس تشرق أيضًا",
          author: "إرنست همنغواي",
          isbn: "9780743297332",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Home books={this.state.books} />
      </div>
    );
  }
}

export default App;