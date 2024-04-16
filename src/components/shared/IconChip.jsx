import { Chip } from "@openedx/paragon"

const IconChip = ({accent, icon, text}) => {
  return (
    <div className={`x-small align-items-center d-flex font-weight-bold text-${accent}`}>
      <Chip className={`bg-${accent} pr-0 mr-2`} variant="dark" iconBefore={icon} />
      {text}
    </div>
  )
}

export default IconChip;
