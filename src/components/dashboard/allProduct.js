import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Pagination,
  CircularProgress,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { delete_Product, getProductsData } from "../../../services/admin";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import PropTypes from "prop-types";

export async function getStaticProps() {
  const data = (await getProductsData()) || [];

  return {
    props: { data },
  };
}

const ProductPerformance = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [finalData, setFinalData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getProductsData();
      setFinalData(newData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const response = await delete_Product(id);

    if (response.msg) {
      toast.success(response.msg);
      
    } else {
      toast.error(response.error);
    }
  };

  //pagination login for the partitiion
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = finalData
    ? finalData.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BaseCard title="View Products">
        <Table
          aria-label="simple table"
          sx={{
            mt: 3,
            whiteSpace: "nowrap",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Slug
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Category
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Price
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="textSecondary" variant="h6">
                  Image
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentProducts.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {product.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        {product.Slug}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {product.Size} / {product.Color}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.Category}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.price}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Image
                    width={80}
                    height={100}
                    src={product.img}
                    alt="product Image"
                  />
                </TableCell>
                <TableCell align="right">
                  <Link
                    href={`updateProducts/${product._id}`}
                    className="bg-orange-500 mx-2 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 mx-2 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </BaseCard>

      <Grid
        item
        xs={12}
        lg={12}
        sx={{ display: "flex", justifyContent: "center", mt: 3 }}
      >
        <Pagination
          count={Math.ceil(finalData.length / productsPerPage)}
          color="primary"
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
        />
      </Grid>
    </>
  );
};


ProductPerformance.propTypes = {
  data: PropTypes.array.isRequired, // Add prop type for 'data' as an array
};
export default ProductPerformance;
