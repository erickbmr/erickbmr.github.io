'use client'

import { useState } from 'react'
import { TbKeyboard, TbRobot, TbTable, TbFlask, TbMathPi, TbSwimming, TbToolsKitchen } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { ActivitiesWrapper, ActivityItem, CircleIcon, Tooltip } from './styles'

const ACTIVITIES = [
  { key: 'programming',     Icon: TbKeyboard,    secret: false },
  { key: 'ai',              Icon: TbRobot,        secret: false },
  { key: 'data',            Icon: TbTable,        secret: false },
  { key: 'computerScience', Icon: TbFlask,        secret: false },
  { key: 'mathematics',     Icon: TbMathPi,       secret: false },
  { key: 'swimming',        Icon: TbSwimming,     secret: true  },
  { key: 'chef',            Icon: TbToolsKitchen, secret: true  },
]

export default function Activities() {
  const { t } = useTranslation()
  const [clicks, setClicks] = useState(0)
  const unlocked = clicks >= 5

  const handleKeyboardClick = () => {
    if (!unlocked) setClicks(c => c + 1)
  }

  return (
    <ActivitiesWrapper>
      {ACTIVITIES.filter(a => !a.secret || unlocked).map(({ key, Icon, secret }) => (
        <ActivityItem
          key={key}
          $revealed={secret}
          onClick={key === 'programming' ? handleKeyboardClick : undefined}
        >
          <CircleIcon>
            <Icon size={20} />
          </CircleIcon>
          <Tooltip>{t(`activities.${key}`)}</Tooltip>
        </ActivityItem>
      ))}
    </ActivitiesWrapper>
  )
}
