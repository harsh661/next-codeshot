"use client"

import Editor from "@/components/Editor"
import { fonts, themes } from "./constants/options"
import { useGetPreference } from "./contexts/PreferenceContext"
import { cn } from "@/lib/utils"

export default function Home() {
  const {
    theme,
    fontStyle,
    showBackground,
    padding,
    darkMode,
  } = useGetPreference()

  const validTheme = theme as keyof typeof themes
  const validFont = fontStyle as keyof typeof fonts

  if (!(validTheme in themes)) {
    console.log("Invalid theme")
    return null
  }

  return (
    <main className="dark min-h-screen flex justify-center items-center bg-neutral-950 text-white">
      <link
        rel="stylesheet"
        href={themes[validTheme].theme}
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href={fonts[validFont].src}
        crossOrigin="anonymous"
      />

      <div className={cn("overflow-hidden", showBackground ? themes[validTheme].background : "ring ring-neutral-50")} style={{padding}}>
        <Editor />
      </div>
    </main>
  )
}
