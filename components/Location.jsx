'use client'
import React from 'react'
import Image from 'next/image'
import { locationMap } from '../lib/images'

const locationList = [
  {
    icon: 'fa-solid fa-road',
    title: 'Yamuna Expressway',
    time: '2 Min'
  },
  {
    icon: 'fa-solid fa-plane',
    title: 'Jewar Airport',
    time: '30 min'
  },
  {
    icon: 'fa-solid fa-train-subway',
    title: 'Proposed Metro Station',
    time: '5 min'
  },
  {
    icon: 'fa-solid fa-road',
    title: 'Noida-Gr. Noida Expressway',
    time: '5 min'
  }
]

const Location = () => {
  return (
    <section id="location" className="location-section py-16 md:py-24 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1350px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[780px] mx-auto mb-14 md:mb-16" data-aos="fade-up">
          <span className="text-[#b31c26] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight">
            Location & Connectivity
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List / Right Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Location List */}
          <div className="flex flex-col gap-4 justify-center">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 60).toString()}
                className="group bg-white hover:bg-[#b31c26] border border-[#fbe6e7] hover:border-[#b31c26] rounded-[18px] p-4 sm:p-5 flex items-center justify-between shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(179, 28, 38,0.25)] transition-all duration-300 cursor-pointer"
              >
                {/* Left side: Icon & Title */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] bg-[#fbe6e7] group-hover:bg-white/20 text-[#b31c26] group-hover:text-white flex items-center justify-center text-[22px] sm:text-[24px] flex-shrink-0 transition-all duration-300 shadow-xs">
                    <i className={item.icon}></i>
                  </div>
                  <span className="text-[#111111] group-hover:text-white font-bold text-[16px] sm:text-[18px] transition-colors duration-300">
                    {item.title}
                  </span>
                </div>

                {/* Right side: Time/Distance Number */}
                <span className="bg-[#fbe6e7] group-hover:bg-white text-[#b31c26] font-extrabold text-[14px] sm:text-[15px] px-4 py-1.5 rounded-full whitespace-nowrap transition-all duration-300 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Location Map Image */}
          <div 
            className="relative w-full h-full min-h-[360px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-200 bg-gray-100"
            data-aos="fade-left"
          >
            <Image
              src={locationMap}
              alt="ACE Arte Sector 150 Location Map"
              fill
              className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
