import { Chip } from "@openedx/paragon"
import PropTypes from 'prop-types';

const IconChip = ({accent, icon, text}) => {
  return (
    <div className={`x-small align-items-center d-flex font-weight-bold text-${accent}`}>
      <Chip className={`bg-${accent} icon-chip pr-0 mr-2`} variant="dark" iconBefore={icon} />
      {text}
    </div>
  )
}

IconChip.propTypes = {
  accent: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  text: PropTypes.string,
}

IconChip.defaultProps = {
  text: "",
  icon: null,
}

export default IconChip;
