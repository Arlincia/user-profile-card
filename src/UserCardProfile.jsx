import "./style.css"
import profilePic from "./images/IMG_9580.jpg"

function UserProfileCard() {
    return (
        <div className="user-profile-card">
            <img src= {profilePic}
             alt="Profile" />
            <h2>Arlincia Neff</h2>
            <ul className="profession"><li>Full stack developer</li>
                <li>Model</li>
                <li>Actress</li>
            </ul>
            <p>Iam a full stack developer ,with the love and preference of being a front-end developer. 
                I love art and this is why the front-end is where it thrive.
                I have expertise in HTML,CSS,Bootstrap,Javascript and recently React.
            </p>
            <ul className="profile-info">
                <li>20k 
                    Followers
                </li>
                <li>4k
                    Following
                </li>
                <li>
                    14
                    Projects
                </li>
            </ul>
            <button>Follow</button>
            
            <button>View Profile</button>
        </div>
    );
}

export default UserProfileCard;