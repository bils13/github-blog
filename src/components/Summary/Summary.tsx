import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, ProfileCard, ProfileDescription, ProfileMenu } from "./Summary.style"
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons"


export const Summary = () => {
    return (
        <ProfileCard>
            <Avatar />
            <ProfileDescription>
                <h1>Cameron Willians
                    <span>GitHub</span>
                </h1>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                    Eu viverra massa quam dignissim aenean malesuada suscipit. 
                    Nunc, volutpat pulvinar vel mass.</p>
                <ProfileMenu>
                <FontAwesomeIcon icon={faPeopleGroup} />
                    <p>cameronwll</p>
                    <p>Rocketseat</p>
                    <p>32 seguidores</p>
                </ProfileMenu>
            </ProfileDescription>
        </ProfileCard>
    )
}