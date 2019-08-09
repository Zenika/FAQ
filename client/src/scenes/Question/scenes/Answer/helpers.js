import differenceWith from 'lodash/differenceWith'
import isEqual from 'lodash/isEqual'

import { isUuidV4 } from 'helpers'

export const sourcesToKeyValuePairs = sources => {
  return sources.map(({ id, label, url }) => ({
    id,
    key: label,
    value: url
  }))
}

export const keyValuePairsToSources = list => {
  return list
    .map(({ id, key, value }) => {
      // If the id was generated by the frontend, filter it
      if (isUuidV4(id)) {
        return { label: key, url: value }
      }
      return { id, label: key, url: value }
    })
    .filter(({ label, url }) => label !== '' && url !== '')
}

export const canSubmit = state => {
  const { answer, initialAnswer, sources, initialSources } = state
  return !(
    answer.length === 0 ||
    (answer === initialAnswer &&
      differenceWith(sources, initialSources, isEqual).length === 0 &&
      differenceWith(initialSources, sources, isEqual).length === 0)
  )
}
