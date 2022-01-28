const BlogSm = ({title,url}) => {
    return ( 
        <div className="blogSmContainer">

            <p className="introSm">Blog</p>
            <h2 className="titleBlogSm">How to organize your CSS</h2>
            <div className="blogSmContent">
                <p className="blogTextContent">In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
                <p className="blogTextContent last">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                <a href="#" className="blogLink">dev.to</a>
            </div>
            <figure className="blogSmImg">
                <img src={url} alt="" />
            </figure>
        </div>
     );
}
 
export default BlogSm;