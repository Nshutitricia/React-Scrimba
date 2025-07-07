export default function Entry(props){
    return (
        <div className="entry">
            <div className="images">
                <img className="image" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="details">
                <div className="countries">
                    <div className="country">
                        <img src="marker.svg" alt="" />
                        <span>{props.country}</span>
                    </div>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h5>{props.dates}</h5>
                <p>{props.text}</p>
                
            </div>
        </div>
    )
}