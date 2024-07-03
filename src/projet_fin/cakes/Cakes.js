import axios from "axios";
import React, { useEffect, useState } from "react";
import './cakes.css';
import Menu from "../home/Menu";

const Cakes = () => {
    const [cakes, setCakes] = useState([]);
    const [selectedCakeIndex, setSelectedCakeIndex] = useState(null);
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [similarCakes, setSimilarCakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showBackButton, setShowBackButton] = useState(false); // State to manage back button visibility
    const [displayTwoColumns, setDisplayTwoColumns] = useState(false); // State to manage displaying images in two columns

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cakes')
            .then(res => {
                const uniqueFlavors = [...new Set(res.data.map(cake => cake.flavor))];
                const uniqueCakes = uniqueFlavors.map(flavor => {
                    return res.data.find(cake => cake.flavor === flavor);
                });
                setCakes(uniqueCakes);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching cakes. Please try again later.');
                setLoading(false);
            });
    }, []);

    const handleImageClick = (index) => {
        setSelectedCakeIndex(index);
        const selectedCake = cakes[index];
        setSelectedFlavor(selectedCake.flavor);
        // Filter cakes with similar flavors (excluding the selected cake)
        const similar = cakes.filter((cake, i) => {
            // Normalize both flavors to lowercase and trim whitespace for comparison
            return cake.flavor.toLowerCase().trim() === selectedCake.flavor.toLowerCase().trim() && i !== index;
        });
        setSimilarCakes(similar);
        setDisplayTwoColumns(true); // Set displayTwoColumns to true after selecting a flavor
    };    

    const handleNext = () => {
        // Logic to handle fetching other cakes with similar flavors
        if (selectedFlavor) {
            axios.get(`http://127.0.0.1:8000/api/cakes?flavor=${selectedFlavor}`)
                .then(res => {
                    // Filter out the cake that is currently selected
                    const filteredCakes = res.data.filter(cake => cake.flavor === selectedFlavor);
                    setSimilarCakes(filteredCakes);
                    setShowBackButton(true); // Show the back button
                })
                .catch(error => {
                    console.error('Error fetching similar cakes:', error);
                    setError('Error fetching similar cakes. Please try again later.');
                });
        }
    };

    const handleBack = () => {
        // Logic to handle going back to the previous state or step
        setSimilarCakes([]); // Clear the similar cakes
        setShowBackButton(false); // Hide the back button
        setDisplayTwoColumns(false); // Reset displayTwoColumns to false
    };
    
    return (
        <div className="n">
         <Menu/>
        <div className={`grand-parent ${displayTwoColumns ? 'two-columns' : ''}`}>
            <h3>What are your favorite flavors?</h3>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div className="parent">
                    {cakes.map((cake, index) => (
                        <div className={`items ${index === selectedCakeIndex ? 'selected' : ''} ${index === 0 ? 'first' : ''} ${index === cakes.length - 1 ? 'last' : ''}`} key={index} onClick={() => handleImageClick(index)}>  
                            <img className="pk" src={`http://127.0.0.1:8000/storage/${cake.image}`} alt={`Cake ${index}`} />
                            <p className="flavor">{cake.flavor}</p>
                        </div>
                    ))}
                </div>
            )}
            {similarCakes.length > 0 && (
                <div className="similar-cakes">
                    <h3>Cakes with similar flavors to {selectedFlavor}:</h3>
                    <div className="similar-cakes-container">
                        {similarCakes.map((cake, index) => (
                            <div key={index} className="similar-cake-item">
                                <img className="pk" src={`http://127.0.0.1:8000/storage/${cake.image}`} alt={`Cake ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div>
                {showBackButton && <button onClick={handleBack} className="button-back">Back</button>}
                <button onClick={handleNext} className="button-next">Next</button>
            </div>
        </div>
        </div>
        
    );
}

export default Cakes;
