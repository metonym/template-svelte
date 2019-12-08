import { fireEvent, render } from "@testing-library/svelte";
import Button from "./Button.svelte";

function setup(props = {}) {
  return render(Button, props);
}

test("increments and resets the count", async () => {
  const { getByText, container } = render(Button, {});

  const h1 = container.querySelector("h1");
  expect(h1.innerHTML).toEqual("0");

  const button = getByText("Increment by 1");
  expect(button).toBeInTheDocument();
  await fireEvent.click(button);
  expect(h1.innerHTML).toEqual("1");

  const reset = getByText("Reset");
  expect(reset).toBeInTheDocument();
  await fireEvent.click(reset);
  expect(reset).not.toBeInTheDocument();
  expect(h1.innerHTML).toEqual("0");
});

test("increments count by 2", async () => {
  const { getByText, container } = render(Button, { increment: 2 });

  const h1 = container.querySelector("h1");
  expect(h1.innerHTML).toEqual("0");

  const button = getByText("Increment by 2");
  expect(button).toBeInTheDocument();
  await fireEvent.click(button);

  expect(h1.innerHTML).toEqual("2");
  await fireEvent.click(button);
  expect(h1.innerHTML).toEqual("4");

  const reset = getByText("Reset");
  expect(reset).toBeInTheDocument();
  await fireEvent.click(reset);
  expect(reset).not.toBeInTheDocument();
  expect(h1.innerHTML).toEqual("0");
});
