"use client"

import type React from "react"

import { useState, useEffect, useRef, type RefObject } from "react"
import { X } from "lucide-react"

interface CommandLineProps {
  onClose: () => void
  inputRef: RefObject<HTMLInputElement>
}

const CommandLine: React.FC<CommandLineProps> = ({ onClose, inputRef }) => {
  const [command, setCommand] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to Securinets Terminal v1.0",
    'Type "help" for available commands',
    "-----------------------------------",
  ])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = (cmd: string) => {
    // Add command to history
    setHistory((prev) => [...prev, `root@securinets:~# ${cmd}`])

    // Add to command history for up/down navigation
    if (cmd.trim() !== "") {
      setCommandHistory((prev) => [cmd, ...prev])
    }

    // Reset history index
    setHistoryIndex(-1)

    // Process command
    const cmdLower = cmd.toLowerCase().trim()

    switch (cmdLower) {
      case "help":
        setHistory((prev) => [
          ...prev,
          "Available commands:",
          "  help         - Show this help message",
          "  home         - Go to home page",
          "  about        - Go to about section",
          "  activities   - Go to activities section",
          "  join         - Open join form",
          "  clear        - Clear terminal",
          "  exit         - Close terminal",
        ])
        break

      case "home":
        setHistory((prev) => [...prev, "Navigating to home page..."])
        window.scrollTo({ top: 0, behavior: "smooth" })
        break

      case "about":
        setHistory((prev) => [...prev, "Navigating to about section..."])
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        break

      case "activities":
        setHistory((prev) => [...prev, "Navigating to activities section..."])
        document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })
        break

      case "join":
        setHistory((prev) => [...prev, "Opening join form..."])
        window.open("https://forms.google.com/securinets-join", "_blank")
        break

      case "clear":
        setHistory(["Terminal cleared", "-----------------------------------"])
        break

      case "exit":
        onClose()
        break

      case "":
        // Do nothing for empty command
        break

      default:
        setHistory((prev) => [...prev, `Command not found: ${cmd}. Type "help" for available commands.`])
    }

    // Clear input
    setCommand("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(command)
    } else if (e.key === "Escape") {
      onClose()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCommand(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCommand(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCommand("")
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-3xl h-96 bg-black border border-green-700 rounded-md overflow-hidden flex flex-col">
        <div className="bg-green-900/50 px-4 py-2 flex justify-between items-center">
          <div className="text-green-400 font-mono text-sm">Securinets Terminal</div>
          <button onClick={onClose} className="text-green-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <div ref={terminalRef} className="flex-1 p-4 font-mono text-green-400 text-sm overflow-y-auto">
          {history.map((line, index) => (
            <div key={index} className="mb-1">
              {line}
            </div>
          ))}
        </div>

        <div className="border-t border-green-900/50 px-4 py-2 flex items-center">
          <span className="text-green-500 mr-2 font-mono">root@securinets:~#</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-green-100 font-mono"
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}

export default CommandLine

