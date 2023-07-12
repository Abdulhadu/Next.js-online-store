import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import BaseCard from "../baseCard/BaseCard";
import React, { useEffect, useState } from "react";
import { getAdminData, deleteAdmin } from "../../../services/admin";
import { deepPurple } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";

export async function getStaticProps() {
  const data = (await getAdminData()) || [];

  return {
    props: { data },
  };
}

const allAdmin = ({ data }) => {
  // console.log("admin data is: ", data);
  const [finalData, setFinalData] = useState(data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Fetch the updated data from the server
      getAdminData().then((newData) => {
        setFinalData(newData);
      });
    }, 3000);
    // console.log("final data is : ", finalData);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleDelete = async (id) => {
    const data = await deleteAdmin(id);
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
      <BaseCard title="View Admin User">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {finalData?.map((admin) => {
            return (
              <>
                <ListItem
                  alignItems="flex-start"
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(admin._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{ bgcolor: deepPurple[500] }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={admin.username}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {admin.email}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </List>
      </BaseCard>
    </>
  );
};

export default allAdmin;
