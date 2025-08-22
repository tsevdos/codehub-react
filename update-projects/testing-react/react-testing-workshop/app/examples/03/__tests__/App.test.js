import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "../App";

describe("<App />", () => {

  it("shallow rendering", () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());

    expect(wrapper.exists()).toBe(true);
  });

  it("mount rendering", () => {
    const wrapper = mount(<App />);
    // console.log(wrapper.debug());

    expect(wrapper.exists()).toBe(true);
  });

  it("full rendering", () => {
    // render returns a Cheerio wrapper https://cheerio.js.org/
    // console.log(render(<App />).html());

    expect(
      render(<App />).html()
    ).toBe("<div><h2 class=\"is-size-4\">Unit Testing</h2><h3 class=\"is-size-5\">03: Enzyme testing</h3><br><ul id=\"characters\"><li>John Tsevdos is male</li><li>Patricia Lebsack is female</li><li>Dennis Schulist is male</li></ul></div>");
  });

});
