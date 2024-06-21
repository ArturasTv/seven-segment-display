import { cn } from '../../utils/classnames'

type Props = {
  className?: string
  isActive?: boolean
}
function Segment({ className, isActive }: Props) {
  return (
    <div
      className={cn(
        'h-2 w-12 rounded-full absolute',
        {
          'bg-red-600': isActive,
          'bg-red-200/10': !isActive,
        },
        className
      )}></div>
  )
}

export default Segment
