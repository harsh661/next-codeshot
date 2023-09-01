"use client"

import React from "react"
import { codeSnippets, fonts } from "@/app/constants/options"
import Editor from "react-simple-code-editor"
import hljs from "highlight.js"
import { useGetPreference } from "@/app/contexts/PreferenceContext"
import { cn } from "@/lib/utils"


const CodeEditor = () => {
  const preferences = useGetPreference()
  const { fontStyle, language, darkMode, title, updatePreferences, code, fontSize } = preferences
  const validFont = fontStyle as keyof typeof fonts

  return (
    <div
      className={cn(
        "rounded-xl border min-w-[400px]",
        darkMode
          ? "bg-black/80 border-zinc-600/50"
          : "bg-white/80 border-zinc-200/50"
      )}
    >
      <header className="grid grid-cols-6 p-4 items-center gap-5">
        <div className="flex gap-2">
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              darkMode ? "bg-[#ffffff33]" : "bg-[#00000033]"
            )}
          />
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              darkMode ? "bg-[#ffffff33]" : "bg-[#00000033]"
            )}
          />
          <div
            className={cn(
              "w-3 h-3 rounded-full",
              darkMode ? "bg-[#ffffff33]" : "bg-[#00000033]"
            )}
          />
        </div>
        <div className="col-span-4 flex justify-center">
          <input
            type="text"
            value={title}
            spellCheck={false}
            onChange={(e) => updatePreferences({...preferences, title: e.target.value})}
            className="bg-transparent text-center focus:outline-none text-sm font-medium text-zinc-500"
          />
        </div>
      </header>
      <div className={cn("px-4 pb-4", darkMode ? 'brightness-110' : 'text-zinc-800 brightness-50 saturate-200 contrast-200')}>
        <Editor
          value={code}
          onValueChange={(text) => updatePreferences({...preferences, code: text})}
          highlight={(code) =>
            hljs.highlight(code, { language: language || 'plaintext' }).value
          }
          style={{
            fontFamily: fonts[validFont].name,
            fontSize: fontSize
          }}
        />
      </div>
    </div>
  )
}

export default CodeEditor
