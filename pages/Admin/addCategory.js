import React from "react";
import { useState } from "react";
import FileBase from "react-file-base64";
import { add_Category } from "../../services/admin";
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
import { ToastContainer, toast } from "react-toastify";

export default function addCategory() {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    featured: false,
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("formdata", formData);
    const res = await add_Category(formData);

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
            <BaseCard title="Add Category">
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    id="name"
                    type="text"
                    name="name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    label="Category Name"
                    required
                  />
                  <TextField
                    id="Slug"
                    type="text"
                    name="slug"
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    label="Category Slug"
                    required
                  />

                  <TextField
                    id="Description"
                    name="description"
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="Describe the Category"
                  />
                  <FileBase
                    type="file"
                    name="image"
                    accept="image/jpeg"
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, image: base64 })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    checked={formData.featured}
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
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
                  variant="outlined"
                  color="primary"
                  mt={2}
                >
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
