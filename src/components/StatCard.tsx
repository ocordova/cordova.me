import React from 'react'
import { classNames } from '../utils/css'
import { ExternalLinkIcon } from '@heroicons/react/outline'

export const StatCard = ({
  name,
  stat,
  prevStat,
  icon: Icon,
  iconColor,
  to
}) => {
  const iconStyle = {
    base: 'text-white rounded-full inline-flex p-3 ring-4 ring-white'
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <div className="relative w-full bg-white border border-gray-200 rounded-lg flex items-center justify-between p-4 space-x-4 hover:shadow-lg">
        <div className={classNames(...[iconStyle.base, iconColor])}>
          <Icon />
        </div>
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-sm font-medium text-gray-500 truncate">
              {name}
            </h3>
          </div>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            {stat && stat ? stat.toLocaleString() : '~'}
            {prevStat && (
              <span className="ml-1 text-sm font-medium text-gray-500">
                {prevStat}
              </span>
            )}
          </p>
        </div>
        <span
          className="absolute top-3 right-3 text-gray-300"
          aria-hidden="true"
        >
          <ExternalLinkIcon className="h-5 w-5" />
        </span>
      </div>
    </a>
  )
}
