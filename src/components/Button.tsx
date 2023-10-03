type ButtonProps = {
  children: React.ReactNode
  size?: 'small' | 'normal'
  variant?: 'primary' | 'dark' | 'white'
}

export function Button ({ children, size = 'normal', variant = 'primary' }: ButtonProps) {
  const fontSize = size === 'small' ? 'text-xs' : 'text-base'
  const padding = size === 'small' ? 'px-4 py-2' : 'px-6 py-2'
  const color = {
    primary: 'text-white bg-[#50C00D] hover:bg-gray-900 hover:shadow-gray-950',
    dark: 'text-white bg-gray-900 shadow-gray-950 hover:bg-[#50C00D] hover:shadow-[0px_6px_0px_#499F13]',
    white: 'text-gray-900 bg-white shadow-gray-200 hover:bg-white hover:shadow-gray-200',
  }[variant]

  return (
    <button
      className={`
        font-pixel uppercase ${fontSize} ${padding} ${color}
        shadow-[0px_6px_0px_#499F13] leading-none transition-all duration-150
        flex gap-2 items-center
      `}
    >
      {children}
    </button>
  )
}
