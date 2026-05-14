import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-6px); }
  to   { opacity: 1; transform: translateX(0); }
`

export const ActivitiesWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ActivityItem = styled.div<{ $revealed?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;

  &:hover > span {
    display: block;
  }

  ${({ $revealed }) => $revealed && css`
    animation: ${fadeIn} 0.4s ease;
  `}
`

export const CircleIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`

export const Tooltip = styled.span`
  display: none;
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  background: #000;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
`
