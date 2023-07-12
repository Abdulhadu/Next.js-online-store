import React from "react";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import FileBase from "react-file-base64";
import { add_products, getCategoriesData } from "../../services/admin";

export async function getStaticProps() {
  const data = (await getCategoriesData()) || [];

  return {
    props: { data },
  };
}

export default function addProducts({ data }) {
  const [form, setform] = useState({
    title: "",
    Slug: "",
    Desc: "",
    img: null,
    Category: "",
    Size: "",
    Color: "",
    price: "",
    avaliableQty: "",
  });

  const Submit = async (e) => {
    e.preventDefault();

    const res = await add_products(form);
    if (res.msg) {
      toast.success(res.msg);
      window.location.reload();
    } else {
      toast.error(res.error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer {
          display: none;
        }
        header {
          display: none;
        }
      `}</style>
      <FullLayout>
        <Grid container spacing={0}>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Grid item xs={12} lg={12}>
            <BaseCard title="Add Products">
              <form onSubmit={Submit}>
                <Stack spacing={3}>
                  <TextField
                    id="Category"
                    select
                    name="Category"
                    value={form.Category || ""}
                    defaultValue={form.Category || ""}
                    onChange={(e) =>
                      setform({ ...form, Category: e.target.value })
                    }
                    label="Category"
                    required
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value=""></option>
                    {data?.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    id="Title"
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={(e) =>
                      setform({ ...form, title: e.target.value })
                    }
                    label="Title"
                    required
                  />
                  <TextField
                    id="Slug"
                    type="text"
                    name="Slug"
                    value={form.Slug}
                    onChange={(e) => setform({ ...form, Slug: e.target.value })}
                    label="Slug"
                    required
                  />
                  <TextField
                    id="Size"
                    type="text"
                    name="Size"
                    value={form.Size}
                    onChange={(e) => setform({ ...form, Size: e.target.value })}
                    label="Size"
                    variant="outlined"
                  />
                  <TextField
                    id="Color"
                    type="text"
                    name="Color"
                    value={form.Color}
                    onChange={(e) =>
                      setform({ ...form, Color: e.target.value })
                    }
                    label="Color"
                    variant="outlined"
                  />

                  <TextField
                    id="Desc"
                    name="Desc"
                    value={form.Desc}
                    onChange={(e) => setform({ ...form, Desc: e.target.value })}
                    label="Text Area"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                  />
                  <TextField
                    id="price"
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={(e) =>
                      setform({ ...form, price: e.target.value })
                    }
                    label="Price"
                    required
                  />
                  <TextField
                    id="avaliableQty"
                    type="number"
                    name="avaliableQty"
                    value={form.avaliableQty}
                    onChange={(e) =>
                      setform({ ...form, avaliableQty: e.target.value })
                    }
                    label="No of Pieces avaliable"
                    required
                  />
                  <FileBase
                    type="file"
                    name="img"
                    accept="image/jpeg"
                    onDone={({ base64 }) => setform({ ...form, img: base64 })}
                    required
                  />
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Terms & Condition"
                    />
                  </FormGroup>
                </Stack>
                <br />
                <Button
                  style={{
                    backgroundColor: "#21b6ae",
                    padding: "10px 16px",
                    text: "primary",
                    color: "white",
                  }}
                  type="submit"
                  variant=""
                  mt={2}
                >
                  Submit
                </Button>
              </form>
            </BaseCard>
          </Grid>
          <Grid item xs={12} lg={12}></Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}
