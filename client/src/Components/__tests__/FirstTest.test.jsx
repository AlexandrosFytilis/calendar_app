import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import App from '../../App';
import {TODAYDATA} from '../Data.tsx'
import { debug } from 'jest-preview';

import '@testing-library/jest-dom';
import { DateContext } from '../CurrentDateContext';
import { useContext } from 'react';

// TODAYDATA.DAY = 16
// TODAYDATA.YEAR = 2024
// TODAYDATA.MONTH = 8

test("Render the Month Component", () => {
    render(<App/>)
    
    const monthElement = screen.getByTestId("month-1")
    expect(monthElement).toBeInTheDocument()
})

test(`Is the first day of the week Sunday?`, () => {
    render(<App/>)

    const todayElement = screen.getByTestId("weekday-0")
    expect(todayElement).toHaveTextContent("Sunday")
})

test(`Is the last day of the week Saturday?`, () => {
  render(<App/>)

  const todayElement = screen.getByTestId("weekday-6")
  expect(todayElement).toHaveTextContent("Saturday")
})

test(`Is the current month November 2023?`, () => {
  TODAYDATA.MONTH = 11
    render(
        <DateContext.Provider value={{month: TODAYDATA.MONTH, setMonth: jest.fn(), year: TODAYDATA.YEAR, setYear: jest.fn()}}>
          <App/>
        </DateContext.Provider>
      )

    const todayElement = screen.getByTestId("displayed-month")
    expect(todayElement).toHaveTextContent("November 2023")
})

