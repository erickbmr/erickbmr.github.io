import styled from 'styled-components'

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 11px;
  padding-right: 11px;
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
`

export const IconLink = styled.a`
  display: block;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    display: block;
  }
`
