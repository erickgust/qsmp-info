type ButtonProps = {
  children: React.ReactNode
  size?: 'small' | 'normal'
  variant?: 'primary' | 'dark' | 'white'
  type?: 'icon' | 'text'
  onClick?: () => void
}

export function Button ({
  children,
  size = 'normal',
  variant = 'primary',
  type = 'text',
  onClick,
}: ButtonProps) {
  const fontSize = size === 'small' ? 'text-sm' : 'text-base'
  const paddingX = size === 'small' ? 'px-4' : 'px-8'
  const paddingXIcon = type === 'icon' ? 'px-3' : paddingX
  const height = size === 'small' ? 'h-10' : 'h-14'
  const color = {
    primary: 'text-white bg-[#50C00D] hover:bg-gray-900 hover:shadow-gray-950',
    dark: 'text-white bg-gray-900 shadow-gray-950 hover:bg-[#50C00D] hover:shadow-[0px_6px_0px_#499F13]',
    white: 'text-gray-900 bg-white shadow-gray-200 hover:bg-white hover:shadow-gray-200',
  }[variant]

  return (
    <button
      className={`
        font-pixel uppercase ${height} ${fontSize} ${paddingXIcon} ${color}
        shadow-[0px_6px_0px_#499F13] leading-none transition-all duration-150
        flex gap-4 items-center
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
