// AddCategory.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from './sliceCategories';
import './category.css'; // Import your CSS file
function AddCategory() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ nom: '', description: '' });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCategory(formData));
        setFormData({ nom: '', description: '' });
    };

    return (
        <div id='main' className="main add-category-container">
            <h2 className='h2Cat'>Add Category</h2>
            <form className='formCat' onSubmit={handleSubmit}>
                <label className='lbCat'>
                    Name:
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter category name...'
                        className='inpCat'
                    />
                </label>
                <label className='lbCat'>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter category description...'
                        className='inpCat'
                    />
                </label>
                <button className='btnCat' type="submit">Add Category</button>
            </form>
        </div>
    );
}

export default AddCategory;
