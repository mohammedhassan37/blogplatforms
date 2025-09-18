import '../styles/HeroSection.css'


function HeroSection(){
return(
    <>
       

       <div className="hero-sections">
            <div className="article-section">
                <p id='featured-story'>Featured story</p>
                <h1 id='article-title'>The Future of AI: How Machine Learning is Transforming Industries</h1>
                <p>desc</p>
                <span className='article-information'><p>1</p> <p>2</p> <p>3</p></span>
                <span className='article-tags'> <p>1</p> <p>2</p> <p>3</p> </span>
            </div>
            <div className="img-section">
               <img src="src\assets\react.svg" alt="" />
            </div>
       </div>
    </>
)
}


export default HeroSection;

