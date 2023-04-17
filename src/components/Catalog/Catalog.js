import './catalog.css'

import { useDataContext } from '../../contexts/DataContext';
import CategoryCard from './CategoryCard';
import Loading from '../loading/Loading';
import categoryGenerator from '../common/categoryGenerator';



const Catalog = () => {
    const { recipes,loading } = useDataContext();
    if(loading){
        return <Loading />
    }
    const categoriesSet = new Set(recipes.map(x => x.category))
    const categories = [...categoriesSet].map(cat => 
       categoryGenerator(cat)
    );

return (
    <section id="catalog-page" className="catalog">
        <h1>Cookbook Categories</h1>
        {categories.length?  <ul className="catalog__categories">
            {categories.map(x => <CategoryCard key={x.title} category={x} />)}
        </ul>: 
        <p className="no-recipes">No categories in database!</p>
        }
    </section>)
};

export default Catalog;