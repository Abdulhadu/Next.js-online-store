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
import {
  update_Category,
  getCategoriesData,
  getCategoryById,
} from "../../../services/admin.js";
import Router from "next/router";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const CategoryData = await getCategoryById(params.id);
  return {
    props: { CategoryData },
  };
}

export async function getStaticPaths() {
  const category = await getCategoriesData();

  return {
    paths: category.map((cate) => {
      return {
        params: { id: String(cate._id) },
      };
    }),
    fallback: false,
  };
}

export default function updateCategory({ CategoryData }) {
  const [cateData, setCateData] = useState(CategoryData);
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
    const res = await update_Category(cateData);
    if (res.msg) {
      toast.success(res.msg);
      Router.push("/admin/viewCategory.js");
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
                  {cateData.image && (
                    <div>
                      <Image
                        width={300}
                        height={200}
                        src={cateData.image}
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      required
                      placeholder="Slug"
                    />
                  </div>
                  <TextField
                    id="name"
                    type="text"
                    name="name"
                    value={cateData.name}
                    onChange={handleInputChange}
                    label="Category Name"
                    required
                  />
                  <TextField
                    id="Slug"
                    type="text"
                    name="slug"
                    value={cateData.slug}
                    onChange={handleInputChange}
                    label="Category Slug"
                    required
                  />

                  <TextField
                    id="Description"
                    name="description"
                    value={cateData.description}
                    onChange={handleInputChange}
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="Describe the Category"
                  />
                  <FileBase
                    type="file"
                    name="image"
                    accept="image/jpeg"
                    value={cateData.name}
                    onChange={handleInputChange}
                    required
                  />

                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Terms & Condition"
                    />
                  </FormGroup>
                  <label htmlFor="remember" className="ml-2 text-sm font-large">
                    Featured Product
                  </label>
                  <input
                    id="remember"
                    onChange={handleInputChange}
                    checked={cateData.featured}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-400 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300"
                    required
                  />
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
