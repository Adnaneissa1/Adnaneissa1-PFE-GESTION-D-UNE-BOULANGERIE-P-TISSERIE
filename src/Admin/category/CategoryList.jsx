import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, deleteCategory } from './sliceCategories';
import './category.css'; // Import your custom CSS (optional)
import { Link, useNavigate } from 'react-router-dom';
function CategoryList() {
  const categories = useSelector(state => state.category.categories); // Use `categories` for clarity
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch categories on component mount
  }, [dispatch]); // Only run when dispatch changes

  const handleDelete = async (categoryId) => {
    try {
      await dispatch(deleteCategory(categoryId));
      // Optionally, reload categories after deletion
      dispatch(fetchCategories());
    } catch (error) {
      console.error('Error deleting category:', error);
      // Display an error message to the user
    }
  };

  return (
    <main id='main' className="main category-list-container">
      <h2>List of Categories</h2>
      <Link to="/admin/add_categorie" className='add-category-link'>Add a new Category</Link>
      {categories.loading && <div>Loading...</div>}
      {categories.error ? (
        <div className="category-error alert alert-danger" role="alert">
          Error: {categories.error}
        </div>
      ) : null}
      {!categories.loading && categories.length ? (
        <ul className="category-list list-group">
          {categories.map((category) => (
            <li key={category.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">Name : {category.nom}</h5>
                <p className="mb-1">Description : {category.description}</p>
              </div>
              <div className="d-flex">
                <Link to={`/admin/edit_categorie/${category.id}`} className="btn btn-primary me-2">
                  Edit
                </Link>
                <button onClick={() => handleDelete(category.id)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}

export default CategoryList;
