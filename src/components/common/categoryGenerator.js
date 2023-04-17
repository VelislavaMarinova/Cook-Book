const categoryGenerator=(cat)=>{
    if (cat === "desserts") {
        return {
            title: 'Desserts',
            category: cat,
            img: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (cat === 'salads') {
        return {
            title: 'Salads',
            category: cat,
            img: 'https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    }
    else if (cat === 'main-dishes') {
        return {
            title: 'Main Dishes',
            category: cat,
            img: 'https://images.pexels.com/photos/5718028/pexels-photo-5718028.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (cat === 'quick-recipes') {
        return {
            title: 'Quick Recipes',
            category: cat,
            img: 'https://images.pexels.com/photos/6294354/pexels-photo-6294354.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (cat === 'healthy-recipes') {
        return {
            title: 'Healthy Recipes',
            category: cat,
            img: 'https://images.pexels.com/photos/3872367/pexels-photo-3872367.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (cat === 'drinks') {
        return {
            title: 'Drinks',
            category: cat,
            img: 'https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    } else if (cat === 'soups') {
        return {
            title: 'Soups',
            category: cat,
            img: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
    }else{
        return{}
    }
};

export default categoryGenerator;