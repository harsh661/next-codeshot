import { useGetPreference } from "@/app/contexts/PreferenceContext"
import { Switch } from "../ui/switch"
import React from "react"

const DarkMode = () => {
  const preferences = useGetPreference()
  const { updatePreferences, darkMode } = preferences
  return (
    <div>
      <label className="text-xs text-zinc-400">DarkMode</label>
      <div className="py-1">
        <Switch
          className="dark"
          checked={darkMode}
          onCheckedChange={(checked) =>
            updatePreferences({ ...preferences, darkMode: checked })
          }
        ></Switch>
      </div>
    </div>
  )
}

export default DarkMode
