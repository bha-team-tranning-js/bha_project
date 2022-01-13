import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import postAPI from "../../api/postAPI";

function createData(img, name, size, quantity) {
  return { img, name, size, quantity };
}

export default function ProductsListDialog({ order_id }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function getProductsByOrderID() {
      try {
        const result = await postAPI(
          "http://localhost:8080/api/v1/order-details/get-by-order-id",
          { order_id }
        );
        setProducts(result.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProductsByOrderID();

    console.log(order_id);
  }, [order_id]);

  //   const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];
  const rows = products.map((product) =>
    createData(
      product.image,
      product.product_name,
      product.size_number,
      product.quantity
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Size</TableCell>
            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name + Math.random()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img src={row.img} alt={row.name} />
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
