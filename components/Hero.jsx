'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import LeadForm from './LeadForm'
import { heroSlides } from '../lib/images'

const Hero = ({ setIsOpen }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section
      id="home"
      className="hero-section relative bg-[#0f172a] text-white overflow-hidden"
      style={{
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      }}
    >
      {/* Dynamic blurred background based on active slide */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroSlides[activeSlide].img}
          alt="Background"
          fill
          priority
          className="object-cover object-center blur-[80px] scale-125 opacity-40 transition-all duration-1000 ease-in-out"
        />
        {/* Elegant overlay gradient for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/70 via-[#0a0f1a]/90 to-[#020617] backdrop-blur-[2px]" />
      </div>

      <div className="w-full pt-[82px] pb-8 sm:pt-[88px] sm:pb-10 lg:pt-[98px] lg:pb-12 relative z-10">

        {/* Ambient subtle glow in background */}
        <div className="absolute top-0 right-1/4 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#b31c26]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-3.5 sm:px-6" style={{ maxWidth: '1380px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* ══════════════════════════════════════════════════════
                LEFT 50% (7 cols on lg): Pure Visual & Info
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Heading & Brand Identity */}
              <div className="mb-3 sm:mb-4">
                <div className="flex flex-wrap items-baseline gap-2.5 sm:gap-3.5 mb-1.5">
                  <h1 className="text-white font-black tracking-tight leading-[1.08] text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] m-0">
                    Ace arte 
                  </h1>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[1.5px] font-semibold text-[#ff808a] bg-[#b31c26]/20 border border-[#ff4d5a]/30 px-2.5 py-0.5 rounded-full self-center">
                    By ACE Group
                  </span>
                </div>

                {/* Brand Tagline & Location Row */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3.5 text-xs sm:text-[13.5px] text-white/75 mt-1.5">
                  <span className="text-white/90 font-medium tracking-[2px] uppercase text-[11px] sm:text-xs">
                    Live Where Art Inspires
                  </span>
                  <span className="text-white/30 hidden xs:inline">•</span>
                  <span className="inline-flex items-center gap-1.5 text-white/80 font-medium">
                    <i className="fas fa-location-dot text-[#ff4d5a] text-[11px]" />
                    <span>Sector 150, Noida Expressway</span>
                  </span>
                </div>
              </div>

              {/* ── 100% CLEAN IMAGE (No text, no overlays, pure photo) ── */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-black">
                <div className="relative w-full h-[220px] xs:h-[250px] sm:h-[310px] md:h-[350px] lg:h-[370px]">
                  <Image
                    src={heroSlides[activeSlide].img}
                    alt={heroSlides[activeSlide].name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                  />
                </div>
              </div>

              {/* ── SIMPLE CLEAN BUTTONS (Below image) ── */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {heroSlides.map((slide, idx) => {
                  const isActive = activeSlide === idx
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`py-2 px-1 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center border truncate ${
                        isActive
                          ? 'bg-[#b31c26] text-white border-[#b31c26] shadow-md'
                          : 'bg-white/10 text-white/75 border-transparent hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      <span className="sm:hidden">{slide.shortName || slide.name}</span>
                      <span className="hidden sm:inline">{slide.name}</span>
                    </button>
                  )
                })}
              </div>

              {/* Micro Value Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-4 text-[11px] sm:text-xs text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <i className="fas fa-gem text-[#d93843]" /> ~15 Acres Green Township
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="fas fa-building text-amber-400" /> 11 Towers, 23 Floors
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="fas fa-car-side text-emerald-400" /> Free Site Cab
                </span>
              </div>

            </div>

            {/* ══════════════════════════════════════════════════════
                RIGHT 50% (5 cols on lg): Conversion Console Card
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 mt-2 lg:mt-0 flex flex-col">

              {/* Key Quick Specs Strip (Moved above the form) */}
              <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3 sm:gap-6 p-3 sm:p-4 mb-5 rounded-2xl bg-white/5 border border-white text-xs sm:text-sm shadow-lg">
                <div>
                  <span className="text-white/60 text-[10.5px] uppercase block mb-0.5">Price</span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d5a] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d5a]"></span>
                    </span>
                    <strong className="blink-price font-black text-[15px] sm:text-[16px] tracking-tight">
                      ₹ 3.23 Cr* Onwards
                    </strong>
                  </div>
                </div>
                <div className="border-l border-white/30 pl-3 sm:pl-6">
                  <span className="text-white/60 text-[10.5px] uppercase block mb-0.5">Typology</span>
                  <strong className="text-white font-bold text-[14px] sm:text-[15px]">3 &amp; 4 BHK</strong>
                </div>
                <div className="border-l border-white/30 pl-3 sm:pl-6">
                  <span className="text-white/60 text-[10.5px] uppercase block mb-0.5">Status</span>
                  <strong className="text-emerald-400 font-bold text-[14px] sm:text-[15px]">New Launch</strong>
                </div>
              </div>

              <div
                className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(15, 23, 42, 0.92)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.65)',
                  borderTop: '4px solid #b31c26',
                }}
              >
                {/* Header */}
                <div className="text-center mb-4 sm:mb-5">
                  {/* <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#d93843] bg-[#b31c26]/15 border border-[#b31c26]/30 mb-1.5">
                    EXCLUSIVE PRE-LAUNCH ACCESS
                  </span> */}
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-white tracking-tight m-0">
                    Get Instant Cost Sheet &amp; Plans
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/70 mt-1 font-normal">
                    Delivered on WhatsApp &amp; Email in 60s
                  </p>
                </div>

                {/* LeadForm */}
                <LeadForm formName="Hero Optimized Form" btnText="Get Cost Sheet on WhatsApp" />

                {/* Instant Actions (Call & Visit on Mobile) */}
                <div className="mt-3.5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11.5px] sm:text-xs text-white/80">
                  <button
                    type="button"
                    onClick={() => setIsOpen && setIsOpen(true)}
                    className="text-[#d93843] hover:underline flex items-center gap-1.5 font-semibold cursor-pointer"
                  >
                    <i className="fas fa-calendar-check text-[11px]" />
                    <span>Book VIP Visit</span>
                  </button>
                  <a
                    href="tel:+919560582493"
                    className="text-emerald-400 hover:underline flex items-center gap-1.5 font-semibold"
                  >
                    <i className="fas fa-phone text-[11px]" />
                    <span>Call Sales Desk</span>
                  </a>
                </div>

                {/* Reassurance */}
                {/* <p className="text-center text-[10px] text-white/40 mt-2.5 mb-0">
                  🔒 Verified Channel Partner • No Spam Guarantee
                </p> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
