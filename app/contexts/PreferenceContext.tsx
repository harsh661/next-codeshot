"use client"

import { useContext, createContext, useState } from "react"

interface PreferenceContextType {
  code: string
  title: string
  theme: string
  darkMode: boolean
  showBackground: boolean
  language: string
  autoDetect: boolean
  fontSize: number
  fontStyle: string
  padding: number
  updatePreferences: (newPreferences: PreferenceContextType) => void
}

const PreferenceContext = createContext<PreferenceContextType | undefined>(
  undefined
)

interface ProviderProps {
  children: React.ReactNode
}

export const PreferenceContextProvider = ({ children }: ProviderProps) => {
  const initialPreferences: PreferenceContextType = {
    code: "",
    title: "Untitled",
    theme: "hyper",
    darkMode: true,
    showBackground: true,
    language: "plainText",
    autoDetect: false,
    fontSize: 18,
    fontStyle: "robotoMono",
    padding: 64,
    updatePreferences: (newPreferences) => setPreferences(newPreferences)
  }

  const [preferences, setPreferences] =
    useState<PreferenceContextType>(initialPreferences)

  const updatePreferences = (newPreferences: PreferenceContextType) => {
    setPreferences(newPreferences)
  }

  return (
    <PreferenceContext.Provider value={{...preferences, updatePreferences}}>
      {children}
    </PreferenceContext.Provider>
  )
}

export const useGetPreference = () => {
  const context = useContext(PreferenceContext);
  if (context === undefined) {
    throw new Error('usePreferenceContext must be used within a PreferenceContextProvider');
  }
  return context;
}
