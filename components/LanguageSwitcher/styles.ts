import styled from 'styled-components'

export const SwitcherWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 8px;
`

export const LangButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ $active }) => ($active ? 1 : 0.35)};
  transition: opacity 0.2s;
  padding: 0;

  &:hover {
    opacity: 0.75;
  }
`
