import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Products from "../../api/products";
import { Product as ProductType } from "../../types";

export default function Product() {
  const { id }: any = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <Grid container>
      {!loading ? (
        !error && product ? (
          <Grid xs={12} item container>
            <Grid item>Name: {product.name}</Grid>
            <Grid item>Price: R${product.price}</Grid>
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
