// export default function Order({ orders }) {
//   return (
//     <div>
//       {orders &&
//         orders.map((order) => (
//           <div className="order-item" key={order.}>
//             <p>{order.}</p>
//             <p>{order.customer_id}</p>
//             <p>{order.order_date}</p>
//             <p>{order.shipping_fee}</p>
//             <p>{order.total_price}</p>
//             <p>{order.shiped_date}</p>
//             <p>{order.ship_address}</p>
//             <p>{order.note}</p>
//           </div>
//         ))}
//     </div>
//   );
// }
import * as React from "react";
import moment from "moment";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

import { OrderProductsDialog, OrderFormDialog } from "../";

const columns = [
  { id: "id", label: "id", minWidth: 50 },
  {
    id: "orderDate",
    label: "Order Date",
    minWidth: 150,
    align: "left",
  },
  { id: "name", label: "Name", minWidth: 150 },
  {
    id: "phone",
    label: "Phone",
    minWidth: 150,
    align: "left",
  },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
    align: "left",
  },
  {
    id: "btn",
    label: "",
    minWidth: 50,
    align: "center",
  },
];

export default function Order({ orders }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [idPicked, setIdPicked] = React.useState(null);
  const [totalPrice, setTotalPrice] = React.useState(null);
  const [orderPicked, setOrderPicked] = React.useState(null);

  const [isDetailBtn, setIsDetailBtn] = React.useState(false);
  const [isApproveBtn, setIsApproveBtn] = React.useState(false);

  //product dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsDetailBtn(false);
    setIsApproveBtn(false);
  };
  const showProduct = (id, total_price) => {
    setIsDetailBtn(true);
    setIdPicked(id);
    setTotalPrice(total_price);
    handleClickOpen();
  };
  const showForm = (order) => {
    setIsApproveBtn(true);
    setOrderPicked(order);
    handleClickOpen();
  };

  function createData(id, orderDate, name, phone, address, total_price, order) {
    const btn = (
      <div>
        <button
          onClick={() => showProduct(id, total_price)}
          className="btn btn-blue"
        >
          Chi tiết
        </button>
        <button
          onClick={() => showForm(order)}
          className={
            orders[0].order_status_id === 1
              ? "btn btn-success"
              : "btn btn-disabled"
          }
        >
          Duyệt
        </button>
      </div>
    );
    return { id, orderDate, name, phone, address, btn };
  }

  // const rows = [createData(1, "12/2/2022", "Hiep", "012123", "Quang Nam")];
  const rows = orders.map((order) =>
    createData(
      order.order_id,
      moment.utc(`${order.order_date}`).format("DD/MM/YYYY"),
      order.full_name,
      order.mobie_phone,
      order.ship_address,
      order.total_price,
      order
    )
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ height: 450 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Sản phầm đã đặt"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {isDetailBtn && (
              <>
                <OrderProductsDialog order_id={idPicked} />
                Tổng giá: {totalPrice}
              </>
            )}
            {isApproveBtn && <OrderFormDialog order={orderPicked} />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Close</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}
