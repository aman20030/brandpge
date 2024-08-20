const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>your feet deserve the best</h1>
                <p>your feet deserve the best your feet deserve the best  your feet deserve the best   your feet deserve the best   your feet deserve the best   your feet deserve the best your feet deserve the best   your feet deserve the best your feet deserve the best   your feet deserve the best    your feet deserve the best   your feet deserve the best   your feet deserve the best</p>
                <div className="hero-btn">
                    <button>shop now</button>
                    <button className="secondary-btn">category</button>
                </div>
                <div className="shopping">
                   <h1> Also Avilable on</h1>
                   <div className="brand-icons">
                    <img src="/images/amazonlogo.jpeg "   alt=""/>
                    <img src="/images/flipkartLogo.jpeg" alt=""/>
                   </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/nikeimage.jpeg" alt="nike_image" />
            </div>
           
        </main>
    )
};
export default HeroSection;