import styled from "styled-components";
import avatar from '../../assets/avatar.svg' 

interface ProfileCardProps {
    height?: string
}

export const ProfileCard = styled.section<ProfileCardProps>`
    z-index: 1;
    width: 100%;
    max-width: 950px;
    gap: 2rem;
    padding: 1.2rem;
    background-color: ${(props) => props.theme['base-profile']};
    margin:  -80px auto 0px auto;
    display: flex;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    height: ${(props) => props.height};
`

export const Avatar = styled.div`
    width: 240px;
    height: 150px;
    background-repeat: no-repeat;
    border-radius: 8px;
    background-image: url(${avatar});
    background-size: cover;
    margin-left: 0.5rem;
`

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > h1 {
        color: ${(props) => props.theme['base-title']};
        font-size: 24px;
        font-weight: 700;
        margin-bottom: -18px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > span {
            color: ${(props) => props.theme['blue']};
            text-transform: uppercase;
            font-weight: 700;
            font-size: 12px;
        }
    }
    
    > p {
        color: ${(props) => props.theme['base-text']};
        font-size: 16px;
        font-weight: 400;
    }
`

export const ProfileMenu = styled.div`
    display: flex;
    justify-content: left;
    gap: 1rem;

    > p {
        font-size: 16px;
        font-weight: 400;
        color: ${(props) => props.theme['base-subtitle']}
    }
`