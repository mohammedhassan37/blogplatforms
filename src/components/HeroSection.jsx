import '../styles/HeroSection.css'
import pic from '../images/160252.jpg';

function HeroSection(){
return(
    <>
       <div className="hero-sections">
            <div className="article-section">
                <p id='featured-story'>Featured story</p>
                <h1 id='article-title'>The Future of AI: How Machine Learning is Transforming Industries</h1>
                <p className='text-color' id='article-desc'>Discover how artificial intelligence and machine learning are revolutionizing everything from healthcare to finance, and what this means for the future of work.</p>
                <span className='article-information text-color'><p> By Mohammed hassan </p>•<p>5 Min read </p>•<p>3 Days ago</p></span>
                <span className='article-tags'> <p>AI</p> <p>Machine Learning</p> <p>Technology</p> </span>
            </div>
            <div className="img-section">
               <img src={pic} alt="" />
            </div>
       </div>
    </>
)
}


export default HeroSection;

