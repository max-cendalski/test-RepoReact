import {parseISO, formDistanceToNow} from 'date-fns';

const TimeAgo = ({timestamp}) => {
  let timeAgo = ''
  if(timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp}>
     $nbsp; <i>{TimeAgo}</i>
    </span>
  )
}

export default TimeAgo
