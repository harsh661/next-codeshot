import React from "react"
import { Slider } from "../ui/slider"
import { useGetPreference } from "@/app/contexts/PreferenceContext"

const Fontsize = () => {
  const preferences = useGetPreference()
  const {updatePreferences, fontSize} = preferences
  return (
    <div>
      <label className="text-xs text-zinc-400">Font size</label>
      <div className="py-3">
        <Slider
          className="w-32"
          value={[fontSize]}
          max={24}
          min={12}
          onValueChange={([value]) =>
            updatePreferences({ ...preferences, fontSize: value })
          }
        />
      </div>
    </div>
  )
}

export default Fontsize
