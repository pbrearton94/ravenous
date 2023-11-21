import React, { useState } from "react";
import "./SearchBar.css";
import Yelp from "../../util/Yelp";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
    return "";
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );

    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
          />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
          <a className="btn btn-success center" onClick={this.handleSearch}>
            Let's Go
          </a>
        </div>

        {/* <a className="btn btn-success center" onClick={this.handleSearch}>Let's Go</a> */}
      </div>
    );
  }
}

export default SearchBar;

// const SearchBar = ({searchYelp}) => {
//   const [searchCriteria, setSearchCriteria] = useState({
//     term: 'pizza',
//     location: 'Albany, ny',
//     sortBy: 'best_match'
//   });
//   const [sortBy, setSortBy] = useState('best_match');
//   const [term, setTerm] = useState();
//   const [location, setLocation] = useState();

//   let sortByOptions = {
//     'Best Match': 'best_match',
//     'Highest Rated': 'rating',
//     'Most Reviewed': 'review_count'
//   };

//   const handleSortByChange = (sortByOptionValue) => {
//     if (sortByOptionValue === 'Best Match'){
//       setSortBy({sortBy: 'best_match'});
//     }
//     else if (sortByOptionValue === 'Highest Rated'){
//       setSortBy({sortBy: 'rating'});
//     }else{
//       setSortBy({sortBy: 'review_count'});
//     }
//   }

//   const handleTermChange = (event) => {
//     setTerm({term: event.target.value});
//   }

//   const handleLocationChange = (event) => {
//     setLocation({location: event.target.value});
//   }

//   const handleSearch = (event) => {
//     event.preventDefault();
//     console.log('value of term: ' + JSON.stringify(term) + ', value of location: ' + JSON.stringify(location), ' ,value of sortBy: ' + JSON.stringify(sortBy));
//     // setSearchCriteria(searchYelp.term, searchYelp.location, searchYelp.sortBy);
//     // console.log('value of searchYelp: ' + JSON.stringify(searchYelp));
//     searchYelp(term.term, location.location, sortBy.sortBy);
//   }

//   const renderSortByOptions = () => {
//     return Object.keys(sortByOptions).map(sortByOption => {
//       let sortByOptionValue = sortByOptions[sortByOption];
//       console.log('sortByOptionValue: ' + sortByOptionValue);
//       return (<li className={getSortByClass(sortByOption)}
//                   id={sortByOptionValue}
//                   key={sortByOptionValue}
//                   onClick={() => {handleSortByChange(sortByOption)}}>
//                 {sortByOption}
//              </li>);
//     });
//   }

//   const getSortByClass = (sortByOption) => {
//     if (sortBy === sortByOption) {
//       return 'active';
//     }
//     return '';
//   }

//   return (
//     <>
//     <div className="SearchBar">
//         <div className="SearchBar-sort-options">
//           <ul>
//             {renderSortByOptions()}
//           </ul>
//         </div>
//         <div className="SearchBar-fields">
//           <input placeholder="Search Businesses" onChange={(event) => {handleTermChange(event)}} />
//           <input placeholder="Where?" onChange={(event) => {handleLocationChange(event)}}/>
//         </div>
//         <div className="SearchBar-submit">
//           <button onClick={(event) => {handleSearch(event)}}>Let's Go</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchBar;

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       term: '',
//       location: '',
//       sortBy: 'best_match'
//     };

//     this.handleTermChange = this.handleTermChange.bind(this);
//     this.handleLocationChange = this.handleLocationChange.bind(this);
//     this.handleSearch = this.handleSearch.bind(this);

//     this.sortByOptions = {
//       'Best Match': 'best_match',
//       'Highest Rated': 'rating',
//       'Most Reviewed': 'review_count'
//     };
//   }

//   getSortByClass(sortByOption) {
//     if (this.state.sortBy === sortByOption) {
//       return 'active';
//     }
//     return '';
//   }

//   }

//   render() {
//     return (
//       <div className="SearchBar">
//         <div className="SearchBar-sort-options">
//           <ul>
//             {this.renderSortByOptions()}
//           </ul>
//         </div>
//         <div className="SearchBar-fields">
//           <input placeholder="Search Businesses" onChange={this.handleTermChange} />
//           <input placeholder="Where?" onChange={this.handleLocationChange}/>
//         </div>
//         <div className="SearchBar-submit">
//           <a onClick={this.handleSearch}>Let's Go</a>
//         </div>
//       </div>
//     );
//   }
// }

// export default SearchBar;
