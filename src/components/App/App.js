import React, { useState } from "react";
import "./App.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((businesses) => {
      console.log("term: " + term);
      setBusinesses(businesses);
    });
  };

  return (
    <>
      <div className="App">
        <h1>Not Yelp™</h1>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    </>
  );
};
// class App extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       businesses: []
//     };
//     this.searchYelp = this.searchYelp.bind(this);
//   }

//   searchYelp(term, location, sortBy){
//     console.log(`You are searching for ${term}, ${location}, and ${sortBy}`)
//     Yelp.search(term, location, sortBy).then((businesses)=>{
//       this.setState({businesses: businesses});
//     });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Not Yelp</h1>
//         <SearchBar searchYelp={this.searchYelp} />
//         <BusinessList businesses={this.state.businesses} />
//       </div>
//     );
//   }
// }

export default App;
