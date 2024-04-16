import { Chip } from "@openedx/paragon"

const FullChip = ({accent, icon, text, className}) => {
  return (
    <Chip className={`bg-${accent} ${className}`} variant="dark" iconBefore={icon}>
      {text}
    </Chip>
  )
}

export default FullChip;
