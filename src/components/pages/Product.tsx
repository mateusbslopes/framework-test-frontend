import { Button, Grid, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Products from "../../api/products";
import { Product as ProductType } from "../../types";

export default function Product() {
  const { id }: any = useParams();

  const history = useHistory();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    setLoading(true);
    try {
      const result = await Products.getProduct(id);
      setProduct(result);
    } catch (e: Error | any) {
      setError(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const onChangeQuantity = (evt: any) => {
    const { value } = evt.target;
    const intValue = parseInt(value.toString().replace("/[^d]/g", ""));
    setQuantity(intValue);
  };

  return (
    <Grid container>
      {!loading ? (
        !error && product ? (
          <Grid xs={12} item container>
            <Grid item>Name: {product.name}</Grid>
            <Grid item>Price: R${product.price}</Grid>
            <Grid item xs={10}>
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="quantity"
                  label="Quantidade"
                  name="quantity"
                  autoFocus
                  value={quantity}
                  onChange={onChangeQuantity}
                />
              </Grid>
              <Grid item xs={4}>
                <Button onClick={history.goBack}>Adicionar ao Carrinho</Button>
              </Grid>
            </Grid>
            <Grid>
              <Button onClick={history.goBack}>Voltar</Button>
            </Grid>
          </Grid>
        ) : (
          <>Product not found</>
        )
      ) : (
        <>Loading</>
      )}
    </Grid>
  );
}
