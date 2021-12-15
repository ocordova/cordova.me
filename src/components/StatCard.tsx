import React from 'react'
import { classNames } from '../utils/css'

export const StatCard = ({ name, stat, prevStat, icon: Icon, iconColor }) => {
  const iconStyle = {
    base: 'text-white rounded-full inline-flex p-3 ring-4 ring-white'
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg flex items-center justify-between p-4 space-x-4">
      <div className={classNames(...[iconStyle.base, iconColor])}>
        <Icon />
      </div>
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="text-sm font-medium text-gray-500 truncate">{name}</h3>
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
    </div>
  )
}
