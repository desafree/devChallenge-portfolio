const UserSmall = ({url,name}) => {
    return ( 
        <div className="userContainerSm">
            <figure className="imgSmContainer">
                <img src={url} alt="" className="userContainerSmImg" />
            </figure>
            <h2 className="userSmName">{name}</h2>
            <p className="userSmJob">Front-end developer</p>
            <div className="iconCont">
                <div className="emailInfo">
                    <span class="material-icons">
                        email
                    </span>
                    <p>billy@example.com</p>
                </div>
                <div className="phoneInfo">
                    <span class="material-icons">
                        phone
                    </span>
                    <p>(+603) 546 624 342</p>
                </div>
            </div>
            <p className="userSmText">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
        </div>
     );
}
 
export default UserSmall;