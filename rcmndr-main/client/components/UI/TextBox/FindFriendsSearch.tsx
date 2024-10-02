import { ChangeEvent } from 'react'
import { twMerge } from 'tailwind-merge'

function FindFriendsSearch({
  queryState,
  handleChange,
}: {
  queryState: string
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      data-testid="textbox-search-input"
      type="text"
      className={twMerge(
        'p-2 bg-[#301453] text-white border focus:shadow-[0px_0px_9px_2px_#B07CF2] border-transparent placeholder-[#B07CF2] focus:outline-none block w-full rounded-md sm:text-sm'
      )}
      autoComplete="off"
      placeholder="Search genre, nickname or a real name..."
      value={queryState}
      onChange={handleChange}
    />
  )
}

export default FindFriendsSearch
