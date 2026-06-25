import styled from 'styled-components'

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-size: 1.1rem;
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  font-size: 0.9rem;
`
