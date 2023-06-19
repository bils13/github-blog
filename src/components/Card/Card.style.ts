import styled from "styled-components";


export const Cards = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 100%;
    max-width: 950px;
    gap: 2rem;
`

export const Post = styled.div`
    background-color: ${(props) => props.theme['base-post']};
    width: 100%;
    border-radius: 10px;
    padding: 2rem;

    > h3 {
        font-size: 20px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: start;

        > span {
            margin-top: 4px;
            width: 20%;
            font-size: 14px;
            font-weight: 400;
            text-align: right;
            color: ${(props) => props.theme['base-span']};
        }
    }

    > p {
        margin-top: 1.2rem;
        font-size: 16px;
        font-weight: 400;
        color: ${(props) => props.theme['base-text']};
    }

    &:hover {
        cursor: pointer;
        border: 2px solid ${(props) => props.theme['base-label']};;
    }
`