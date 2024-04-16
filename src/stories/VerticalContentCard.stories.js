import VerticalContentCard from "../components/VerticalContentCard";

export default {
  title: "VerticalContentCard",
  component: VerticalContentCard,
};

export const Course = {
  args: {
    type: "course",
    title: "Anatomy: Musculoskeletal and Integumentary Systems",
    banner: "https://picsum.photos/320/200/",
    partner: {
      name: "Harvard University",
      logo_url: "https://www.edx.org/images/logos/edx-logo-elm.svg"
    },
    duration: "6 Months",
    access_until: "Access until: Feb 28, '24",
    size: "",
    enrolled: true,
  }
};

export const LearningPath = {
  args: {
    type: "learningPath",
    title: "Anatomy: Musculoskeletal and Integumentary Systems",
    banner: "https://picsum.photos/320/200/",
    partner: {
      name: "Harvard University",
      logo_url: "https://www.edx.org/images/logos/edx-logo-elm.svg"
    },
    duration: "6 Months",
    access_until: "Access until: Feb 28, '24",
    size: "11 courses",
    enrolled: false,
  }
};
