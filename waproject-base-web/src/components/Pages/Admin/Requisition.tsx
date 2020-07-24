import axios from 'axios';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Toolbar from 'components/Layout/Toolbar';
import React, { Fragment, memo } from 'react';

import { useFormik } from 'formik';

const useStyles = makeStyles({
  marginBottom: {
    marginBottom: 15
  },
  font: {
    fontSize: 15,
    fontWeight: 'bold',
    display: 'block'
  }
});

const Requisition = memo((props: {}) => {
  const classes = useStyles(props);

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      description: '',
      quantity: '',
      value: ''
    },
    onSubmit: (values, { resetForm }) => {
      axios.post('http://localhost:3001/admin/order', values);
      resetForm();
    }
  });

  const description = getFieldProps('description');
  const quantity = getFieldProps('quantity');
  const value = getFieldProps('value');

  return (
    <Fragment>
      <Toolbar title='Pedidos' />

      <Grid container spacing={3} className={classes.marginBottom}>
        <Grid item xs={12} md={4} lg={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                Realizar Pedidos
              </Typography>
              <form onSubmit={handleSubmit}>
                <label className={classes.font}>
                  Descrição:
                  <Input type='text' placeholder='Descrição do produto' {...description} />
                </label>
                <label className={classes.font}>
                  Quantidade:
                  <Input type='text' placeholder='Digite a quantidade' {...quantity} />
                </label>
                <label className={classes.font}>
                  Valor:
                  <Input type='text' placeholder='Digite o valor' {...value} />
                </label>
                <Grid item xs={12} sm={'auto'} style={{ marginTop: 10 }}>
                  <Button type='submit' variant='contained' color='primary'>
                    Adicionar
                  </Button>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
});

export default Requisition;
