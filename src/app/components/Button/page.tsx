import React from 'react'

const Button = ({
  text = "Button",
  variant = "primary",
}) => {

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    success: "bg-green-600 hover:bg-green-700",
    danger: "bg-red-600 hover:bg-red-700",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    dark: "bg-gray-800 hover:bg-gray-900",
  }

  return (
    <button
      className={`
        px-6 py-2.5
        rounded-xl
        text-white
        font-semibold
        shadow-md
        transition
        duration-200
        active:scale-95
        ${variants[variant] || variants.primary}
      `}
    >
      {text}
    </button>
  )
}

export default Button
