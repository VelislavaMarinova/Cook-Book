import './OtherRecipes.css'
const OtherRecipes = () => {
    return (
        <li className="otherRecipes">
            <h3>Christmas pie</h3>
            <p>Description: Combine a few key Christmas flavours here to make a pie that both children and adults will adore</p>
            <div className="img">
                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2008/01/Christmas-pie-2ed9223.jpg?quality=90&webp=true&resize=300,272" />
            </div>
            <a className="button" href="#">
                Details
            </a>
        </li>
    )
};

export default OtherRecipes;