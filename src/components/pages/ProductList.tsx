import { Button, Grid, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetch } from "../../store/ducks/products";
import { Product } from "../../types";

export default function ProductList() {
  const [search, setSearch] = useState("");

  const { list, error, loading } = useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  const onClickSearch = () => {
    dispatch(fetch({ search }));
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={2} />
      <Grid item xs={9}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="search"
          label="Search for a product"
          name="email"
          autoComplete="search"
          autoFocus
          value={search}
          onChange={(evt): void => setSearch(evt.target.value)}
        />
      </Grid>
      <Grid item xs={1}>
        <Button onClick={onClickSearch}>
          <Search />
        </Button>
      </Grid>
      <Grid item container>
        {!loading ? (
          !error ? (
            list.map(({ id, name, price }: Product) => (
              <Grid key={id} item container xs={12}>
                <Grid item>{name}</Grid>
                <Grid item>{price}</Grid>
                <Grid item>
                  <Link to={`/product/${id}`}>Abrir</Link>
                </Grid>
              </Grid>
            ))
          ) : (
            <div>error</div>
          )
        ) : (
          <div>loading</div>
        )}
      </Grid>
    </Grid>
  );
}
