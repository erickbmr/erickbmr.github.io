import styled from 'styled-components'
import Link from 'next/link'

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const BackButton = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  font-size: 2rem;
`

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
