import { useEffect, useState } from "react";
import Card from "./Card";

const ReviewCard = () => {
          const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('/data/reviews.json')
        .then( (res) =>res.json())
        .then(data=>{
            setReviews(data)
        })
        .catch(error =>{
            console.log('error', error)
        })
        
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-14 w-11/12 mx-auto">
            {
                reviews.map(revie => <Card key={revie.id} revie={revie}></Card>)
            }
        </div>
    );
};

export default ReviewCard;