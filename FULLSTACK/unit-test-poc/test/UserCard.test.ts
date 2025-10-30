import { mountSuspended } from "@vue/test-utils";
import UserCard from "~/components/UserCard.vue";

describe("UserCard.vue", () => {
  it("loads and renders async user profile", async () => {
    const wrapper = await mountSuspended(UserCard);
    expect(wrapper.html()).toContain("John Doe");
  });
});
