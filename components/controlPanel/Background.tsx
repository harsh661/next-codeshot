import React from "react"
import { Switch } from "../ui/switch"
import { useGetPreference } from "@/app/contexts/PreferenceContext"

const Background = () => {
  const preferences = useGetPreference()
  const { updatePreferences, showBackground } = preferences
  return (
    <div>
      <label className="text-xs text-zinc-400">Background</label>
      <div className="py-1">
        <Switch
          className="dark"
          checked={showBackground}
          onCheckedChange={(checked) =>
            updatePreferences({ ...preferences, showBackground: checked })
          }
        ></Switch>
      </div>
    </div>
  )
}

export default Background
