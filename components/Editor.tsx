"use client"

import React from "react"
import { codeSnippets, fonts } from "@/app/constants/options"
import Editor from "react-simple-code-editor"
import hljs from "highlight.js"
import { useGetPreference } from "@/app/contexts/PreferenceContext"

type Props = {}

const CodeEditor = (props: Props) => {
  const {fontStyle, language} = useGetPreference()
  const validFont = fontStyle as keyof typeof fonts

  return (
    <div className="bg-black/80 rounded-xl border border-zinc-600/50">
      <header className="grid grid-cols-6 p-4 items-center gap-5">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#ffffff33] rounded-full" />
          <div className="w-3 h-3 bg-[#ffffff33] rounded-full" />
          <div className="w-3 h-3 bg-[#ffffff33] rounded-full" />
        </div>
      </header>
      <div className="px-4 pb-4">
        <Editor
          value={codeSnippets[0].code}
          highlight={(code) =>
            hljs.highlight(code, { language: language }).value
          }
          style={{
            fontFamily: fonts[validFont].name,
          }}
          onValueChange={() => {}}
        />
      </div>
    </div>
  )
}

export default CodeEditor
