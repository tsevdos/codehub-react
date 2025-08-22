import React from "react";
import { shallow } from "enzyme";
import CharacterList from "../CharacterList";

const data = [
  {
    name: "John Tsevdos",
    gender: "male"
  },
  {
    name: "Patricia Lebsack",
    gender: "female"
  },
  {
    name: "Dennis Schulist",
    gender: "male"
  },
];

describe("<CharacterList />", () => {

  it("renders correctly CharacterList title and subtitle", () => {
    const wrapper = shallow(<CharacterList data={data} />);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h2").text()).toBe("Unit Testing");
    expect(wrapper.find("h3").text()).toBe("03: Enzyme testing");
  });

  it("renders a list with 3 characters", () => {
    const wrapper = shallow(<CharacterList data={data} />);

    expect(wrapper.find("#characters li").length).toBe(3);
  });

  it("list contains correct names", () => {
    const wrapper = shallow(<CharacterList data={data} />);
    const charactersList = wrapper.find("#characters li");

    expect(charactersList.contains("John Tsevdos")).toBe(true);
    expect(charactersList.contains("Patricia Lebsack")).toBe(true);
    expect(charactersList.contains("Dennis Schulist")).toBe(true);
  });

  it("list item can be clicked twice", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <CharacterList data={data} onSelectCharacter={mockFn} />
    );
    wrapper.find("#characters li").first().simulate("click");
    wrapper.find("#characters li").first().simulate("click");

    expect(mockFn.mock.calls.length).toBe(2);
  });

});
