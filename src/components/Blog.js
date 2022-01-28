const Blog = ({title,url}) => {
    return ( 
        <div className="blogLgContainer">
            <div className="blogContent">
                <p className="intro">Blog</p>
                <h2>How to organize your CSS</h2>
                <p className="blogTextContent">In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
                <p className="blogTextContent last">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                <a href="#" className="blogLink">dev.to</a>
            </div>
            <figure className="blogImg">
                <img src={url} alt="" />
            </figure>
        </div>
     );
}
 
export default Blog;