import React from "react"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select"
import { themes } from "@/app/constants/options"
import { useGetPreference } from "@/app/contexts/PreferenceContext"
import { cn } from "@/lib/utils"

const Themes = () => {
  const preferences = useGetPreference()
  const { updatePreferences, theme } = preferences
  return (
    <div>
      <label className="text-xs text-zinc-400">Theme</label>
      <Select value={theme} onValueChange={(value) => updatePreferences({...preferences, theme: value})}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="dark">
          {Object.entries(themes).map(([name, theme]) => (
            <SelectItem key={name} value={name}>
              <div className="flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded-full", theme.background)} />
                <div className="capitalize text-xs">{name}</div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Themes
