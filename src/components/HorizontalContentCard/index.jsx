import { Alert, Button, Card, Icon, ProgressBar } from "@openedx/paragon"
import {
  AccessTime,
  CheckCircle,
  Info,
  RadioButtonUnchecked,
} from "@openedx/paragon/icons"
import PropTypes from 'prop-types';

import "./index.scss"
import IconChip from "../shared/IconChip";
import FullChip from "../shared/FullChip";
import { PROGRESS_STATE } from "../../constants";
import Book from "../icons/Book";
import List from "../icons/List";
import Pie from "../icons/Pie";

const SPACER = '\u00A0';

const getProgressIcon = (progressState) => {
  switch (progressState) {
    case PROGRESS_STATE.NOT_STARTED:
      return [RadioButtonUnchecked, 'slate'];
    case PROGRESS_STATE.IN_PROGRESS:
      return [Pie, 'dark-turquoise'];
    case PROGRESS_STATE.COMPLETE:
      return [CheckCircle, 'ivy'];
    default:
      return [RadioButtonUnchecked, 'slate'];
  }
}

const HorizontalContentCard = ({
  type,
  title,
  banner,
  partner,
  duration,
  accessUntil,
  size,
  progress,
  viewResumeLink,
  gradesLink,
  infoAlert,
}) => {
  let progressState = PROGRESS_STATE.IN_PROGRESS;
  if (progress === 0) {
    progressState = PROGRESS_STATE.NOT_STARTED;
  } else if (progress === 100) {
    progressState = PROGRESS_STATE.COMPLETE;
  }

  let accent = "harvard-dark-red";
  let cardType = "LEARNING PATH";
  let cardTypeIcon = List;

  if (type === "course") {
    accent = "mortar";
    cardType = "COURSE";
    cardTypeIcon = Book;
  }
  let cardSubtitle = partner.name;
  if (duration) {
    cardSubtitle = cardSubtitle + `${SPACER}${SPACER}•${SPACER}${SPACER}${duration}`;
  }

  const renderProgressChip = () => {
    const [icon, accent] = getProgressIcon(progressState);
    return (
      <div className="ml-auto d-flex">
        <FullChip
          accent={accent}
          icon={icon}
          text={progressState}
        />
      </div>
    )
  }

  const renderActions = () => {
    const viewResumeText = progressState === PROGRESS_STATE.IN_PROGRESS ? "Resume": "View";
    return (
      <>
        {progressState !== PROGRESS_STATE.NOT_STARTED && type === "course" && <Button
          variant="tertiary mr-1"
          href={gradesLink}
        >Grades</Button>}
        <Button
          variant="outline-primary"
          className="border-indigo text-indigo border-2"
          href={viewResumeLink}
        >{viewResumeText}</Button>
      </>
    );
  }

  let cardClass = "";
  if (infoAlert) {
    cardClass += " border-radius-bottom-zero"
  }
  return (
    <>
      <Card
        orientation="horizontal"
        className={cardClass}
      >
        <Card.ImageCap
          src={ banner }
          srcAlt=""
          logoSrc={ partner.logoUrl }
          logoAlt={ partner.name }
          className="cic-image-cap top-left-logo"
        />
        <Card.Body
          className={`border-${accent} border-top-5 border-radius-top-right`}
        >
          <div className="my-3 mx-3 d-flex">
            <IconChip accent={accent} icon={cardTypeIcon} text={cardType} />
            {renderProgressChip()}
          </div>
          <Card.Header
            title={title}
            subtitle={cardSubtitle}
            className="compact-header"
          />
          {progressState === PROGRESS_STATE.IN_PROGRESS && <Card.Section className="x-small pb-1 pt-1">
            <ProgressBar.Annotated
              now={progress}
              label={`${progress}%`}
              variant="dark"
            />
          </Card.Section>}
          <Card.Footer className="justify-content-start">
            {size && <span className="micro d-flex align-items-center mr-3">
              <Icon className="mr-1" size="sm" src={List} /> {size}
            </span>}
            {/* TODO: make date bold in accessUntil string, probably need to add intl */}
            {accessUntil && <span className="micro d-flex align-items-center">
              <Icon className="mr-1" size="sm" src={AccessTime} /> {accessUntil}
            </span>}
            <div className="ml-auto">
              {renderActions()}
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
      {infoAlert &&
        <Alert variant="info" className="p-2 border-radius-top-zero bg-light-gray" icon={Info}>
          {infoAlert}
        </Alert>
      }
    </>
  );
}

HorizontalContentCard.propTypes = {
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
  progress: PropTypes.number.isRequired,
  viewResumeLink: PropTypes.string.isRequired,
  gradesLink: PropTypes.string,
  infoAlert: PropTypes.string,
}

HorizontalContentCard.defaultProps = {
  duration: "",
  accessUntil: "",
  size: "",
  gradesLink: "",
  infoAlert: "",
}

export default HorizontalContentCard;
