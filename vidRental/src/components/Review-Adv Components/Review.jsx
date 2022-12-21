

const Review = (props) => {
    const rating = props.movie.stars;

    return (
        <div className="oneReview">
            {/* Shows rating stars above username */}
            {props.showRating(rating)}
            <br></br>
            {/* Displays username and date review was published */}
            <a id="username" className="words user-date">{props.movie.user}</a><span> </span><a className="words user-date">{props.movie.date}</a>
            <br></br>
            {/* Displays random  */}
            <p className="words para">{props.movie.text}</p>
        </div>
    )
}
export default Review;