import { Card, Chip, Icon, Stack } from "@openedx/paragon"
import { AccessTimeFilled, Book, Calendar, List } from "@openedx/paragon/icons"

import "./index.scss"

const ContentItemCard = ({
  type,
  title,
  banner,
  partner,
  duration,
  access_until,
  size
}) => {

  let accent = "harvard-dark-red";
  let cardType = "LEARNING PATH";
  let cardTypeIcon = List;

  if (type === "course") {
    accent = "mortar";
    cardType = "COURSE";
    cardTypeIcon = List;
  }

  return (
    <Card
      className={`border-${accent}`}
      style={{ width: "320px", height: "380px" }}>
      <Card.ImageCap
        src={ banner }
        srcAlt=""
        logoSrc={ partner.logo_url }
        logoAlt={ partner.name }
        className="cic-image-cap"
      />
      <Card.Header
        className="line-height-24px"
        title={ title }
        subtitle={ partner.name }
        size="sm"
      />
      <Card.Section className="x-small pb-1">
        <Stack direction="vertical" gap={2}>
          {duration && <Stack direction="horizontal" gap={2}>
            <Icon className={`text-${accent}`} src={Calendar} /> {duration}
          </Stack>}
          {size && <Stack direction="horizontal" gap={2} className="">
            <Icon className={`text-${accent}`} src={List} /> <span>{size}</span>
          </Stack>}
          {access_until && <Stack direction="horizontal" gap={2} className="">
            <Icon className={`text-${accent}`} src={AccessTimeFilled} /> {access_until}
          </Stack>}
        </Stack>
      </Card.Section>
      <Card.Footer className="justify-content-start">
        <Chip className={`bg-${accent}`} variant="dark" iconBefore={cardTypeIcon}>
          {cardType}
        </Chip>
      </Card.Footer>
    </Card>
  );
}

export default ContentItemCard;
