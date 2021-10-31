import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";

const SingleDetails = ({ _id, title, body, src, status }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [bookData, setBookData] = useState({
        name: "",
        email: "",
        phone: "",
        date:startDate
    })
    const { user: { uid } } = useAuth();
    const history = useHistory();
    
    const inputBox = (e) => {
        const { name, value } = e.target;
        setBookData({...bookData , [name] : value})
    }
    
    const handleOnclick = (e) => {
        e.preventDefault();
        const { name, email, phone } = bookData;
        if (name && email && phone)
        {
            bookData.project_id = _id;
            bookData.user_uid = uid;
            bookData.title = title;
            bookData.body = body;
            bookData.src = src;
            bookData.status = status;
            axios.post('https://wicked-werewolf-19683.herokuapp.com/cart', bookData)
            .then(res => {
                if (res.data.insertedId)
                {
                    setBookData({name:"",email:"",phone:""});
                    alert('congratulations! Booked successfully');
                    history.push("/");
                }
            })
        }
        else
        {
            alert("please fill the Details Box")
        }
        
    };

    return (

        <>
            <div className="col-10 mx-auto col-md-8">
                <div className="single_service_imgBox">
                    <figure>
                            <img src={src} className="w-100 rounded shadow" alt="service_details" />
                    </figure>
                </div>
                <div className="text-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2>{title}</h2>
                    </div>
                    <h4>Overview :</h4>
                    <p>{body}</p>
                </div>
            </div>
            <div className="col-10 mx-auto py-5 py-md-0 col-md-4">
                <form onSubmit={handleOnclick}>
                    <h2 className="text-center fw-bold mb-4">Book This Package</h2>
                    <input className="form-control" placeholder="Your Full Name" onChange={inputBox} type="text" name="name" value={bookData.name}/>
                    <input className="form-control my-3" placeholder="Your Email" onChange={inputBox} type="email" name="email" value={bookData.email}/>
                    <input className="form-control" placeholder="Your Phone" onChange={inputBox} type="text" name="phone" bookData={bookData.phone}/>
                    <DatePicker className="form-control my-3" selected={startDate} onChange={(date) => setStartDate(date)} value={bookData.date}/>
                    <button type="submit" className="btn btn-primary">Book Now</button>
                </form>
            </div>
        </>
    );
};

export default SingleDetails;