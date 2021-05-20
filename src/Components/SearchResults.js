import React from "react";
import Question from "./Question";
import { Link } from "react-router-dom";
import './SearchResult.css';
import Noresult from './images/noresult.svg';


class SearchResults extends React.Component {
  render() {
    
    const qs = require("qs");
    let query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).q;
    const filteredQuestions = this.props.questions.filter((question) => {
      if (question.title.toLowerCase().includes(query.toLowerCase()))
        return question;
    });
   
    if (filteredQuestions.length === 0)
      return (
        <div id="nomatch" className="justify-content-center">
        <img src={Noresult} alt=":(" id="noresult"></img>
        <h1>No matching results found for "{query}"</h1>
        <Link to="/askquestion" className="btn btn-warning" id="askbtn">Ask a Question!</Link>
        </div>
     
      );
    else
      return (
        <div id="background">
        <div id="foundmatch">
          <h4 id="heading">Search Results For "{query}"</h4>
          {filteredQuestions.map((question) => {
            return <Question question={question} key={question.id} />;
          })}
          </div>
          </div>
      );
  }
}

export default SearchResults;