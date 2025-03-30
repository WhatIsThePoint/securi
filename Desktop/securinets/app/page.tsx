"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import {
  ChevronRight,
  Shield,
  Terminal,
  Users,
  Trophy,
  Calendar,
  BookOpen,
  Lock,
  Wifi,
  AlertCircle,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CommandLine from "@/components/command-line"

export default function Home() {
  const router = useRouter()
  const [showCommandLine, setShowCommandLine] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const commandInputRef = useRef<HTMLInputElement>(null)

  // Listen for keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+` or Ctrl+~ to toggle command line
      if (e.ctrlKey && (e.key === "c" || e.key === "l")) {
        setShowCommandLine((prev) => !prev)
        setTimeout(() => {
          if (commandInputRef.current) {
            commandInputRef.current.focus()
          }
        }, 100)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Command Line Interface */}
      {showCommandLine && <CommandLine onClose={() => setShowCommandLine(false)} inputRef={commandInputRef} />}

      {/* Help Tooltip */}
    

      {/* Fixed Command Prompt Hint */}
      <div
        className="fixed bottom-4 left-4 z-50 bg-black/80 border border-green-700 px-3 py-1 rounded font-mono text-xs text-green-500 cursor-pointer"
        onClick={() => setShowCommandLine(true)}
      >
        Type <kbd className="bg-green-900/50 px-1 rounded">help</kbd> or press{" "}
        <kbd className="bg-green-900/50 px-1 rounded">Ctrl+c</kbd> for commands
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>

        {/* Subtle glitch effect overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,70,0.03)_1px,transparent_1px)] bg-[size:100%_2px] animate-scan-slow"></div>

        {/* Matrix-like code rain effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="matrix-code-rain"></div>
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(0,255,60,0.15),transparent_60%)]"></div>

        <div className="container relative z-20 px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 glitch-container-subtle">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscalemedia-transformed-A0tayXytmpbvQcNAfvXlGNadyk4XaF.png"
                alt="Securinets Logo"
                width={256}
                height={256}
                className="glitch-image"
              />
              <div className="glitch-effect-subtle"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 glitch-text-subtle">
            SECURINETS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100/80 max-w-3xl mx-auto">
            <span className="font-mono">root@securinets:~#</span> Exploring the digital frontier through cybersecurity
            excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-green-700 hover:bg-green-800 text-white border-green-600 border px-8 py-6 text-lg font-mono"
              onClick={() => window.open("https://forms.google.com/securinets-join", "_blank")}
            >
              ./join_community.sh
            </Button>
            <Button
              variant="outline"
              className="border-green-700 text-green-500 hover:bg-green-950/30 px-8 py-6 text-lg font-mono"
              onClick={() => {
                const activitiesSection = document.getElementById("activities")
                if (activitiesSection) {
                  activitiesSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              cat activities.txt <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Binary code decoration */}
          <div className="absolute bottom-20 left-4 text-green-800/30 text-xs font-mono hidden md:block">
            01001000 01100001 01100011 01101011
            <br />
            01110100 01101000 01100101 01110000
            <br />
            01101100 01100001 01101110 01100101
            <br />
            01110100
          </div>
        </div>

        {/* Animated down arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="h-8 w-8 text-green-500 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-900/10 to-transparent"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">About Securinets</h2>
              <p className="text-gray-300 mb-6">
                Securinets is a premier cybersecurity club dedicated to fostering knowledge, skills, and community in
                the ever-evolving digital security landscape. Founded by passionate security enthusiasts, we provide a
                platform for learning, collaboration, and growth.
              </p>
              <p className="text-gray-300 mb-8">
                Our mission is to cultivate the next generation of cybersecurity professionals through hands-on
                experience, knowledge sharing, and real-world challenges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 border border-green-900/50 p-4 rounded-lg">
                  <Shield className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Blue Team</h3>
                  <p className="text-sm text-gray-400">Learn defensive strategies and security hardening</p>
                </div>
                <div className="bg-black/50 border border-green-900/50 p-4 rounded-lg">
                  <Terminal className="h-8 w-8 text-green-500 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Red Team</h3>
                  <p className="text-sm text-gray-400">Master ethical hacking and penetration testing</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-video">
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-700/20 rounded-lg"></div>
                <div className="absolute inset-2 border border-green-700/30 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Terminal className="h-16 w-16 text-green-500" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-6 w-full bg-black/80 border border-green-700/30 rounded-sm flex items-center px-3">
                    <span className="text-green-500 text-xs font-mono">$ nmap -sS -A -T4 target.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Hex code decoration */}
        <div className="absolute top-10 right-10 text-green-800/20 text-xs font-mono hidden lg:block">
          0x4861636b 0x74686520
          <br />
          0x706c616e 0x65742e2e
          <br />
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">Our Activities</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              <span className="font-mono text-green-400">sudo ./run_activities.sh</span> - Dive into our diverse range
              of cybersecurity activities designed to challenge, educate, and inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/80 border border-green-900/30 rounded-lg p-6 hover:border-green-600 transition-all group">
              <Trophy className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">CTF Competitions</h3>
              <p className="text-gray-400 mb-4">
                Participate in Capture The Flag competitions to test your skills against other teams in a controlled
                environment.
              </p>
              <div className="flex items-center text-sm text-green-500 font-mono bg-green-900/10 p-2 rounded">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="bg-black/80 border border-green-900/30 rounded-lg p-6 hover:border-green-600 transition-all group">
              <Users className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                Workshops & Training
              </h3>
              <p className="text-gray-400 mb-4">
                Hands-on workshops led by industry experts covering various cybersecurity domains and technologies.
              </p>
              <div className="flex items-center text-sm text-green-500 font-mono bg-green-900/10 p-2 rounded">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="bg-black/80 border border-green-900/30 rounded-lg p-6 hover:border-green-600 transition-all group">
              <Calendar className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">Hackathons</h3>
              <p className="text-gray-400 mb-4">
                Intensive coding and hacking events where teams collaborate to solve security challenges.
              </p>
              <div className="flex items-center text-sm text-green-500 font-mono bg-green-900/10 p-2 rounded">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="bg-black/80 border border-green-900/30 rounded-lg p-6 hover:border-green-600 transition-all group">
              <BookOpen className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">Study Groups</h3>
              <p className="text-gray-400 mb-4">
                Collaborative learning sessions focused on certifications, new technologies, and security methodologies.
              </p>
              <div className="flex items-center text-sm text-green-500 font-mono bg-green-900/10 p-2 rounded">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="bg-black/80 border border-green-900/30 rounded-lg p-6 hover:border-green-600 transition-all group">
              <Wifi className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">Wireless Security</h3>
              <p className="text-gray-400 mb-4">
                Learn about WiFi security, packet analysis, and wireless network penetration testing techniques.
              </p>
              <div className="flex items-center text-sm text-green-500 font-mono bg-green-900/10 p-2 rounded">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="bg-black/80 border border-green-900/30 rounded-lg p-6 hover:border-green-600 transition-all group">
              <Lock className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">Cryptography</h3>
              <p className="text-gray-400 mb-4">
                Explore encryption, hashing, and cryptographic protocols through hands-on challenges and projects.
              </p>
              <div className="flex items-center text-sm text-green-500 font-mono bg-green-900/10 p-2 rounded">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent"></div>

        {/* Easter egg - hidden message */}
        <div className="absolute bottom-10 right-10 text-green-900/20 text-xs font-mono hidden lg:block">
          {/* The password is: Th3_M4tr1x_h45_y0u */}
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">Ready to Join the Elite?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              <span className="font-mono text-green-400">if [ $skill_level -ge 0 ]; then</span> Become part of our
              cybersecurity community and take your skills to the next level.{" "}
              <span className="font-mono text-green-400">fi</span>
            </p>
            <Button
              className="bg-green-700 hover:bg-green-800 text-white border-green-600 border px-8 py-6 text-lg font-mono"
              onClick={() => window.open("https://forms.google.com/securinets-join", "_blank")}
            >
              sudo ./apply_membership.sh
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-12 bg-black border-t border-green-900/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-16 h-16 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscalemedia-transformed-A0tayXytmpbvQcNAfvXlGNadyk4XaF.png"
                  alt="Securinets Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-green-500 font-mono">SECURINETS</h3>
                <p className="text-gray-400 text-sm font-mono">0xC7B3R53CUR17Y</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group relative">
                <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </div>
              <div className="group relative">
                <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  About
                </Link>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-900/80 text-green-100 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                  Coming Soon
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  Activities
                </Link>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-900/80 text-green-100 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                  Coming Soon
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  Events
                </Link>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-900/80 text-green-100 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                  Coming Soon
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  Resources
                </Link>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-900/80 text-green-100 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                  Coming Soon
                </div>
              </div>
              <div className="group relative">
                <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  Contact
                </Link>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-900/80 text-green-100 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-green-900/30 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p className="font-mono">
              © {new Date().getFullYear()} Securinets.{" "}
              <span className="text-green-700">All your base are belong to us.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

