import { mountSuspended } from "@vue/test-utils";
import Greeting from "~/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("renders async message correctly", async () => {
    const wrapper = await mountSuspended(Greeting);
    expect(wrapper.html()).toContain("Hello from Async Component!");
  });
});
