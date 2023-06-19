import styled from "styled-components";


export const ProfileCard = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;

    > h1 {
        margin-top: 20px;
        font-weight: 700;
        font-size: 24px;
    }

`

export const Labels = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    > label {
        text-transform: uppercase;
        color: ${(props) => props.theme['blue']};
        font-weight: 700;
        font-size: 14px;
    }

    &:hover {
        cursor: pointer;
    }
`

export const Links = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > p {
        margin-top: 8px;
        color: ${(props) => props.theme['base-span']};
        font-weight: 400;
        font-size: 14px;

        &:hover {
            cursor: pointer;
        }
    }
`