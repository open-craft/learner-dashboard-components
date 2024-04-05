import { Card, Chip } from "@openedx/paragon"
import { Book, List } from "@openedx/paragon/icons"

import "./index.scss"

function ContentItemCard({ type, title, banner, partner, duration, access_until, size }) {

  return (
    <Card style={{ width: "320px", height: "380px" }}>
      <Card.ImageCap
        src={ banner }
        srcAlt=""
        logoSrc={ partner.logo_url }
        logoAlt={ partner.name }
        className="cic-image-cap"
      />
      <Card.Header
        title={ title }
        subtitle={ partner.name }
        size="sm"
      />
      <Card.Body>
        {
          type === "course" ?
          <Chip variant="secondary" iconBefore={Book}>
              Course
          </Chip> :
          <Chip variant="primary" iconBefore={List}>
              Learning Path
          </Chip>
        }
      </Card.Body>
    </Card>
  );
}

export default ContentItemCard;
