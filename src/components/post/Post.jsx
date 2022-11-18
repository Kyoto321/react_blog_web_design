
import "./post.css"

export default function Post() {
    return (
        <div className="post">
           <img className="postImg"
                src="https://www.mickeyshannon.com/photos/medium/classic-canada-banff-photography.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet. </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eveniet? 
                Recusandae tenetur nam eius, hic, vero, 
                repudiandae minus similique dolore assumenda 
                corrupti mollitia. 
                A itaque quaerat earum facilis. Ratione, corrupti.
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Odio, eveniet? 
                Recusandae tenetur nam eius, hic, vero, repudiandae minus similique dolore assumenda corrupti mollitia. 
                A itaque Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Odio, eveniet? 
                Recusandae tenetur nam eius, hic, vero, repudiandae minus similique dolore assumenda corrupti mollitia. 
                A itaque quaerat earum facilis. Ratione, corrupti.
                quaerat earum facilis. Ratione, corrupti.

            </p>
        </div>
    )
}