import facebookIcon from './assets/facebook.png'
import instagramIcon from './assets/instagram.png'
import myspaceIcon from './assets/myspace.png'
import twitterIcon from './assets/twitter.png'
import appleStore from './assets/app-store.png'
import googleStore from './assets/google-play.png'


const FooterMedia = () => {

    return (
        <div className='media'>
            {/* Displays social media icons */}
            <div className='follow-us'>
                <a className='media-a'>Follow Us<br></br></a>
                <div className='iconsDiv'>
                    <a href='https://www.facebook.com' className='smallIcons'><img src={facebookIcon}></img></a>
                    <a href='https://www.instagram.com' className='smallIcons'><img src={instagramIcon}></img></a>
                    <a href='https://www.myspace.com' className='smallIcons'><img src={myspaceIcon}></img></a>
                    <a href='https://www.twitter.com' className='smallIcons'><img src={twitterIcon}></img></a>

                </div>

            </div>
            {/* Displays App Store and Google Play icons */}
            <div className='download-app'>
                <a className='media-a'>Download Our App<br></br></a>
                <a className='media-a'>Rent From Anywhere<br></br></a>
                <a href='https://www.apple.com' ><img src={appleStore} className='apple-google-logo'></img></a>
                <a href='https://www.google.com' ><img src={googleStore}className='apple-google-logo'></img></a>
            </div>
        </div>
    )
}
export default FooterMedia;