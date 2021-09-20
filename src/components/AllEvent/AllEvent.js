import React, {useState, useEffect} from 'react';
import Event from '../Event/Event';


const AllEvent = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-brushlands-42274.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {
                events.map(event => <Event event={event}/>)
            }
        </div>
    );
};

export default AllEvent;