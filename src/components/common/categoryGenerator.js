const categoryGenerator=(category)=>{
    if (category === "desserts") {
        return {
            title: 'Desserts',
            category: category,
            img: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (category === 'salads') {
        return {
            title: 'Salads',
            category: category,
            img: 'https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    }
    else if (category === 'main-dishes') {
        return {
            title: 'Main Dishes',
            category: category,
            img: 'https://images.pexels.com/photos/5718028/pexels-photo-5718028.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (category === 'quick-recipes') {
        return {
            title: 'Quick Recipes',
            category: category,
            img: 'https://images.pexels.com/photos/6294354/pexels-photo-6294354.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (category === 'healthy-recipes') {
        return {
            title: 'Healthy Recipes',
            category: category,
            img: 'https://images.pexels.com/photos/3872367/pexels-photo-3872367.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (category === 'drinks') {
        return {
            title: 'Drinks',
            category: category,
            img: 'https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (category === 'soups') {
        return {
            title: 'Soups',
            category: category,
            img: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    }else{
        return{}
    }
};

export default categoryGenerator;