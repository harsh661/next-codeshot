"use client"

import Editor from "@/components/Editor"
import { fonts, themes } from "./constants/options"
import { useGetPreference } from "./contexts/PreferenceContext"
import { cn } from "@/lib/utils"
import Controls from "@/components/controlPanel/Controls"
import { useRef } from "react"

export default function Home() {
  const {
    theme,
    fontStyle,
    showBackground,
    padding,
  } = useGetPreference()

  const validTheme = theme as keyof typeof themes
  const validFont = fontStyle as keyof typeof fonts

  if (!(validTheme in themes)) {
    console.log("Invalid theme")
    return null
  }

  const bodyRef = useRef<HTMLDivElement | null>(null)

  return (
    <main className="dark h-full flex justify-center items-center bg-neutral-950 text-white">
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

      <div ref={bodyRef} className={cn("overflow-hidden", showBackground ? themes[validTheme].background : "transparent")} style={{padding}}>
        <Editor />
      </div>

      <Controls bodyRef={bodyRef}/>
    </main>
  )
}
