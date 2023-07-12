import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { deleteCategory, getCategoriesData } from "../../../services/admin";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

export async function getStaticProps() {
  const data = (await getCategoriesData()) || [];

  return {
    props: { data },
  };
}

const allCategory = ({ data }) => {
  const [finalData, setFinalData] = useState(data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Fetch the updated data from the server
      getCategoriesData().then((newData) => {
        setFinalData(newData);
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleDelete = async (id) => {
    const data = await deleteCategory(id);
    if (data.msg) {
      toast.success(data.msg);
    } else {
      toast.error(data.error);
    }
  };
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
      <BaseCard title="View Catagories">
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
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Featured Product
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Image
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData?.map((category) => {
              return (
                <>
                  <TableRow>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        {category.name}
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
                            {category.slug}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6">
                        {category.featured === true ? "YES" : "NO"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {category.image && (
                        <Image
                          width={80}
                          height={100}
                          src={category.image}
                          alt="Category Image"
                        />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <Link
                        href={`updateCategory/${category._id}`}
                        className="bg-orange-500 mx-2 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(category._id)}
                        className="bg-red-500 mx-2 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </BaseCard>
    </>
  );
};

export default allCategory;
