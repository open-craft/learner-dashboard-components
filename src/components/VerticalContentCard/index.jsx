import { Card, Icon, Stack } from "@openedx/paragon"
import { AccessTimeFilled, Calendar } from "@openedx/paragon/icons"
import PropTypes from 'prop-types';

import FullChip from "../shared/FullChip";
import Book from "../icons/Book";
import List from "../icons/List";

const VerticalContentCard = ({
  type,
  title,
  banner,
  partner,
  duration,
  accessUntil,
  size,
  enrolled,
}) => {

  let accent = "harvard-dark-red";
  let cardType = "LEARNING PATH";
  let cardTypeIcon = List;

  if (type === "course") {
    accent = "mortar";
    cardType = "COURSE";
    cardTypeIcon = Book;
  }

  return (
    <Card
      className={`border-${accent} border-bottom-5`}
      style={{ width: "320px", height: "380px" }}>
      <Card.ImageCap
        src={ banner }
        srcAlt=""
        logoSrc={ partner.logoUrl }
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
          {accessUntil && <Stack direction="horizontal" gap={2} className="">
            <Icon className={`text-${accent}`} src={AccessTimeFilled} /> {accessUntil}
          </Stack>}
        </Stack>
      </Card.Section>
      <Card.Footer className="justify-content-start">
        <FullChip accent={accent} icon={cardTypeIcon} text={cardType} />
        {enrolled && <FullChip
          accent="indigo"
          text="ENROLLED"
        />}
      </Card.Footer>
    </Card>
  );
}

VerticalContentCard.propTypes = {
  type: PropTypes.oneOf(['course', 'learningPath']),
  title: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
  }).isRequired,
  duration: PropTypes.string,
  accessUntil: PropTypes.string,
  size: PropTypes.string,
  enrolled: PropTypes.bool,
}

VerticalContentCard.defaultProps = {
  duration: "",
  accessUntil: "",
  size: "",
  enrolled: false,
}

export default VerticalContentCard;
