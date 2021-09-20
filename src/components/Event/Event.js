import React, { useEffect, useState } from 'react';

const Event = ({event}) => {
    const [Events, setEvents] = useState({});

    const loadData = () => {
        fetch('https://murmuring-brushlands-42274.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }

    useEffect(() => {
        loadData()
    }, [])

    const deleteEvent = (id) => {
        console.log('clicked', id);

        fetch(`https://murmuring-brushlands-42274.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                loadData()
            }
        })
    }


    return (
        <div class="col">
            <div class="card m-3">
            <img src={event.imageURL} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{event.name} 
                    <span className="ms-5">
                        <i class="singlePostIcon far fa-edit ms-3"></i>
                        <button className="ms-3" onClick={() => deleteEvent(event._id)}>
                        <i class="singlePostIcon far fa-trash-alt"></i>
                        </button>
                    </span>
                </h5>
                <p class="card-text">{event.des}</p>
            </div>
            </div>
        </div>
    );
};

export default Event;