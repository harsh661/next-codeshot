'use client'

import React, { MutableRefObject } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "../ui/button"
import { useGetPreference } from "@/app/contexts/PreferenceContext"
import { useToast } from "../ui/use-toast"
import { toPng, toSvg } from "html-to-image"

interface ExportButtonProps {
  targetRef: MutableRefObject<HTMLElement | null>
}

const ExportButton: React.FC<ExportButtonProps> = ({ targetRef }) => {
    const preferences = useGetPreference()
  const { toast } = useToast()

  const copyLink = () => {
    const { updatePreferences, ...state } = preferences
    const keyValuePairs = Object.entries(state).map(([key, value]) => [
      key,
      String(value),
    ])
    keyValuePairs.push(["code", btoa(state.code)])
    const queryParams = new URLSearchParams(keyValuePairs).toString()
    navigator.clipboard.writeText(`${location.href}?${queryParams}`)

    toast({ title: "Link copied to clipboard", className: "dark", duration: 3000})
  }

  const downloadImage = async (name: string, format: string) => {
    let imageUrl, filename
    switch(format) {
        case "PNG":
            imageUrl = await toPng(targetRef.current as HTMLElement, {pixelRatio: 2})
            filename = `${name}.png`
            break
        case "SVG":
            imageUrl = await toSvg(targetRef.current as HTMLElement, {pixelRatio: 2})
            filename = `${name}.svg`
            break
        default:
            return
    }
    const a = document.createElement("a")
    a.href = imageUrl
    a.download = filename
    a.click()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="my-auto">Export</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark">
        <DropdownMenuItem onClick={() => downloadImage(preferences.title, "PNG")}>Save PNG</DropdownMenuItem>
        <DropdownMenuItem onClick={() => downloadImage(preferences.title, "SVG")}>Save SVG</DropdownMenuItem>
        <DropdownMenuItem onClick={copyLink}>Copy Link</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ExportButton