test(`Is the current month December 2023?`, () => {
  render(
      <DateContext.Provider value={{month: 12, setMonth: jest.fn(), year: 2023, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const todayElement = screen.getByTestId("displayed-month")
  expect(todayElement).toHaveTextContent("December 2023")
})

test(`Is the current day the 16th?`, () => {
  TODAYDATA.DAY = 16
  TODAYDATA.YEAR = 2023
  TODAYDATA.MONTH = 11
  render(
      <DateContext.Provider value={{month: 11, setMonth: jest.fn(), year: 2023, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const todayElement = screen.getByTestId("today")
  expect(todayElement).toHaveTextContent(16)
})

test(`Is the current Date Ocober 9th 1996?`, () => {
  TODAYDATA.DAY = 9
  TODAYDATA.YEAR = 1996
  TODAYDATA.MONTH = 10
  render(
      <DateContext.Provider value={{month: 10, setMonth: jest.fn(), year: 1996, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const monthElement = screen.getByTestId("displayed-month")
  expect(monthElement).toHaveTextContent("October 1996")
  const todayElement = screen.getByTestId("today")
  expect(todayElement).toHaveTextContent(9)
})

test(`Does the switch to previous Month button appear?`, () => {
  render(
      <DateContext.Provider value={{month: TODAYDATA.MONTH, setMonth: jest.fn(), year: TODAYDATA.YEAR, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const todayElement = screen.getByTestId("previous-month-button")
  expect(todayElement).toHaveTextContent("<")
})

test(`Does the switch to next Month button appear?`, () => {
  render(
      <DateContext.Provider value={{month: TODAYDATA.MONTH, setMonth: jest.fn(), year: TODAYDATA.YEAR, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const todayElement = screen.getByTestId("next-month-button")
  expect(todayElement).toHaveTextContent(">")
})

test(`Does the Return Button appear?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2023
  TODAYDATA.MONTH = 11
  render(
      <DateContext.Provider value={{month: 12, setMonth: jest.fn(), year: 2024, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const todayElement = screen.getByTestId("return-button")
  expect(todayElement).toHaveTextContent("RETURN")
})

test(`Does the November 2023 contain days from the previous Month?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2023
  TODAYDATA.MONTH = 11
  render(
      <DateContext.Provider value={{month: TODAYDATA.MONTH, setMonth: jest.fn(), year: TODAYDATA.YEAR, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const dayElement = screen.getByTestId("day-of-other-month-29")
  expect(dayElement).toBeInTheDocument()
})

test(`Does the November 2023 contain days from the next Month?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2023
  TODAYDATA.MONTH = 11
  render(
      <DateContext.Provider value={{month: TODAYDATA.MONTH, setMonth: jest.fn(), year: TODAYDATA.YEAR, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const dayElement = screen.getByTestId("day-of-other-month-1")
  expect(dayElement).toBeInTheDocument()
})

test(`Does November 2023 contain 5 columns (weeks)?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2023
  TODAYDATA.MONTH = 11
  render(
      <DateContext.Provider value={{month: TODAYDATA.MONTH, setMonth: jest.fn(), year: TODAYDATA.YEAR, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const dayElement = screen.getByTestId("week-5-2")
  expect(dayElement).toBeInTheDocument()
})

test(`Does March 2024 contain 6 columns (weeks)?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2024
  TODAYDATA.MONTH = 4
  render(
      <DateContext.Provider value={{month: 3, setMonth: jest.fn(), year: 2024, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )
    debug();

  const dayElement = screen.getByTestId("week-6-31")
  expect(dayElement).toBeInTheDocument()
})

test(`Does Febuary 2024 have the 29th day for a leap year?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2024
  TODAYDATA.MONTH = 2
  render(
      <DateContext.Provider value={{month: 3, setMonth: jest.fn(), year: 2024, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )
    debug();

  const dayElement = screen.getByTestId("week-5-29")
  expect(dayElement).toBeInTheDocument()
})

test(`Does Febuary 2023 not have the 29th day for a non leap year?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2023
  TODAYDATA.MONTH = 2
  render(
      <DateContext.Provider value={{month: 3, setMonth: jest.fn(), year: 2023, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )
    debug();

  const dayElement = screen.getByTestId("week-5-29")
  expect(dayElement).toBeFalsy
})

test(`Is the first day of April 2024 the 31th of March (in the calendar)?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2024
  TODAYDATA.MONTH = 4
  render(
      <DateContext.Provider value={{month: 4, setMonth: jest.fn(), year: 2024, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )
    debug();

  const dayElement = screen.getByTestId("week-1-31")
  expect(dayElement).toBeInTheDocument()
})

test(`Does January 2024 display December 31st as a previous Month date?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2024
  TODAYDATA.MONTH = 1
  render(
      <DateContext.Provider value={{month: 1, setMonth: jest.fn(), year: 2024, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )
    debug();

  const dayElement = screen.getByTestId("week-1-31")
  expect(dayElement).toBeInTheDocument()
})

test(`Does January 2025 display December 30th as a previous Month date?`, () => {
  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2025
  TODAYDATA.MONTH = 1
  render(
      <DateContext.Provider value={{month: 1, setMonth: jest.fn(), year: 2025, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )
    debug();

  const dayElement = screen.getByTestId("week-1-31")
  expect(dayElement).toBeInTheDocument()
})

test(`Does the switch to previous Month button get called?`, () => {
  const handleOnClick = jest.fn();

  render(
      <DateContext.Provider value={{month: TODAYDATA.MONTH, setMonth: handleOnClick, year: TODAYDATA.YEAR, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const buttonElement = screen.getByTestId("previous-month-button")

  fireEvent.click(buttonElement);

  expect(handleOnClick).toBeCalled();
})

test(`Does the switch to next Month button get called?`, () => {
  const handleOnClick = jest.fn();

  render(
      <DateContext.Provider value={{month: TODAYDATA.MONTH, setMonth: handleOnClick, year: TODAYDATA.YEAR, setYear: jest.fn()}}>
        <App/>
      </DateContext.Provider>
    )

  const buttonElement = screen.getByTestId("next-month-button")

  fireEvent.click(buttonElement);

  expect(handleOnClick).toBeCalled();
})

test(`Does the return button get called?`, () => {
  const handleOnClick = jest.fn();

  TODAYDATA.DAY = 21
  TODAYDATA.YEAR = 2023
  TODAYDATA.MONTH = 11
  render(
      <DateContext.Provider value={{month: 12, setMonth: handleOnClick, year: 2024, setYear: handleOnClick}}>
        <App/>
      </DateContext.Provider>
    )

  const buttonElement = screen.getByTestId("return-button")

  fireEvent.click(buttonElement);

  expect(handleOnClick).toBeCalled();
})