import Segment from './segment'

const SEVEN_SEGMENT_MAP: Record<number, number> = {
  0: 0b0111111,
  1: 0b0000110,
  2: 0b1011011,
  3: 0b1001111,
  4: 0b1100110,
  5: 0b1101101,
  6: 0b1111101,
  7: 0b0000111,
  8: 0b1111111,
  9: 0b1101111,
}

type Props = {
  value: number
}

function Display({ value }: Props) {
  type Seg = {
    id: number
    className: string
  }

  const segments: Seg[] = [
    {
      id: 0,
      className: 'top-0',
    },
    {
      id: 1,
      className: 'top-7 rotate-90 translate-x-7',
    },
    {
      id: 2,
      className: 'top-20 rotate-90 translate-x-7',
    },
    {
      id: 3,
      className: 'bottom-0',
    },
    {
      id: 4,
      className: 'top-20 rotate-90 -translate-x-7',
    },
    {
      id: 5,
      className: 'top-7 rotate-90 -translate-x-7',
    },
    {
      id: 6,
      className: 'bottom-[54px]',
    },
  ]

  return (
    <div className="relative h-[116px] w-12 -skew-x-[4deg]">
      {segments.map((segment) => (
        <Segment
          className={segment.className}
          key={segment.id}
          isActive={Boolean((2 ** segment.id) & SEVEN_SEGMENT_MAP[value])}
        />
      ))}
    </div>
  )
}

export default Display
