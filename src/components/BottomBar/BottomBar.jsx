import {
    CountTextStyled,
    ListItemStyled,
    ListStyled,
    TextStyled,
  } from "./BottomBar.styled";

  function BottomBar() {

    return (

        <ListStyled className="statisticList">
            <ListItemStyled >
              <CountTextStyled >32,000 +</CountTextStyled>
              <TextStyled >Experienced tutors</TextStyled>
            </ListItemStyled>
            <ListItemStyled >
              <CountTextStyled >300,000 +</CountTextStyled>
              <TextStyled >5-star tutor reviews</TextStyled>
            </ListItemStyled>
            <ListItemStyled >
              <CountTextStyled >120 +</CountTextStyled>
              <TextStyled >Subjects taught</TextStyled>
            </ListItemStyled>
            <ListItemStyled >
              <CountTextStyled >200 +</CountTextStyled>
              <TextStyled >Tutor nationalities</TextStyled>
            </ListItemStyled>
          </ListStyled>
    );
  }

  export default BottomBar;