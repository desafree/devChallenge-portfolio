const Project = ({url,name}) => {
    return ( 
        <div className="projectContainerLg">
            <figure className="projectLgImg">
                <img src={url} alt="" />
            </figure>
            <div className="projectLgContent">
                <div className="tech">
                    <ul>
                        <li>#HTML</li>
                        <li>#CSS</li>
                        <li>#responsive</li>
                    </ul>
                </div>
                <h2 className="projectLgName">{name}</h2>
                <p className="projectLgText">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                <div className="projectLgButtons">
                    <button className="button1">Demo</button>
                    <button className="button2">Code</button>
                </div>
            </div>
        </div>
     );
}
 
export default Project;