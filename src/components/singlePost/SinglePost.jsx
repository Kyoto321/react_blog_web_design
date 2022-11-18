import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://www.mickeyshannon.com/photos/medium/classic-canada-banff-photography.jpg"
                    alt=""
                    className="singlePostTitle" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b> John Doe</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque corrupti molestiae laboriosam delectus, 
                    praesentium labore minus harum fugiat natus impedit voluptatum expedita quasi. 
                    Impedit vel eius amet sapiente neque iure!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque corrupti molestiae laboriosam delectus, 
                    praesentium labore minus harum fugiat natus impedit voluptatum expedita quasi. 
                    Impedit vel eius amet sapiente neque iure!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque corrupti molestiae laboriosam delectus, 
                    praesentium labore minus harum fugiat natus impedit voluptatum expedita quasi. 
                    Impedit vel eius amet sapiente neque iure!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque corrupti molestiae laboriosam delectus, 
                    praesentium labore minus harum fugiat natus impedit voluptatum expedita quasi. 
                    Impedit vel eius amet sapiente neque iure!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic eos autem 
                    iusto temporibus aut explicabo velit quibusdam unde illum quo veritatis omnis d
                    oloribus atque, labore impedit, suscipit totam earum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque corrupti molestiae laboriosam delectus, 
                    praesentium labore minus harum fugiat natus impedit voluptatum expedita quasi. 
                    Impedit vel eius amet sapiente neque iure!
                </p>
            </div>
        </div>
    )
}