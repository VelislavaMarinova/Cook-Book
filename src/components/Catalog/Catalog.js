import { useContext } from 'react';
import { useDataContext } from '../../contexts/DataContext';
import RecipeCartd from '../RecipeCard/RecipeCard';
import CategoryCard from './CategoryCard';
const Catalog = () => {
    const categoriesSet = new Set()
    const { recipes } = useDataContext();
    recipes.map(x => categoriesSet.add(x.category));
    const categories = []
    // console.log(categories);
    for (const item of categoriesSet) {
        console.log(item);
        if (item === "desserts") {
            categories.push({
                title: 'Desserts',
                category: item,
                img: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1600'
            })
        }
        else if (item === 'salads') {
            categories.push({
                title: 'Salads',
                category: item,
                img: 'https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&w=1600'
            })
        }
        else if (item === 'main-dishes') {
            categories.push({
                title: 'Main-dishes',
                category: item,
                img: 'https://images.pexels.com/photos/5718028/pexels-photo-5718028.jpeg?auto=compress&cs=tinysrgb&w=1600'
            })
        } else if (item === 'quick-recipes') {
            categories.push({
                title: 'Quick Recipes',
                category: item,
                img: 'https://images.pexels.com/photos/6294354/pexels-photo-6294354.jpeg?auto=compress&cs=tinysrgb&w=1600'
            })
        } else if (item === 'healthy-recipes') {
            categories.push({
                title: 'Healthy Recipes',
                category: item,
                img: 'https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=1600'
            })
        } else if (item === 'drinks') {
            categories.push({
                title: 'Drinks',
                category: item,
                img: 'https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=1600'
            })
        } else if (item === 'soups') {
            categories.push({
                title: 'Soups',
                category: item,
                img: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1600'
            })
        }

    }
    console.log(categories);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Cookbook Categories</h1>
            {/* Display ul: with list-items for All books (If any) */}
            <ul className="other-recipes-list">
                {categories.map(x => <CategoryCard key={x.title} category={x} />)}

            </ul>
            {/* Display paragraph: If there are no books in the database */}
            {/* <p className="no-recipes">No Recipes in database!</p> */}
        </section>)
};
export default Catalog;