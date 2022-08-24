import type {FC, HTMLAttributes} from 'react';
import { parseISO, format } from 'date-fns'

interface Props extends HTMLAttributes<HTMLDivElement>{
  dateString: string
}

const DateFormatter: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormatter
