"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"
import {
  AlertCircle,
  ArrowDown,
  Check,
  ChevronDown,
  Download,
  FileCode,
  HelpCircle,
  Info,
  Laptop,
  List,
  Menu,
  Smartphone,
  Tablet,
  X,
  ExternalLink,
} from "lucide-react"

export default function DeltaExecutor() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  // Function to scroll to download section
  const scrollToDownload = () => {
    scrollToSection("download-section")
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-4 px-6 flex items-center sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800 shadow-md">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="relative w-8 h-8">
            <Image
              src="/images/Delta-Executor-Logo.webp"
              alt="Delta Executor Logo"
              width={32}
              height={32}
              className="object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              priority
            />
          </div>
          <span className="text-xl font-bold">DeltaExecutor</span>
        </a>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden md:flex items-center gap-4">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          <a href="#download-section" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
            Download
          </a>
          <a href="#key-features" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
            Features
          </a>
          <a href="#device-compatibility" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
            Compatibility
          </a>
          <a href="#faqs" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
            FAQs
          </a>
          <Button
            onClick={scrollToDownload}
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded-lg flex items-center gap-1 h-auto"
          >
            <Download className="w-3 h-3" />
            Download
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm md:hidden pt-20">
          <div className="flex flex-col items-center gap-6 p-6">
            <a
              href="#"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
                setMobileMenuOpen(false)
              }}
              className="text-xl text-white hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#download-section"
              onClick={() => scrollToSection("download-section")}
              className="text-xl text-white hover:text-blue-400 transition-colors"
            >
              Download
            </a>
            <a
              href="#key-features"
              onClick={() => scrollToSection("key-features")}
              className="text-xl text-white hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#device-compatibility"
              onClick={() => scrollToSection("device-compatibility")}
              className="text-xl text-white hover:text-blue-400 transition-colors"
            >
              Compatibility
            </a>
            <a
              href="#faqs"
              onClick={() => scrollToSection("faqs")}
              className="text-xl text-white hover:text-blue-400 transition-colors"
            >
              FAQs
            </a>

            <Button
              onClick={() => {
                scrollToDownload()
                setMobileMenuOpen(false)
              }}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Now
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 flex flex-col">
          {/* Hero Box */}
          <div className="mb-10 relative rounded-xl p-4 text-center border border-blue-500/30 shadow-lg overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/Delta-Executor-Cover.webp"
                alt="Roblox Characters"
                fill
                sizes="100vw"
                className="object-cover blur-sm opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50 mix-blend-multiply"></div>
            </div>

            {/* Content (with relative positioning to appear above the background) */}
            <div className="relative z-10">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/images/Delta-Executor-Logo.webp"
                    alt="Delta Executor Logo"
                    width={160}
                    height={160}
                    className="object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-2 text-white">Delta Executor</h1>
              <p className="text-xl text-blue-300 mb-2">Latest Releases</p>
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center mb-6">
                <span className="text-sm md:text-base bg-blue-900/50 px-3 py-1 rounded-full text-blue-200">
                  <Smartphone className="w-3 h-3 inline mr-1" /> Android v2.669
                </span>
                <span className="text-sm md:text-base bg-blue-900/50 px-3 py-1 rounded-full text-blue-200">
                  <Tablet className="w-3 h-3 inline mr-1" /> iOS v2.668
                </span>
                <span className="text-sm md:text-base bg-blue-900/50 px-3 py-1 rounded-full text-blue-200">
                  <Laptop className="w-3 h-3 inline mr-1" /> Windows v3.61b
                </span>
              </div>
              <Button
                onClick={scrollToDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-base rounded-lg flex items-center gap-2 h-auto mx-auto"
              >
                <Download className="w-4 h-4" />
                Download Now
              </Button>
            </div>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Info className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Introduction</h2>
            </div>
            <p className="text-gray-300">
              Delta Executor is an app that helps you use special codes, called scripts, in your Roblox games. These
              codes help you do things like fly, run fast, or unlock extra items in your games. A lot of players love
              using Delta Executor because it makes Roblox more fun. You can use it on phones, tablets, and computers.
            </p>
            <p className="text-gray-300 mt-4">
              👉 So, let's get started! This guide will help you download and install Delta Executor. It will show you how to activate it with a key.
              You will also learn how to run Roblox scripts. The steps are clear and easy for everyone, even beginners. Don't worry, we've got you covered!
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <List className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Table of Contents</h2>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <button
                  onClick={() => scrollToSection("what-is")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <span>What Is Delta Executor?</span>
                </button>
                <button
                  onClick={() => scrollToSection("key-features")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <span>Key Features</span>
                </button>
                <button
                  onClick={() => scrollToSection("device-compatibility")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <span>Device Compatibility</span>
                </button>
                <button
                  onClick={() => scrollToSection("download-section")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <span>Download Delta Executor</span>
                </button>
                <button
                  onClick={() => scrollToSection("key-activation")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    5
                  </span>
                  <span>Key Window Activation</span>
                </button>
                <button
                  onClick={() => scrollToSection("what-you-get")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    6
                  </span>
                  <span>What You Get</span>
                </button>
                <button
                  onClick={() => scrollToSection("how-to-use")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    7
                  </span>
                  <span>How to Use Scripts</span>
                </button>
                <button
                  onClick={() => scrollToSection("games")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    8
                  </span>
                  <span>Games That Work Well</span>
                </button>
                <button
                  onClick={() => scrollToSection("problems")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    9
                  </span>
                  <span>Fixing Common Problems</span>
                </button>
                <button
                  onClick={() => scrollToSection("safety")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    10
                  </span>
                  <span>Is Delta Executor Safe?</span>
                </button>
                <button
                  onClick={() => scrollToSection("why-use")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    11
                  </span>
                  <span>Why Use Delta Executor?</span>
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-left flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded hover:bg-blue-900/20"
                >
                  <span className="text-sm bg-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    12
                  </span>
                  <span>FAQs</span>
                </button>
              </div>
            </div>
          </section>

          {/* What Is Delta Executor */}
          <section id="what-is" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <HelpCircle className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">What Is Delta Executor?</h2>
            </div>
            <p className="text-gray-300">
              Delta Executor is a tool that works with{" "}
              <a
                href="https://www.roblox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                Roblox <ExternalLink className="w-3 h-3" />
              </a>
              . It lets you use special codes to do cool things in your games, like fly, get rewards faster, or change
              how the game looks. Many players use it to play better or try fun tricks in games. It works on Android
              phones, iPhones and iPads, and Windows computers.
            </p>
            <p className="text-gray-300 mt-4">
              It belongs to a group of tools called Roblox executors, which are used by players to run custom features
              in their games.
            </p>
            <div className="my-8 flex justify-center">
              <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Delta-Executor-Download-Banner.webp"
                  alt="Delta Executor - Run Roblox Scripts on Mobile & PC"
                  width={800}
                  height={400}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="key-features" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Check className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Works on phones, tablets, and PCs</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Free to use — no cost!</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Can run many types of scripts</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Has a key system to keep it safe for everyone</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Built-in editor to paste your scripts easily</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Gets updates often to fix bugs and add new stuff</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Beginner friendly — simple to use</p>
              </div>
            </div>
          </section>

          {/* Device Compatibility */}
          <section id="device-compatibility" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Smartphone className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Device Compatibility</h2>
            </div>
            <p className="text-gray-300 mb-4">You can use Delta Executor on:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Smartphone className="w-10 h-10 text-blue-400 mb-2" />
                    <h3 className="font-medium mb-2">Android</h3>
                    <p className="text-sm text-gray-400">(with APK files)</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Tablet className="w-10 h-10 text-blue-400 mb-2" />
                    <h3 className="font-medium mb-2">iPhone/iPad</h3>
                    <p className="text-sm text-gray-400">(iOS devices via sideloading)</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Laptop className="w-10 h-10 text-blue-400 mb-2" />
                    <h3 className="font-medium mb-2">Windows PC</h3>
                    <p className="text-sm text-gray-400">(with easy setup file)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-300 mt-4">
              Visit Delta's official site to pick the right version for your device. Make sure to follow the steps
              written here or shown on the site to get everything running smoothly.
            </p>
          </section>

          {/* Download Section */}
          <section id="download-section" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Download className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Download Delta Executor (Latest Version)</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Scroll down and click on the download button that matches your device. Here's how to get it on each one:
            </p>
            <div className="flex justify-center mb-6">
              <ArrowDown className="w-8 h-8 text-blue-400 animate-bounce" />
            </div>

            <Tabs defaultValue="android" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
                <TabsTrigger value="android" className="data-[state=active]:bg-blue-600">
                  Android
                </TabsTrigger>
                <TabsTrigger value="ios" className="data-[state=active]:bg-blue-600">
                  iOS
                </TabsTrigger>
                <TabsTrigger value="windows" className="data-[state=active]:bg-blue-600">
                  Windows
                </TabsTrigger>
              </TabsList>
              <TabsContent value="android" className="mt-4 bg-zinc-800/50 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">File type: APK</p>
                    <p className="font-medium text-blue-400">Version: 2.669</p>
                    <p className="text-gray-400">Needs Android 6.0 or newer</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Steps:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-300">
                      <li>Visit the official site</li>
                      <li>Click on the download button for Android</li>
                      <li>Open the APK file you downloaded</li>
                      <li>Allow "Unknown Sources" if asked</li>
                      <li>Tap Install to finish</li>
                    </ol>
                  </div>
                  <div className="mt-6">
                    <Link href="https://github.com/RaihanTheDev/files/releases/download/2.669/Delta-v2.669.apk">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                      >
                        <Download className="w-4 h-4 mr-2" /> Download for Android
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ios" className="mt-4 bg-zinc-800/50 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">File type: IPA</p>
                    <p className="font-medium text-blue-400">Version: 2.668</p>
                    <p className="text-gray-400">Works on iOS 13 or newer</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Steps:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-300">
                      <li>Download the IPA file from the site</li>
                      <li>Use AltStore or Scarlet to open and install it</li>
                      <li>
                        Go to iPhone Settings {String.fromCharCode(8594)} General {String.fromCharCode(8594)} Device
                        Management
                      </li>
                      <li>Tap Trust App so it will open</li>
                    </ol>
                  </div>
                  <div className="mt-6">
                    <Link href="https://github.com/RaihanTheDev/files/releases/download/2.669/Delta-v2.668.ipa">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                      >
                        <Download className="w-4 h-4 mr-2" /> Download for iOS
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="windows" className="mt-4 bg-zinc-800/50 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">File type: EXE setup</p>
                    <p className="font-medium text-blue-400">Version: 3.61b</p>
                    <p className="text-gray-400">Works on Windows 10/11</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Steps:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-300">
                      <li>Download the setup file from the site</li>
                      <li>Run the file</li>
                      <li>If antivirus shows a warning, pause it temporarily</li>
                      <li>Follow all install instructions</li>
                    </ol>
                  </div>
                  <div className="mt-6">
                    <Link href="https://github.com/RaihanTheDev/files/releases/download/2.669/Delta-v3.61b.exe">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                      >
                        <Download className="w-4 h-4 mr-2" /> Download for Windows
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <p className="text-gray-300 mt-4">Don't worry — each version includes tips to help you during setup.</p>
          </section>

          {/* Key Window Activation */}
          <section id="key-activation" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <FileCode className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Key Window Activation</h2>
            </div>
            <p className="text-gray-300 mb-4">
              To use Delta Executor, you'll need a free key. This unlocks the app and keeps everything working right.
              Don't worry, getting the key is super easy! This keeps the app safe and helps the developers keep it free.
            </p>
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/vdOkeVjYvg4"
                  title="How to Get Delta Mobile Key 2025 | Delta Executor Mobile Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="bg-zinc-800 p-3 text-sm text-gray-300">
                <p>Video Tutorial: How to Get Delta Mobile Key 2025 | Delta Executor Mobile Tutorial</p>
              </div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <p className="font-medium mb-2">Steps to get your key:</p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Open Delta Executor and tap Get Key</li>
                <li>Follow the steps written in your browser</li>
                <li>Click the Continue button on each page</li>
                <li>Copy the delta key at the end</li>
                <li>Paste the key into the app</li>
              </ol>
              <p className="mt-4 text-gray-300">
                Once you paste the key and press enter, Delta Executor will be ready to run Roblox scripts!
              </p>
            </div>
          </section>

          {/* What You Get */}
          <section id="what-you-get" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Check className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">What You Get</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">The full Delta Executor app</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">A key to unlock it</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Script tools to run Roblox exploits</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Support for Android, iOS devices, and PCs</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Regular updates</p>
              </div>
            </div>
          </section>

          {/* How to Use Scripts */}
          <section id="how-to-use" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <FileCode className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">How to Use Scripts</h2>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <p className="mb-2 text-gray-300">After you install Delta and unlock it with your key:</p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Open the app</li>
                <li>Paste a script you want to try</li>
                <li>Tap Inject</li>
                <li>Enter your delta key again if asked</li>
                <li>Tap Execute to run your script</li>
              </ol>
              <p className="mt-4 text-gray-300">
                Try simple scripts first. Many safe and fun scripts are free to download online.
              </p>
            </div>
          </section>

          {/* Games That Work Well */}
          <section id="games" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Laptop className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Games That Work Well</h2>
            </div>
            <p className="text-gray-300 mb-4">Delta Executor works great with many Roblox games, including:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-400 mb-2">Blox Fruits</h3>
                <p className="text-gray-300 text-sm">(auto-farm, teleport)</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-400 mb-2">Pet Simulator X</h3>
                <p className="text-gray-300 text-sm">(auto collect, unlock pets)</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-400 mb-2">Da Hood</h3>
                <p className="text-gray-300 text-sm">(fly hack, walk through walls)</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-400 mb-2">Arsenal</h3>
                <p className="text-gray-300 text-sm">(aimbot, speed run)</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4">Players use scripts to level up faster or try fun changes in gameplay.</p>
          </section>

          {/* Fixing Common Problems */}
          <section id="problems" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <AlertCircle className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Fixing Common Problems</h2>
            </div>
            <p className="text-gray-300 mb-4">Here's how to fix problems if something goes wrong:</p>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-zinc-800">
                  <TableRow>
                    <TableHead className="text-blue-400">Problem</TableHead>
                    <TableHead className="text-blue-400">What To Do</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-t border-zinc-800">
                    <TableCell className="font-medium">App won't install</TableCell>
                    <TableCell>Turn on "Unknown Sources" or reinstall the IPA</TableCell>
                  </TableRow>
                  <TableRow className="border-t border-zinc-800">
                    <TableCell className="font-medium">Key not working</TableCell>
                    <TableCell>Restart the app and follow the key steps again</TableCell>
                  </TableRow>
                  <TableRow className="border-t border-zinc-800">
                    <TableCell className="font-medium">Script doesn't run</TableCell>
                    <TableCell>Try a different or newer script</TableCell>
                  </TableRow>
                  <TableRow className="border-t border-zinc-800">
                    <TableCell className="font-medium">Game is laggy</TableCell>
                    <TableCell>Close other apps or restart your phone/computer</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-gray-300 mt-4">
              Still need help? Tap the Help button in the app or visit the support section.
            </p>
          </section>

          {/* Is Delta Executor Safe? */}
          <section id="safety" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Info className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Is Delta Executor Safe?</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Yes! Delta Executor is safe to use when you download and install Delta from the official site. It:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Never asks for your Roblox login info</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Uses a secure delta key</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Doesn't collect private data</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4 font-medium">Never trust fake sites like delta-executor.com.</p>
          </section>

          {/* Why Use Delta Executor? */}
          <section id="why-use" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Check className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Why Use Delta Executor?</h2>
            </div>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-zinc-800">
                  <TableRow>
                    <TableHead className="text-blue-400">What You Get</TableHead>
                    <TableHead className="text-blue-400">Delta Executor</TableHead>
                    <TableHead className="text-blue-400">Other Tools</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-t border-zinc-800">
                    <TableCell className="font-medium">Works on phones and PC</TableCell>
                    <TableCell>
                      <Check className="text-green-500 w-5 h-5" />
                    </TableCell>
                    <TableCell>
                      <X className="text-red-500 w-5 h-5" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-t border-zinc-800">
                    <TableCell className="font-medium">100% Free to use</TableCell>
                    <TableCell>
                      <Check className="text-green-500 w-5 h-5" />
                    </TableCell>
                    <TableCell>
                      <X className="text-red-500 w-5 h-5" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-t border-zinc-800">
                    <TableCell className="font-medium">Secure with key system</TableCell>
                    <TableCell>
                      <Check className="text-green-500 w-5 h-5" />
                    </TableCell>
                    <TableCell>
                      <X className="text-red-500 w-5 h-5" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-t border-zinc-800">
                    <TableCell className="font-medium">Built-in scripts</TableCell>
                    <TableCell>
                      <Check className="text-green-500 w-5 h-5" />
                    </TableCell>
                    <TableCell>
                      <X className="text-red-500 w-5 h-5" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Help & Support */}
          <section id="help-support" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <HelpCircle className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Help & Support</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Easy install steps written for each platform</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Help getting your delta key</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Discord group for script sharing and updates</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">In-app support options if you need help</p>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section id="summary" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Check className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Summary</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Delta Executor is a free Roblox exploit tool for Android, iOS, and PC</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">You can use it to run Roblox scripts easily</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">The secure key system keeps everything safe</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Visit Delta's official site to download Delta Executor</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Great for beginners and advanced Roblox users</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <HelpCircle className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">FAQs</h2>
            </div>
            <div className="space-y-4">
              <Collapsible className="w-full border border-zinc-800 rounded-lg overflow-hidden">
                <CollapsibleTrigger className="w-full bg-zinc-800 p-3 text-left flex justify-between items-center">
                  <span>Where do I download Delta Executor?</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-zinc-900">
                  <p className="text-gray-300">Visit Delta's official site — not delta-executor.com.</p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="w-full border border-zinc-800 rounded-lg overflow-hidden">
                <CollapsibleTrigger className="w-full bg-zinc-800 p-3 text-left flex justify-between items-center">
                  <span>Does it work on iOS devices?</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-zinc-900">
                  <p className="text-gray-300">Yes, use AltStore or Scarlet to install it on iPhones and iPads.</p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="w-full border border-zinc-800 rounded-lg overflow-hidden">
                <CollapsibleTrigger className="w-full bg-zinc-800 p-3 text-left flex justify-between items-center">
                  <span>Is the key required?</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-zinc-900">
                  <p className="text-gray-300">Yes. It unlocks the app and keeps it safe.</p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="w-full border border-zinc-800 rounded-lg overflow-hidden">
                <CollapsibleTrigger className="w-full bg-zinc-800 p-3 text-left flex justify-between items-center">
                  <span>What if Delta doesn't install or launch?</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-zinc-900">
                  <p className="text-gray-300">
                    Follow the steps written in this guide or use the help tools in the app.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </section>

          {/* Final Thoughts */}
          <section id="final-thoughts" className="mb-10 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Info className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Final Thoughts</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Delta Executor makes Roblox more fun by helping you use creative scripts. It works on Android, iOS, and
              Windows. It's free, safe, and easy to set up.
            </p>
            <p className="text-gray-300">
              To start, visit Delta's official site, scroll down and click on the right download button, and follow the
              steps to install and launch it.
            </p>
          </section>

          {/* About the Developer */}
          <section id="about-developer" className="mb-6 scroll-mt-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500/20 p-1 rounded">
                <Info className="text-blue-400 w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">About the Developer</h2>
            </div>
            <p className="text-gray-300">
              The Delta Tools Team builds and maintains Delta Executor. They work hard to provide a safe, simple tool to
              help players explore new features in Roblox. For updates or support, visit the official website at{" "}
              <a
                href="https://deltaexecutor1.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                deltaexecutor1.net <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </section>

          {/* Download Button */}
          <div className="mt-8 flex justify-center">
            <Link href="https://github.com/RaihanTheDev/files/releases/download/2.669/Delta-v3.61b.exe">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-base rounded-lg flex items-center gap-2 h-auto"
              >
                <Download className="w-4 h-4" />
                Download Delta Executor Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 px-6 flex flex-col items-center sticky bottom-0 z-50 bg-black/80 backdrop-blur-sm border-t border-zinc-800 shadow-md">
        <p className="text-gray-500 text-sm">© 2025 Delta Executor. All rights reserved.</p>
      </footer>
    </div>
  )
}
