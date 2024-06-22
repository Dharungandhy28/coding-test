import { Form, InputGroup } from "react-bootstrap";

const Filter = ({ value, onChange }) => {
  return (
    <InputGroup className="mb-3 search">
      <InputGroup.Text>Search</InputGroup.Text>
      <InputGroup.Text>{value}</InputGroup.Text>
      <Form.Control
        onChange={onChange}
        value={value}
        aria-label="Dollar amount (with dot and two decimal places)"
      />
    </InputGroup>
  );
};

export default Filter;
