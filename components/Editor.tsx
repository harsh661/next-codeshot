"use client"

import React from "react"
import { codeSnippets } from "@/app/constants/options"
import Editor from "react-simple-code-editor"
import hljs from "highlight.js"

type Props = {}

const CodeEditor = (props: Props) => {
  return (
    <div className="bg-black/80 rounded-md border border-zinc-600/50">
      <header className="grid grid-cols-6 p-4 items-center gap-5">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
      </header>
      <div className="px-4 pb-4">
        <Editor
          value={codeSnippets[0].code}
          highlight={(code) =>
            hljs.highlight(code, { language: codeSnippets[0].language }).value
          }
          style={{
            fontStyle: "JetBrains Mono",
          }}
          onValueChange={() => {}}
        />
      </div>
    </div>
  )
}

export default CodeEditor
