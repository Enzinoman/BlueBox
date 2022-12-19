import Category from './Category.jsx'
import './footer.css'
import footerCategories from './FooterCategories.json'
import FooterMedia from './FooterMedia.jsx'
import TermsConditions from './TermsConditions.jsx'
import { useState } from 'react'
import SlidingDiv from './SlidingDiv.jsx'
import { useEffect } from 'react'


const Footer = () => {
    const [selection, setSelection] = useState('');
    const [footerCategoryArray, setFooterCategoryArray] = useState(footerCategories)

    const footerProps = {
        selection, setSelection,
        footerCategoryArray, setFooterCategoryArray
    }


    return (
        <div className='topFooter'>
            {/* Displays div with gradient background and Join/Sign Up buttons */}
            <div className='footer'>
                {selection === '' ? 
                <hr></hr>
                :
                <SlidingDiv {...footerProps}/>}
                <div className='categories'>
                    {/* Iterates through category array and renders a category for each element in the array */}
                    {footerCategoryArray.map((element, index) => (
                        <Category {...footerProps} item={element} key={index} column={index} />
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