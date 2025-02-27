import styled from "styled-components"

const FooterInfo = styled.footer`
display: flex;
justify-content: center;
padding: 10px;
background-color: ${({ theme }) => theme.background};
`
export default function Footer(){
    return (
        <FooterInfo>
        <h2>If you liked this page make sure to follow me! 👍</h2>
        </FooterInfo>
    )
}