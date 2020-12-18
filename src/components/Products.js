import React from 'react';
import Card from './Card';
import './Products.css'


function Products() {
    return (
        <div className="products">
          <div className="products__row">
            <Card
            id="1"
            title="Balmain Shoes"
            price={159.99}
            image="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            rating={4}
             />

            <Card
            id="2"
            title="Converse"
            price={39.99}
            image="https://static01.nyt.com/images/2014/10/15/business/15trademark-pic1/15trademark-pic1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            rating={5}
             />
             <Card
            id="3"
            title="Balenciagas"
            price={59.99}
            image="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F02%2Fbalenciaga-triple-s-david-tourniaire-beauciel-shoes-53045-launch-001.jpg?q=75&w=800&cbr=1&fit=max"
            rating={2}
             />
             <Card
            id="4"
            title="Nike Shoes"
            price={80}
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
            rating={3}
             />
             <Card
            id="5"
            title="Adidas Shoes"
            price={59.99}
            image="https://i2.wp.com/plantbasednews.org/wp-content/uploads/2020/09/vegansamba.png?fit=1200%2C839&ssl=1"
            rating={4}
             />
             
          </div>
        </div>
    )
}

export default Products
