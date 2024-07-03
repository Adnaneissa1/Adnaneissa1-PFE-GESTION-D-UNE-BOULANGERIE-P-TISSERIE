import React,{ useState,useEffect } from 'react';
import './dashboard.css';
import { useDispatch,useSelector } from 'react-redux';
import Card from './Card';
function Dashboard() {
    const dispatch = useDispatch();

    
  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                

                </div>
            </div>
            <div className="col-lg-4"></div>

        </div>
    </section>
  )
}

export default Dashboard