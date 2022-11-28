import React, { useEffect, useState } from 'react';
import Category from './Category';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://resale-books-server-anny27-pixel.vercel.app/categories")
            .then((res) => res.json())
            .then((cat) => setCategories(cat))
            .catch((err) => console.log(err));
    }, []);
    return (
        <section className="py-5">
            <h1 className="d-flex justify-content-center fw-bold text-primary mt-5 ">Choose your Books By Category</h1>

            <div className="container category-container my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                    {categories.map((category) => (
                        <Category
                            key={category._id}
                            category={category}
                        ></Category>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;