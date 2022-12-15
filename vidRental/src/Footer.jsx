import { useEffect } from 'react'
import Category from './Category.jsx'
import './footer.css'
import footerCategories from './FooterCategories.json'
import FooterMedia from './FooterMedia.jsx'
import TermsConditions from './TermsConditions.jsx'
import GradientGraphics from './GradientGraphics.jsx'


const Footer = () => {



    return (
        <div className='topFooter'>
            {/* Displays div with gradient background and Join/Sign Up buttons */}
            <GradientGraphics />
            <div className='footer'>
                <hr></hr>
                <div className='categories'>
                    {/* Iterates through category array and renders a category for each element in the array */}
                    {footerCategories.map((element, index) => (
                        <Category item={element} key={index} />
                    ))}
                </div>
                {/* Displays social media links */}
                <FooterMedia />
                {/* Displays terms and conditions */}
                <TermsConditions />
            </div>
        </div>
    )
}
export default Footer;