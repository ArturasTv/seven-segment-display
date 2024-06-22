import { cn } from '../../utils/classnames'
import { motion } from 'framer-motion'

type Props = {
  className?: string
  isActive?: boolean
}
function Segment({ className, isActive }: Props) {
  return (
    <motion.div
      animate={{
        backgroundColor: isActive ? 'rgb(220 38 38)' : 'rgb(254 202 202 / 0.1)',
        boxShadow: isActive
          ? '0px 0px 10px 4px rgba(220, 38, 38, 0.4)'
          : 'none',
      }}
      transition={{ duration: isActive ? 0 : 0.4, ease: 'easeInOut' }}
      className={cn(
        'h-2 w-12 rounded-full absolute',

        className
      )}></motion.div>
  )
}

export default Segment
