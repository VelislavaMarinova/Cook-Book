
import './Home.css'
const Home = () => {
    return (<section id="dashboard-page" className="dashboard">
        <h1>Dashboard</h1>
        {/* Display ul: with list-items for All books (If any) */}
        <ul className="other-books-list">
            <li className="otherBooks">
                <h3>A Court of Thorns and Roses</h3>
                <p>Type: Fiction</p>
                <p className="img">
                    <img src="./images/book1.png" />
                </p>
                <a className="button" href="#">
                    Details
                </a>
            </li>
            <li className="otherBooks">
                <h3>Outlander</h3>
                <p>Type: Other</p>
                <p className="img">
                    <img src="/images/book2.png" />
                </p>
                <a className="button" href="#">
                    Details
                </a>
            </li>
            <li className="otherBooks">
                <h3>To Kill a Mockingbird</h3>
                <p>Type: Classic</p>
                <p className="img">
                    <img src="/images/book3.png" />
                </p>
                <a className="button" href="#">
                    Details
                </a>
            </li>
        </ul>
        {/* Display paragraph: If there are no books in the database */}
        <p className="no-books">No books in database!</p>
    </section>)
};
export default Home;