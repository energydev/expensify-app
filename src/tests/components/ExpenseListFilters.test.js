import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filter";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
});

test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change correctly", () => {
    const value = "rent"
    wrapper.find("input").at(0).simulate("change", { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date correctly", () => {
    const value = "date";
    wrapper.find("select").at(0).simulate("change", { target: { value } });
    expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount correctly", () => {
    const value = "amount";
    wrapper.find("select").at(0).simulate("change", { target: { value } });
    expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes correctly", () => {
    const startDate = moment(0);
    const endDate = moment().add(5, "days");
    wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes correctly", () => {
    const calendarFocused = "endDate";
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
