import ContentItemCard from "../components/ContentItemCard";

export default {
  title: "ContentItemCard",
  component: ContentItemCard,
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
    access_until: "2023-12-31T23:59:59",
    size: 0
  }
};
