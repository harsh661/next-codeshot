import { useGetPreference } from '@/app/contexts/PreferenceContext'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { fonts } from '@/app/constants/options'

const FontFamily = () => {
    const preferences = useGetPreference()
    const { updatePreferences, fontStyle } = preferences
    return (
      <div>
        <label className="text-xs text-zinc-400">Font style</label>
        <Select value={fontStyle} onValueChange={(value) => updatePreferences({...preferences, fontStyle: value})}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="dark">
            {Object.entries(fonts).map(([name]) => (
              <SelectItem key={name} value={name}>
                <div className="text-xs capitalize">{name}</div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

export default FontFamily