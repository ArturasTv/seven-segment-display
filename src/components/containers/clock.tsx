import Display from '../ui/display'
import useGetTime from '../../hooks/use-get-time'

function Clock() {
  const { years, months, days, hours, minutes, seconds } = useGetTime()

  return (
    <div className="flex flex-col space-y-8 items-center">
      <div className="flex flex-row space-x-12">
        <div className="flex flex-row space-x-8">
          <Display value={Math.floor(years / 1000)} />
          <Display value={Math.floor((years / 100) % 10)} />
          <Display value={Math.floor((years / 10) % 10)} />
          <Display value={years % 10} />
        </div>
        <div className="flex flex-row space-x-8">
          <Display value={Math.floor((months / 10) % 10)} />
          <Display value={months % 10} />
        </div>
        <div className="flex flex-row space-x-8">
          <Display value={Math.floor((days / 10) % 10)} />
          <Display value={days % 10} />
        </div>
      </div>
      <div className="flex flex-row space-x-12">
        <div className="flex flex-row space-x-8">
          <Display value={Math.floor(hours / 10)} />
          <Display value={hours % 10} />
        </div>
        <div className="flex flex-row space-x-8">
          <Display value={Math.floor(minutes / 10)} />
          <Display value={minutes % 10} />
        </div>
        <div className="flex flex-row space-x-8">
          <Display value={Math.floor(seconds / 10)} />
          <Display value={seconds % 10} />
        </div>
      </div>
    </div>
  )
}

export default Clock
