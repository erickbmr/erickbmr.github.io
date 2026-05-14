import styled from 'styled-components'

export const BannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 1000;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const BannerText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`

const BaseButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
`

export const AcceptButton = styled(BaseButton)`
  background: #fff;
  color: ${({ theme }) => theme.colors.primary};
`

export const DeclineButton = styled(BaseButton)`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
`
