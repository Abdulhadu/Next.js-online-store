import FileBase from "react-file-base64";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import BaseCard from "../../../src/components/baseCard/BaseCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../src/theme/theme";
import FullLayout from "../../../src/layouts/FullLayout";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  update_product,
  getProductByID,
  getProductsData,
  getCategoriesData,
} from "../../../services/admin.js";
import Router from "next/router";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const product_data = await getProductByID(params.id);
  const categories = (await getCategoriesData()) || [];

  return {
    props: {
      product_data,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const product = await getProductsData();

  return {
    paths: product.map((prod) => {
      return {
        params: { id: String(prod._id) },
      };
    }),
    fallback: false,
  };
}

export default function updateProducts({ product_data, categories }) {
  const [cateData, setCateData] = useState(product_data);
  const [imageData, setImageData] = useState(cateData.image || null);
  const handleImageChange = (base64) => {
    setImageData(base64);
  };

  const handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      setCateData({ ...cateData, [e.target.name]: e.target.checked });
    } else {
      setCateData({ ...cateData, [e.target.name]: e.target.value });
    }
  };

  const updateNow = async () => {
    const res = await update_product(cateData);
    if (res.msg) {
      toast.success(res.msg);
      Router.push("/admin/products/getProducts");
    } else {
      toast.error(res.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCateData({ ...cateData, image: imageData }, updateNow());
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
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Grid item xs={12} lg={12}>
            <BaseCard title="Update Category">
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {cateData.img && (
                    <div>
                      <Image
                        width={250}
                        height={400}
                        src={cateData.img}
                        alt="no image"
                      />
                    </div>
                  )}
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Category Image
                    </label>
                    <FileBase
                      onDone={({ base64 }) => handleImageChange(base64)}
                      type="text"
                      id="password"
                      className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                      required
                      placeholder="Slug"
                    />
                  </div>

                  <div className="mb-6 border-2">
                    <select
                      id="title"
                      type="text"
                      name="title"
                      label="Product Category"
                      value={cateData.Category}
                      onChange={handleInputChange}
                      className="text-black w-full h-10"
                    >
                      {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <TextField
                    id="title"
                    type="text"
                    name="title"
                    value={cateData.title}
                    onChange={handleInputChange}
                    label="Product Title"
                    required
                  />
                  <TextField
                    id="Slug"
                    type="text"
                    name="Slug"
                    value={cateData.Slug}
                    onChange={handleInputChange}
                    label="Product Slug"
                    required
                  />
                  <TextField
                    id="Size"
                    type="text"
                    name="Size"
                    value={cateData.Size}
                    onChange={handleInputChange}
                    label="Size"
                    required
                  />
                  <TextField
                    id="Color"
                    type="text"
                    name="Color"
                    value={cateData.Color}
                    onChange={handleInputChange}
                    label="Color Variations"
                    required
                  />

                  <TextField
                    id="Desc"
                    name="Desc"
                    value={cateData.Desc}
                    onChange={handleInputChange}
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="Describe the Details of Products"
                  />
                  <TextField
                    id="price"
                    type="number"
                    name="price"
                    value={cateData.price}
                    onChange={handleInputChange}
                    label="Price"
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
                <Button type="submit" variant="outlined" color="primary" mt={2}>
                  Submit
                </Button>
              </form>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}
