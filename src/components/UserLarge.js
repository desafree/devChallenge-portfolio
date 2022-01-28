const UserLarge = ({url,name}) => {
    return ( 
        <div className="userContainerLg">
            <figure>
                <img src={url} alt="" />
            </figure>
            <div className="userContainerLgContent">
                <h2 className="userName">{name}</h2>
                <p className="userJob">Front-end developer</p>
                <p className="userText">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
                <p className="userText">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
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
        </div>
     );
}
 
export default UserLarge;