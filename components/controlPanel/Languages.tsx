import { languages } from "@/app/constants/options"
import { useGetPreference } from "@/app/contexts/PreferenceContext"
import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const Languages = () => {
  const preferences = useGetPreference()
  const { updatePreferences, language } = preferences

  const handleChange = (lang: string) => {
    if(lang === 'auto') {
        updatePreferences({...preferences, language: 'plaintext', autoDetect: true})
    } else {
        updatePreferences({...preferences, language: lang, autoDetect: false})
    }
  }

  return (
    <div>
      <label className="text-xs text-zinc-400">Language</label>
      <Select
        value={language}
        onValueChange={handleChange}
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="dark max-h-96">
          <SelectItem value="auto">
            Auto detect
          </SelectItem>
          {Object.entries(languages).map(([name]) => (
            <SelectItem key={name} value={name}>
              <div className="text-xs">{name}</div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Languages
