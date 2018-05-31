import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";


test("should render ExpensesSummary with one expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={"20000"} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary with two expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={"2341092818"} />);
    expect(wrapper).toMatchSnapshot();
});