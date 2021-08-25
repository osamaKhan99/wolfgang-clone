import React from 'react'
import Plant from './plant';


function Gallery({post}) {

    
    return (
        <div className="gal-container">
            <h2 className="gallery-heading">GALLERY</h2>
            <div className="gallery-grid">
                {
                    post.map((item,i)=> {
                        return (
                       <div className="item" key={i}>
                            <img alt="" className="item-img" src={item.url} />
                            <div className="bottom">
                                <h3 className="name">Plant # {item.id}</h3>
                                <a href={`/plant/${item.id}`}>...</a>
                            </div>
                       </div>
                    )})
                }
            </div>
            
        </div>
    )
}
export default Gallery;