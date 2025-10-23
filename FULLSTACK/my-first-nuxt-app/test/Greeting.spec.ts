import { mount } from "@vue/test-utils";
import Greeting from '~/app/pages/Greeting.vue'

describe("Greeting", () => {
  it("renders name prop and emits click", async () => {
    const wrapper = mount(Greeting, { props: { name: "Shubham" } });

    expect(wrapper.find('[data-test="heading"]').text()).toContain(
      "Hello, Shubham!"
    );

    await wrapper.find('[data-test="btn"]').trigger("click");
    expect(wrapper.emitted()).toHaveProperty("clicked");
  });
});