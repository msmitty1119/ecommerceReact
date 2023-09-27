import productsData from '../data/products.json'
import { useState } from 'react';



const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterKey, setFilterKey] = useState('name'); 

 
  const filteredProducts = Object.values(productsData).filter((product) =>
    product[filterKey].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center">Products</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">
            <h4>Filter by:</h4>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="filterByName"
                name="filterKey"
                value="name"
                checked={filterKey === 'name'}
                onChange={() => setFilterKey('name')}
              />
              <label className="form-check-label" htmlFor="filterByName">
                Name
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="filterByBrand"
                name="filterKey"
                value="brand"
                checked={filterKey === 'brand'}
                onChange={() => setFilterKey('brand')}
              />
              <label className="form-check-label" htmlFor="filterByBrand">
                Brand
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="filterByCategory"
                name="filterKey"
                value="category"
                checked={filterKey === 'category'}
                onChange={() => setFilterKey('category')}
              />
              <label className="form-check-label" htmlFor="filterByCategory">
                Category
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search for a product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="container">
            <div className="row">
              {filteredProducts.map((product) => (
                <div className="col-md-4" key={product.id}>
                  <div className="card">
                    <img src={product.imageURL} alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        Price: ${product.price} Brand: {product.brand} Category: {product.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Products;