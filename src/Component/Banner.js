    import React from 'react';

    function Banner(props) {
    return( 
        <div className="style-card">
    <img src={props.contact.imgUrl}/>
    <h3>{props.contact.name}</h3>
    
    <div className="style-item">
    <img src={props.contact.imgUrl}/>
    <h3>{props.contact.item}</h3>

    <div className="style-style">
    <img src={props.contact.imgUrl}/>
    <h3>{props.contact.style}</h3>


    <div className="style-cut">
    <img src={props.contact.imgUrl}/>
    <h3>{props.contact.cut}</h3>
   
    <div className="style-make">
    <img src={props.contact.imgUrl}/>
    <h3>{props.contact.make}</h3>
    </div>
    </div>
    </div>
    </div>
    </div>
    
        )
}

    export default Banner