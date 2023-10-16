type MonthsTypes = "January" | "Febuary" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"
type MonthToDays = { [k in MonthsTypes]: number }
type DaysOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"

export interface DateDataType {
    today: number,
    thisYear: number,
    thisMonth: number,
    MONTHS: MonthToDays,
    months: Array<MonthsTypes>,
    days: Array<DaysOfWeek>
}
