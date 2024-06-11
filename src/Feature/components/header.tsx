import styled from "@emotion/styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeadingText>PIXLIP AI</StyledHeadingText>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 17px 17px 0px 0px;
background: #5433EB;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
#5433EB;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledHeadingText = styled.div`
  color: #fff;
  font-family: "Roboto", "san-serif";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.2px;
`;
