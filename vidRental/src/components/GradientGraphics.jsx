import './gradientDiv.css'

const GradientGraphics = () => {

    return (
        //displays gradient graphic
        <div className='gradientDiv'>
            {/* Displays Join Text Club element */}
            <div className="gradientSubDiv">
                <a className="gradientTextLarge">Join BlueFrog Text Club<br></br></a>
                <a className="gradientTextSmall">Get members-only deals sent straight to your phone<br></br></a>
                <button className="gradientButton">JOIN NOW</button>
            </div>
            {/* Displays Stay In The Loop element */}
            <div className="gradientSubDiv">
                <a className="gradientTextLarge">Stay In The Loop<br></br></a>
                <a className="gradientTextSmall">Be the first to hear about new releases and special offers by email<br></br></a>
                <button className="gradientButton">SIGN UP</button>
            </div>
        </div>
    )
}
export default GradientGraphics;