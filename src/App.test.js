import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: "red"});

  // clicked the button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: "blue"});

  // expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to red")
});

test('initial conditions', () => {
  render(<App />);

  // check the Button starts out enabled
  const colorButton = screen.getByRole('button', {name: "Change to blue"});
  expect(colorButton).toBeEnabled();

  // check the checkout starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('Checkbox disables button on first click and enables button on second click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: "Change to blue"});
  const checkbox = screen.getByRole('checkbox', {name: "Disable button"});

  // first click to disable the button (check the checkbox)
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  
  // second click to enable the button  (uncheck the checkbox)
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();

})
