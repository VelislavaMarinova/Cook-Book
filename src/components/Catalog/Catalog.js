import { useContext } from 'react';
import { useDataContext } from '../../contexts/DataContext';
import RecipeCartd from '../RecipeCard/RecipeCard';
import CategoryCard from './CategoryCard';
const Catalog = () => {
    const categoriesSet = new Set()
    const { recipes } = useDataContext();
    recipes.map(x => categoriesSet.add(x.category));
    const categories=[]
    // console.log(categories);
    for (const item of categoriesSet) {
        if(item==="desserts"){
            categories.push({
                title:'Desserts',
                category: item,
                 img:'https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                })
        }
        else if(item === 'salads'){
            categories.push({
                title:'Salads',
                category: item,
                 img:'https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&w=1600'
                })
        }
        else if(item === 'main-dishes'){
            categories.push({
                title:'Main-dishes',
                category: item,
                 img:'https://static1.therecipeimages.com/wordpress/wp-content/uploads/2022/03/fresh-salad-recipes.jpg'
                })
        }else if(item=== 'quick-recipes'){
            categories.push({
                title:'Quick Recipes',
                category: item,
                 img:'https://www.sixsistersstuff.com/wp-content/uploads/2021/01/25-of-the-Best-30-Minute-Dinners.jpg'
                })
        }else if(item==='healthy-recipes'){
            categories.push({
                title:'Healthy Recipes',
                category: item,
                 img:'https://oursaltykitchen.com/wp-content/uploads/2021/07/healthy-dinner-ideas-featured-image.png'
                })
        }else if(item==='drinks'){
            categories.push({
                title:'Drinks',
                category: item,
                 img:'https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg?crop=1.00xw:0.752xh;0.00160xw,0.0673xh&resize=1200:*'
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