import "../Styles/Style-Featured.css";
import ItemImage from "../Images/Menu/Tea/GreenTea.jpg";
import Rating from "./Rating.jsx";
import ButtonRect from "../Components/ButtonRect.jsx"


const Featured = () => {
    return (
        <section id="featured" class="featured">

            <h1>Featured</h1>
            <p class="color-gray">The Specials of the Day!, buy them now for they are only sold for today!</p>
        
            <div class="row">
                <div class="col">
                        <img class="item-image" src={ItemImage} alt="Food Item"/>
                    </div>
                <div class="col-2">
                    <h2 class="align-left" text-align="left">Green Tea &nbsp;&nbsp; ₱ 59.99</h2>
                    <p class="align-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque metus ut purus hendrerit, quis bibendum.</p>


                    <div class="row">
                        <div class="col">
                            <h3>Rating:</h3>
                        </div>
                        <div class="col">
                            <Rating rating="5"/>
                        </div>
                    </div>
                <ButtonRect/>
     
                </div>
            </div>
        </section>
    )
}

export default Featured;