import React from "react"
import { Slider } from "../ui/slider"
import { useGetPreference } from "@/app/contexts/PreferenceContext"

const Padding = () => {
  const preferences = useGetPreference()
  const { updatePreferences, padding } = preferences
  return (
    <div>
      <label className="text-xs text-zinc-400">Padding</label>
      <div className="py-3">
        <Slider
          className="w-32"
          value={[padding]}
          max={128}
          min={16}
          onValueChange={([value]) =>
            updatePreferences({ ...preferences, padding: value })
          }
        />
      </div>
    </div>
  )
}

export default Padding
