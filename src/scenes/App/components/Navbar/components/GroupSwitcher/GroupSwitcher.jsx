import React, { useState } from 'react'
import cn from 'classnames'
import { Query } from 'react-apollo'

import { useUser } from 'contexts'

import { Icon } from 'components'

import { useClickOutside } from 'helpers'

import { useMutation } from 'services/apollo'

import { groups, changeCurrentGroup } from './queries'

import './GroupSwitcher.scss'

const GroupSwitcher = props => {
  const [active, setActive] = useState(false)
  const { ref } = useClickOutside(() => setActive(false))

  const [response, changeGroup] = useMutation(changeCurrentGroup)

  const user = useUser()
  const currentGroup = user && user.currentGroup

  if (!currentGroup) return null

  return (
    <div {...props} ref={ref}>
      <span
        className="tooltip-bottom"
        data-tooltip="Change group"
        onClick={() => setActive(state => !state)}
      >
        {currentGroup.name || ''}
        <Icon material="autorenew" />
      </span>
      <div className={cn('group-switcher', { active })}>
        <Query query={groups}>
          {({ data }) => {
            if (!(data && data.groups)) return null

            return data.groups.map(g => {
              const isCurrent = g.id === currentGroup.id
              const isNext = response.variables && response.variables.group === g.id

              return (
                <div
                  key={g.id}
                  className={cn('group-item', { active: isCurrent })}
                  onClick={() => {
                    if (isCurrent) return
                    changeGroup({ group: g.id }, () => setActive(false))
                  }}
                >
                  <Icon
                    material={isCurrent ? 'check' : isNext ? 'hourglass_empty' : 'arrow_forward'}
                  />
                  {g.name}
                </div>
              )
            })
          }}
        </Query>
      </div>
    </div>
  )
}

export default GroupSwitcher