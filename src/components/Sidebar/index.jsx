import { Button, ButtonGroup, Form, Stack } from "@openedx/paragon";
import PropTypes from 'prop-types';

const Sidebar = ({
  btnGroups,
  statusOptions,
  subjectOptions,
  durationOptions,
  activeFilters,
  setActiveFilters,
}) => {
  const renderFilterBtns = () => {
    return btnGroups.map((btn) => (
      <Button
        id={btn.id}
        key={btn.id}
        variant={activeFilters.type === btn.id ? "brand" : "outline-brand"}
        className={activeFilters.type !== btn.id ? "text-gray-700 border-medium-gray": ""}
        onClick={() => setActiveFilters((prev) => ({ ...prev, type: btn.id }))}
      >
        {btn.text}
      </Button>
    ));
  }

  const renderStatusRadio = () => {
    const handleChange = e => setActiveFilters(
      (prev) => ({ ...prev, status: e.target.value })
    );
    return (
      <Form.Group>
        <Form.Label
          className="font-weight-bold text-black mb-3"
        >
          Status
        </Form.Label>
        <Form.RadioSet
          name="status"
          onChange={handleChange}
          value={activeFilters.status}
        >
          {statusOptions.map((status) => (
            <Form.Radio
              controlClassName="border-black"
              value={status.id}
              key={status.id}
            >
              {status.text}
            </Form.Radio>
          ))}
        </Form.RadioSet>
      </Form.Group>
    );
  };

  const renderChecboxes = (label, key, options) => {
    const handleChange = e => {
      if (e.target.checked) {
        setActiveFilters((prev) => ({
          ...prev,
          [key]: [...prev[key], e.target.value],
        }));
      } else {
        setActiveFilters((prev) => ({
          ...prev,
          [key]: prev[key].filter(val => val !== e.target.value),
        }));
      }
    }

    return (
      <Form.Group>
        <Form.Label
          className="font-weight-bold text-black mb-3"
        >
          {label}
        </Form.Label>
        <Form.CheckboxSet
          name={label.toLowerCase()}
          onChange={handleChange}
          value={activeFilters[key]}
        >
          {options.map((option) => (
            <Form.Checkbox
              value={option.id}
              key={option.id}
            >
              {option.text}
            </Form.Checkbox>
          ))}
        </Form.CheckboxSet>
      </Form.Group>
    );
  }

  const handleClearAll = () => {
    setActiveFilters({
      type: "all",
      status: "",
      subjects: [],
      durations: [],
    });
  }

  return (
    <Stack gap={3}>
      <div className="d-flex justify-content-between x-small">
        <b className="text-black lead">Filter</b>
        <Button
          variant="link"
          size="inline"
          className="text-dark-turquoise text-decoration-underline"
          onClick={handleClearAll}
        >
          Clear all
        </Button>
      </div>
      <ButtonGroup className="mb-2">
        {renderFilterBtns()}
      </ButtonGroup>
      {renderStatusRadio()}
      {renderChecboxes("Subject", "subjects", subjectOptions)}
      {renderChecboxes("Duration", "durations", durationOptions)}
    </Stack>
  )
}

Sidebar.propTypes = {
  btnGroups: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  statusOptions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  subjectOptions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  durationOptions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  activeFilters: PropTypes.shape({
    type: PropTypes.string.isRequired,
    status: PropTypes.string,
    subjects: PropTypes.arrayOf(PropTypes.string),
    durations: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setActiveFilters: PropTypes.func.isRequired,
}

export default Sidebar;
