import styled from '@emotion/styled'

export const CardContainer = styled.div`
  width: 90%;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor || 'skyblue'};
`
export const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  & * {
    cursor: pointer;
  }
`
export const Profile = styled.div`
  display: flex;
  margin: 10px 0;
`
export const Follow = styled.div`
  margin-top: 3px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 13px;
  color: #8d8d8d;
`
export const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  position: absolute;
  right: 12%;
  cursor: pointer;
`
export const Main = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
`
export const Menu = styled.div`
  position: absolute;
  right: 11%;
  border: 1px solid black;
  border-radius: 7px;
  background-color: white;
  z-index: 1;
  & div {
    display: block;
    padding: 10px 20px;
    border-radius: 7px;
    &:hover {
      background-color: lightgray;
    }
  }
`
export const imageStyle = {
  display: 'block',
  margin: '20px auto',
  width: '100%',
  borderRadius: '10px',
}
export const Title = styled.div`
  margin: 10px 0;
  font-size: 25px;
  font-weight: bold;
`
