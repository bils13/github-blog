import styled from "styled-components";

export const BackgroundPost = styled.section`
    width: 100%;
    max-width: 950px;
    padding: 2.5em 2em;
    margin:  auto auto;
`

export const Text = styled.p`
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    align-self: stretch;
`

export const Title = styled.h2`
    color: ${(props) => props.theme['blue']};
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    align-self: stretch;
    text-decoration: underline;
    margin-top: 2em;
`