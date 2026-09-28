'use client'
import React from 'react'

const locationList = [
  {
    title: 'Noida–Greater Noida Expressway',
    time: '2 Mins',
  },
  {
    title: 'Sector 148 Aqua Line Metro Station',
    time: '8 Mins',
  },
  {
    title: 'Yamuna Expressway',
    time: '10 Mins',
  },
  {
    title: 'Advant Navis Business Park',
    time: 'Approx. 10 Mins',
  },
  {
    title: 'Noida International Airport',
    time: '35 Mins',
  },
  {
    title: 'Jaypee Greens Golf Resort',
    time: 'Approx. 25 Mins',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-16 md:py-20 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[780px] mx-auto mb-10 md:mb-12" data-aos="fade-up">
          <span className="text-[#b31c26] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight">
            Location &amp; Connectivity
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List (Thin Sleek Cards) / Right Map ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 6 Location Points (Slim & Thin Grid) */}
          <div className="flex flex-col gap-2.5 sm:gap-3 justify-center">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#fff8f8] border border-[#f1dedf] hover:border-[#b31c26]/60 rounded-[12px] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(179,28,38,0.12)] transition-all duration-200"
              >
                {/* Left side: Red Pin Icon & Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#fbe6e7] group-hover:bg-[#b31c26] text-[#b31c26] group-hover:text-white flex items-center justify-center text-[12px] sm:text-[13px] shrink-0 transition-colors duration-200">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span className="text-[#1f2937] group-hover:text-[#b31c26] font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-200 leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#fbe6e7] group-hover:bg-[#b31c26] text-[#b31c26] group-hover:text-white font-bold text-[11.5px] sm:text-[12.5px] px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed */}
          <div 
            className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28070.25497590825!2d77.492828!3d28.425838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1a9a3376253%3A0x98084e274c6ee6b5!2sAce%20Arte!5e0!3m2!1sen!2sin!4v1790575254147!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ace Arte Google Maps Location"
              className="w-full h-full block"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
