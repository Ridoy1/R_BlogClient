import React, { useState } from 'react';
import TobBar from '../TopBar/TobBar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Write = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData ={
            name: data.name,
            des: data.des,
            imageURL: imageURL
        };
        const url = `https://murmuring-brushlands-42274.herokuapp.com/addEvent`;
        
        fetch(
            url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
            .then(res => console.log('server side res'))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'bb4771dd8adeb442ab08f3e2d272b05e');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <TobBar />
            <div className="text-center">
                <h2 className="p-5">Blog upload</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                <input name="ing" type="file" onChange={handleImageUpload} />
                
                <br/>
                
                <div className="m-5">
                <input name="title" className='form-control' placeholder="Title" {...register("name")} />
                
                <br/>

                <textarea placeholder="Blog content" className='form-control' type="textarea" {...register("des")} />
                </div>

                <br/>
                
                <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Write;