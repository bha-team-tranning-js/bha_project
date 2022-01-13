import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import getAPI from "../../api/getAPI";
import Button from "@mui/material/Button";
// const top100Films = [
//   { label: "The Shawshank Redemption", year: 1994 },
//   { label: "The Godfather", year: 1972 },
// ];
function changeData(label, value) {
  return { label, value };
}

export default function OrderFormDialog({ order }) {
  //   console.log(order);
  const [shippers, setShippers] = React.useState([]);
  const [states, setStates] = React.useState([]);

  const shippersData = shippers.map((shipper) =>
    changeData(shipper.full_name, shipper.shipper_id)
  );
  const statesData = states.map((status) =>
    changeData(status.status_name, status.order_status_id)
  );

  React.useEffect(() => {
    async function getOptions() {
      try {
        let shippers = await getAPI("http://localhost:8080/api/v1/shippers");
        let states = await getAPI("http://localhost:8080/api/v1/order-status");
        setShippers(shippers);
        setStates(states);
      } catch (err) {
        console.log(err);
      }
    }
    getOptions();
  }, []);
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={shippersData}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300, minHeight: 100 }}
        renderInput={(params) => <TextField {...params} label="Shipper" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={statesData}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300, minHeight: 300 }}
        renderInput={(params) => <TextField {...params} label="Trạng thái" />}
      />
      <Button>Submit</Button>
    </>
  );
}
