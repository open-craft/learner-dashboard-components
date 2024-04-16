import MyLearningHeader from "../components/MyLearningHeader";

export default {
  title: "MyLearningHeader",
  component: MyLearningHeader,
};

export const Header = {
  args: {
    headerText: "My Learning",
    subHeaderText: "Showing X of X",
    onSearchSubmit: (e) => {console.log("search submitted with text:", e)},
  }
};
