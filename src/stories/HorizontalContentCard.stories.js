import HorizontalContentCard from "../components/HorizontalContentCard";

export default {
  title: "HorizontalContentCard",
  component: HorizontalContentCard,
};

export const Course = {
  args: {
    type: "course",
    title: "Anatomy: Musculoskeletal and Integumentary Systems",
    banner: "https://picsum.photos/320/200/",
    partner: {
      name: "Harvard University",
      logoUrl: "https://www.edx.org/images/logos/edx-logo-elm.svg"
    },
    duration: "6 Months",
    accessUntil: "Access until: Feb 28, '24",
    progress: 0,
    infoAlert: "Information alert",
    gradesLink: "https://openedx.org/",
    viewResumeLink: "https://openedx.org/",
    enrolled: false,
  }
};

export const LearningPath = {
  args: {
    type: "learningPath",
    title: "Anatomy: Musculoskeletal and Integumentary Systems",
    banner: "https://picsum.photos/320/200/",
    partner: {
      name: "Harvard University",
      logoUrl: "https://www.edx.org/images/logos/edx-logo-elm.svg"
    },
    duration: "6 Months",
    accessUntil: "Access until: Feb 28, '24",
    size: "11 courses",
    progress: 30,
    infoAlert: "Information alert",
    viewResumeLink: "https://openedx.org/",
    enrolled: true,
  }
};
