"use client"

import Editor from "@/components/Editor"
import { fonts, themes } from "./constants/options"
import { useGetPreference } from "./contexts/PreferenceContext"
import { cn } from "@/lib/utils"
import Controls from "@/components/controlPanel/Controls"
import { useEffect, useRef } from "react"
import { Resizable } from "re-resizable"

export default function Home() {
  const preferences = useGetPreference()
  const { theme, fontStyle, showBackground, padding, updatePreferences } =
    preferences

  const validTheme = theme as keyof typeof themes
  const validFont = fontStyle as keyof typeof fonts

  if (!(validTheme in themes)) {
    console.log("Invalid theme")
    return null
  }

  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    if (queryParams.size === 0) return
    const state = Object.fromEntries(queryParams)

    const statePreferences = {
      ...state,
      code: state.code ? atob(state.code) : "",
      autoDetect: state.autoDetect === "true",
      darkMode: state.darkMode === "true",
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
      showBackground: state.showBackground === "true",
    }
    updatePreferences({ ...preferences, ...statePreferences })
  }, [])

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

      <Resizable enable={{left: true, right: true}} minWidth={200}>
        <div
          ref={bodyRef}
          className={cn(
            "overflow-hidden",
            showBackground ? themes[validTheme].background : "transparent"
          )}
          style={{ padding }}
        >
          <Editor />
        </div>
      </Resizable>
 
      <Controls bodyRef={bodyRef} />
    </main>
  )
}
