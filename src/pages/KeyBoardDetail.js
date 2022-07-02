import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/style/DetailPage.css';

import DetailedResult from '../components/DetailedResult';


function KeyBoardDetail() {
    const { id } = useParams();

    const [keyboard, setKeyboard] = useState()

    const getKeyboard = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/keyboards/${id}?format=json`)
        await setKeyboard(data)
    }

    useEffect(() => {
        getKeyboard()
    }, [])

    if(!keyboard) {
        return (
            <div className="loading-data-container">
                <h1 className="loading-data">Loading ...</h1>
            </div>
        )
    }

  return (
    <div className="monitor-detail">
        <h1>Keyboard Detail</h1> 
        <DetailedResult item={keyboard} />
    </div>
  )
}

export default KeyBoardDetail