import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function Userlist({ search }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      const users = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(users.data);
      setFilter(users.data);
    };
    fetchusers();
  }, []);

  useEffect(() => {
    const newdata = data.filter((user) => user.name.includes(search));

    setFilter(newdata);
  }, [search]);

  const formataddress = (address) => {
    return `${address.suite}, ${address.street} ${address.city} ${address.zipcode}`;
  };
  return (
    <Table striped bordered hover className="tab">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {filter.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>

            <td>{user.email}</td>
            <td>{formataddress(user.address)}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Userlist;
