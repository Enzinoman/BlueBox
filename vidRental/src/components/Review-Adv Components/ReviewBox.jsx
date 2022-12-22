import Review from "./Review.jsx";
import './Reviews.css'
import ad from '../../images/coupert-ad.png'
import star from '../../images/star.png'
import darkStar from '../../images/dark-star.png'

const ReviewBox = (props) => {
    const movieReviews = props.currentMovie.reviews;

    //gets average rating for a movie and rounds it down
    const getAvgRating = () => {
        let totalSum = 0;
        for (let element of movieReviews) {
            totalSum += element.stars;
        }
        return Math.floor(totalSum / (movieReviews.length));
    }

    //displays 1-5 stars based on int passed in as "rating", unused stars will be gray
    const showStarRating = (rating) => {
        return (
            <div className="starsDiv">
                <a className="star-container"><img src={rating > 0 ? star : darkStar} className="star"></img></a>
                <a className="star-container"><img src={rating > 1 ? star : darkStar} className="star"></img></a>
                <a className="star-container"><img src={rating > 2 ? star : darkStar} className="star"></img></a>
                <a className="star-container"><img src={rating > 3 ? star : darkStar} className="star"></img></a>
                <a className="star-container"><img src={rating > 4 ? star : darkStar} className="star"></img></a>
            </div>
        )
    }

    return (
        <div className="rev-container">
            <div className="root-review">
                <h2 className="words top-header">Reviews</h2>
                {/* Displays average rating for a movie and shows to total number of reviews */}
                <div className="review-header">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {showStarRating(getAvgRating())}<a className="words">{movieReviews.length} reviews</a>
                    </div>
                    <a className="words" href="/write-review">WRITE A REVIEW</a>
                </div>
                <hr></hr>
                {/* Displays all reviews from one movie from json file */}
                {movieReviews.map((item, index) => (
                    <Review showRating={showStarRating} movie={item} key={index} />
                ))}
                {/* Displays advertisement image below reviews */}
                <hr></hr>
                <div className="ad-img-div">
                    <a href="https://www.coupert.com/"><img className="advertise-img" src={ad}></img></a>
                </div>
            </div>
        </div>
    )
}

export default ReviewBox;