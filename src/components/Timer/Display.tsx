type DisplayProps = {
  label: 'Days' | 'Hours' | 'Minutes' | 'Seconds'
  value: number
  isLast?: boolean
}

export function Display ({ label, value, isLast }: DisplayProps) {
  const [first, second] = String(value).padStart(2, '0').split('')

  return (
    <div>
      <div className='flex text-white items-center'>
        <div className='px-4 mr-2 py-7 text-3xl font-pixel inline-block bg-[#33314b]'>
          {first}
        </div>

        <div className='px-4 py-7 text-3xl font-pixel inline-block bg-[#33314b]'>
          {second}
        </div>

        {!isLast && (
          <span className='font-pixel mx-3 text-3xl text-white pl-1'>:</span>
        )}
      </div>

      <span className='text-white mt-3 block'>
        {label}
      </span>
    </div>
  )
}
