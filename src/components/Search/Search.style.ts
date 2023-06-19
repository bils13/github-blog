import styled from "styled-components";


export const SearchForm = styled.form`
    width: 100%;
    max-width: 950px;
    margin: 4rem auto 0 auto;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h2 {
            font-weight: 700;
            font-size: 18px;
            color: ${(props) => props.theme['base-subtitle']}
        }

        > h3 {
            font-weight: 400;
            font-size: 14px;
            color: ${(props) => props.theme['base-span']}
        }
    }
`

export const SearchInput = styled.input`
    margin-top: 1rem;
    width: 100%;
    height: 50px;
    padding: 0.5rem 1rem; 
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    outline: 0;
    cursor: pointer;

    &::placeholder {
        color: ${(props) => props.theme['base-label']};
    }

    &:focus {
        color: ${(props) => props.theme['base-text']};
        border: 1px solid ${(props) => props.theme['blue']};

        &::placeholder {
            color: ${(props) => props.theme['base-text']};
        }

    }
`