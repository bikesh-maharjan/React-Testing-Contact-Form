import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("all the inputs are added and work", async () => {
  render(<ContactForm />);

  // query for the different inputs
  const firstName = screen.getByLabelText(/First Name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const msgInput = screen.getByLabelText(/Message/i);

  // fill out the inputs
  fireEvent.change(firstName, { target: { value: "Bikesh" } });
  fireEvent.change(lastName, { target: { value: "Maharjan" } });
  fireEvent.change(emailInput, {
    target: { value: "maharjanbikeshster@gmail.com" },
  });
  fireEvent.change(msgInput, { target: { value: "Hello my name is Bikes" } });

  // query for the submit button
  const submitBtn = screen.getByRole("button", { name: /submit/i });

  // click on the submit button

  fireEvent.click(submitBtn);

  // make our assertions

  expect(await screen.findByText(/Bikesh/i)).toBeInTheDocument();
});
