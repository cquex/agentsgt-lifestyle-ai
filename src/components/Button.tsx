import type React from "react"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "default" | "outline"
  className?: string
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  asChild = false,
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantStyles = {
    default: "bg-primary text-white hover:bg-secondary focus:ring-primary",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500",
  }

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (asChild) {
    return <div className={buttonStyles}>{children}</div>
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

export default Button
