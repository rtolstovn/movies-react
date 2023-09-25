function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster 
    } = props;

    return (
        <div id={id} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ? 
                   <img alt="" className="activator" src={`https://via.placehold.com/300x400?text=${title}`} 
                   />
                :
                   <img alt="" className="activator" src={poster} />
            }
          
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right"></i></span>
          <p>{year} <span className="right">{type}</span></p>
        </div>
      </div>
    )

}

export {Movie}