/**
 * Presentation-side formatting helpers. Dates are stored in the content
 * layer as plain 'YYYY-MM' strings; how they read on screen is a UI concern.
 */

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function parse(ym: string): { year: number; month: number } {
  const [year, month] = ym.split('-').map(Number)
  return { year, month }
}

export function formatMonth(ym: string): string {
  const { year, month } = parse(ym)
  return `${MONTHS[month - 1]} ${year}`
}

export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : 'Present'}`
}

/** Inclusive duration, e.g. '4 yrs 4 mos', '3 mos'. */
export function formatDuration(start: string, end: string | null): string {
  const s = parse(start)
  const now = new Date()
  const e = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() + 1 }
  const total = (e.year - s.year) * 12 + (e.month - s.month) + 1
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`)
  return parts.join(' ') || '1 mo'
}

/** '2014' + '2018' → '2014 – 2018'; end alone → '2014'. */
export function formatYearRange(start: string | undefined, end: string): string {
  return start ? `${start} – ${end}` : end
}
