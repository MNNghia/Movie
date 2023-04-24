import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CastList(props) {

    const {category} = useParams();

    const [casts, setCasts] = useState([])

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id)
            setCasts(res.cast.slice(0, 5))
        }
        getCredits();
    }, [category, props.id])

    return (  
        <div className='casts'>
            {
                casts.map((value, index) => (
                    <div key={index} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage: 
                            `url(${apiConfig.w500Image(value.profile_path)})`}}></div>
                        <p className="casts__item__name">{value.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;