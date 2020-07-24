import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const ListRequisition: React.FC = () => {
  const [listOrder, setListOrder] = useState([]);
  console.log(listOrder);
  async function handleCallApi() {
    const response = await axios.get('http://localhost:3001/admin/order');
    setListOrder(response.data);
  }

  useEffect(() => {
    handleCallApi();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='subtitle1'>
          Lista de Pedidos
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell>Quantidade</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOrder.map(order => (
                <TableRow key={order.id}>
                  <TableCell align='left' key={order.id}>
                    {order.description}
                  </TableCell>
                  <TableCell key={order.id}>{order.quantity}</TableCell>
                  <TableCell align='left' key={order.id}>
                    {order.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ListRequisition;
