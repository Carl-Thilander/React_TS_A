import styled from "styled-components";



const Aside = styled.aside`
  background-color: ${({ theme }) => theme.sidebarBackground};
  transition: background-color 0.5s;
  padding: 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  
`;




export default function SideBar(){
    return (
        <Aside>
            <h3>Hello </h3>
        </Aside>
    )

}