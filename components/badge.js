import PropTypes from "prop-types";
import styled from "styled-components";

const Badge = styled.span`
border-radius: ${({theme}) => theme.border.radius};
background-color: ${({color, theme}) => color === 'red' ? theme.colors.red.light : theme.colors.green.light};
color: ${({color, theme}) => color === 'red' ? theme.colors.red.default : theme.colors.green.default};
padding: ${({theme}) => theme.space.s} ${({theme}) => theme.space.l};
font-weight: ${({theme}) => theme.fontWeight.bold};
text-align: center;

@media screen and (max-width: ${({theme}) => theme.breakpoints.s}px) {
  padding: ${({theme}) => theme.space.s} ${({theme}) => theme.space.s};
  width: 175px;
}
`

const BadgeItem = ({color}) => <Badge color={color}/>

BadgeItem.propTypes = {
  color: PropTypes.string
}

export default Badge