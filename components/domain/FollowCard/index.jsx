import Text from 'components/base/Text'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Avatar } from '../../base'

const FollowCard = ({ userName, profilePhotoUrl, userId }) => {
  const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 5px;
  `
  const router = useRouter()
  const handleClick = () => {
    router.push(`/mypage/${userId}`)
  }

  return (
    <Container value={userId} onClick={handleClick}>
      <Avatar src={profilePhotoUrl || '/images/avatarDefault.png'} size={40} />
      <Text style={{ marginLeft: 10 }} size={25}>
        {userName}
      </Text>
    </Container>
  )
}

export default FollowCard
