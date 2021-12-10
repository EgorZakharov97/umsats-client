import React from 'react';
import Heading from '../components/heading';
import { Container, Grid } from '@mui/material';
import ShopCard from '../components/shopCard';

export default function Shop() {

  const items = [
    {
        "publicItemId": "yDaOQRfYZLnPRAhYEP8wEGJdysKVMQ",
        "itemName": "Item35",
        "quantity": 3,
        "itemDescription": "New item number 35",
        "itemLocation": "Main room box 35",
        "timesUsed": 0,
        "dateCreated": "2021-12-10"
    },
    {
        "publicItemId": "mU3WoiUQE2TzkcIkVdSLInrKEVvSVA",
        "itemName": "Item37",
        "quantity": 2,
        "itemDescription": "New item number 37",
        "itemLocation": "Main room box 37",
        "timesUsed": 1,
        "dateCreated": "2021-12-10"
    },
    {
        "publicItemId": "XWHjgMUqQtdT7llwYGKt56VKWBamik",
        "itemName": "Item15",
        "quantity": 2,
        "itemDescription": "New item number 15",
        "itemLocation": "Main room box 15",
        "timesUsed": 1,
        "dateCreated": "2021-12-10"
    },
    {
        "publicItemId": "Ch5hvL4R7DWYwys07lG2tLcdk9pcKq",
        "itemName": "Item1",
        "quantity": 2,
        "itemDescription": "New item number 1",
        "itemLocation": "Main room box 1",
        "timesUsed": 1,
        "dateCreated": "2021-12-10"
    },
    {
        "publicItemId": "3fieZ2N1WryOnHn2dRnanlEIu93sb0",
        "itemName": "Item2",
        "quantity": 2,
        "itemDescription": "New item number 2",
        "itemLocation": "Main room box 2",
        "timesUsed": 1,
        "dateCreated": "2021-12-10"
    },
    {
        "publicItemId": "j0dcAl128O5UDOsWRaPr9yZTxzHkfj",
        "itemName": "Item3",
        "quantity": 0,
        "itemDescription": "New item number 3",
        "itemLocation": "Main room box 3",
        "timesUsed": 3,
        "dateCreated": "2021-12-10"
    }
]

  return (
    <Container>
      <Heading heading="Shop" subheading="Please, choose shit" />
      <Grid container spacing={2}>
        {items.map(item => {
          return (
            <Grid item >
              <ShopCard
                img="https://source.unsplash.com/random"
                name={item.itemName}
                description={item.itemDescription}
                id={item.publicItemId}
                quantity={item.quantity}
              />
            </Grid>
          )
        })}
        </Grid>
    </Container>
  )
}