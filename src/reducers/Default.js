export const DefaultCondition = (state = "dashboard", action) => {
  switch (action.type) {
    case "dashboard":
      return (state = "dashboard");
    case "courses":
      return (state = "courses");
    default:
      return state;
  }
};
