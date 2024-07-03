import React,{ useState,useEffect } from 'react';
import './dashboard.css';
import { fetchCategories } from '../category/sliceCategories';
import { useDispatch,useSelector } from 'react-redux';
import Card from './Card';
function Dashboard() {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                {/* {
                    cards && cards.length>0 && 
                    cards.map(card => <Card key={card.id} card={card} />)
                } */}

                </div>
            </div>
            <div className="col-lg-4"></div>

        </div>
    </section>
  )
}

export default Dashboard