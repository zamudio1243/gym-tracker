import dayjs, { type ConfigType } from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
dayjs.extend(timezone)

export const MEXICO_CITY_TIMEZONE = "America/Mexico_City"

export const dayjsTz = (date?: ConfigType) =>
  date ? dayjs.tz(date, MEXICO_CITY_TIMEZONE) : dayjs().tz(MEXICO_CITY_TIMEZONE)

export function nowInMexicoCity() {
  return dayjsTz()
}

export function toMexicoCityTime(date: ConfigType) {
  return dayjs(date).tz(MEXICO_CITY_TIMEZONE)
}

export function formatInMexicoCity(date: ConfigType, format: string) {
  return toMexicoCityTime(date).format(format)
}

export function isSameMexicoCityDay(a: ConfigType, b: ConfigType) {
  return toMexicoCityTime(a).isSame(toMexicoCityTime(b), "day")
}

export { dayjs }
