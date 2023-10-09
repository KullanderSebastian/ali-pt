import '../styles.scss';
import profileImage from "../img/ali.png";

function ProfileImage() {
    return (
        <div className="ProfileImage">
			<img src={profileImage} />
        </div>
    );
}

export default ProfileImage;
