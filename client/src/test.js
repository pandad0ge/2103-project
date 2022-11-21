import React, { useState, useEffect } from "react";
import "./App.css";
import { Axios } from "axios";

// const Test = () => {
//     const [movieName, setMovieName] = useState("");
//     const [review, setReview] = useState("");
//     const [movieRviewList, setMovieList] = useState([]);

//     useEffect(() => {
//         Axios.get('http://localhost:3001/api/get').then((response) => {
//             console.log(response.data);
//         })

//     }, []);

//     const submitReview = () => {
//         Axios.post("http://localhost:3001/api/insert", {
//             movieName: movieName,
//             movieReview: review,
//         }).then(() => {
//             alert("successful insert");
//         });
//     };

//     return (
//         <div className="test">
//             <label>Name:</label>
//             <input type="text" name="movieName" onChange={(e) => { setMovieName(e.target.value) }} />
//             <label>Review:</label>
//             <input type="text" name="review" onChange={(e) => { setReview(e.target.value) }} />

//             <button onClick={submitReview}>Submit</button>

//             {movieRviewList.map((val) => {
//                 return <h1>MovieName: {val.movieName} | Movie Review: {val.movieReview}</h1>
//             })}
//         </div>
//     );
// };

function Test () {
    const [movieName, setMovieName] = useState("");
    const [review, setReview] = useState("");
    const [movieRviewList, setMovieList] = useState([]);

    // useEffect(() => {
    //     Axios.get('http://localhost:3001/api/get').then((response) => {
    //         console.log(response.data);
    //     })

    // }, []);

    // const submitReview = () => {
    //     Axios.post("http://localhost:3001/api/insert", {
    //         movieName: movieName,
    //         movieReview: review,
    //     }).then(() => {
    //         alert("successful insert");
    //     });
    // };

    return (
        <div className="test">
            <label>Name:</label>
            <input type="text" name="movieName"/>
            <label>Review:</label>
            <input type="text" name="review"/>

            <button>Submit</button>

            {/* {movieRviewList.map((val) => {
                return <h1>MovieName: {val.movieName} | Movie Review: {val.movieReview}</h1>
            })} */}
        </div>
    );
};

// function Test(){
//     return <div className="Test">Hello</div>
// }

export default Test;