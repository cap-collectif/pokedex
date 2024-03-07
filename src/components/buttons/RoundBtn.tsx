import React from 'react'

interface RoundBtnProps {
  children: React.ReactNode
  ariaLabel: string
  onClick: () => void
}

const RoundBtn: React.FC<RoundBtnProps> = ({ children, ariaLabel, onClick }) => {
  return (
    <button
      className="font-bold text-sm  w-20 h-16 rounded-full bg-white shadow-[2px_2px_2px_2px_#2d3748] border ease-out duration-300 sm:hover:translate-x-1 sm:hover:translate-y-1 sm:hover:shadow-none md:text-base"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default RoundBtn
