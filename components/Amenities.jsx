'use client'
import React from 'react'

const amenities = [
  // {
  //   title: 'Clubhouse',
  //   description: '75,000 sq.ft. grand club',
  //   icon: 'fa-solid fa-house'
  // },
  {
    title: 'Swimming Pool',
    description: 'All-weather infinity pool',
    icon: 'fa-solid fa-water-ladder'
  },
  {
    title: 'Gymnasium',
    description: 'Technology fitness equipment',
    icon: 'fa-solid fa-dumbbell'
  },
  {
    title: 'Kids Play Area',
    description: 'Safe & modern play zone',
    icon: 'fa-solid fa-child-reaching'
  },
  {
    title: 'Jogging Track',
    description: 'Synthetic rubber track',
    icon: 'fa-solid fa-person-running'
  },
  // {
  //   title: 'Landscaped Garden',
  //   description: 'Zen garden & water bodies',
  //   icon: 'fa-solid fa-tree'
  // },
  {
    title: 'Indoor Games',
    description: 'Snooker, Billiards & TT',
    icon: 'fa-solid fa-table-tennis-paddle-ball'
  },
  {
    title: 'Sports Court',
    description: 'Tennis, Squash & Basketball',
    icon: 'fa-solid fa-basketball'
  },
  {
    title: 'Yoga Deck',
    description: 'Peaceful & natural environment',
    icon: 'fa-solid fa-spa'
  },
  // {
  //   title: 'CCTV Security',
  //   description: '5-Tier AI security system',
  //   icon: 'fa-solid fa-shield-halved'
  // },
  // {
  //   title: 'Power Backup',
  //   description: '100% uninterrupted power supply',
  //   icon: 'fa-solid fa-bolt'
  // },
  {
    title: 'EV Charging',
    description: 'Available at every parking bay',
    icon: 'fa-solid fa-charging-station'
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-[100px] font-poppins" style={{ background: '#f9f9f9' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-[#b31c26] font-bold text-[14px] tracking-[2px] uppercase mb-3 block">
            WORLD CLASS AMENITIES
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-bold m-0">
            A Lifestyle Beyond Ordinary
          </h2>
        </div>

        {/* 4x3 Grid of Amenity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-7">
          {amenities.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={((index % 4) * 50).toString()}
              className="group bg-white rounded-[20px] p-8 text-center border border-[#fbe6e7] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(179, 28, 38,0.12)] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center"
            >
              {/* Icon in Circular Badge */}
              <div className="w-[76px] h-[76px] rounded-full bg-[#fbe6e7] text-[#b31c26] group-hover:bg-[#b31c26] group-hover:text-white flex items-center justify-center text-[28px] mb-6 transition-all duration-300 group-hover:scale-110 shadow-[0_4px_10px_rgba(179, 28, 38,0.1)] group-hover:shadow-[0_6px_20px_rgba(179, 28, 38,0.3)]">
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <h4 className="text-[#222222] font-extrabold text-[19px] mb-2.5 tracking-tight group-hover:text-[#b31c26] transition-colors duration-200">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-[#6c757d] text-[13.5px] leading-relaxed m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Amenities
