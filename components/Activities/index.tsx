'use client'

import { TbKeyboard, TbRobot, TbTable, TbFlask, TbMathPi } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { ActivitiesWrapper, ActivityItem, CircleIcon, Tooltip } from './styles'

const ACTIVITIES = [
  { key: 'programming',     Icon: TbKeyboard  },
  { key: 'ai',              Icon: TbRobot     },
  { key: 'data',            Icon: TbTable     },
  { key: 'computerScience', Icon: TbFlask     },
  { key: 'mathematics',     Icon: TbMathPi    }
]

export default function Activities() {
  const { t } = useTranslation()
  return (
    <ActivitiesWrapper>
      {ACTIVITIES.map(({ key, Icon }) => (
        <ActivityItem key={key}>
          <CircleIcon>
            <Icon size={20} />
          </CircleIcon>
          <Tooltip>{t(`activities.${key}`)}</Tooltip>
        </ActivityItem>
      ))}
    </ActivitiesWrapper>
  )
}
