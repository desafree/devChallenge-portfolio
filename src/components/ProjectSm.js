const ProjectSm = ({url,name}) => {
    return ( 
        <div className="projectContainerSm">
            <figure className="projectSmImg">
                <img src={url} alt="" />
            </figure>
            <div className="projectSmContent">
                <div className="tech">
                    <ul>
                        <li>#HTML</li>
                        <li>#CSS</li>
                        <li>#responsive</li>
                    </ul>
                </div>
                <h2 className="projectSmName">{name}</h2>
                <p className="projectSmText">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                <div className="projectSmButtons">
                    <button className="button1">Demo</button>
                    <button className="button2">Code</button>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectSm;