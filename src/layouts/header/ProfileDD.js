import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import userimg from "../../../public/static/images/users/user2.jpg";
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const ProfileDD = () => {
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [username, setUsername] = useState(null); // State to store the username
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin");
    if (token) {
      var decodedToken = jwt_decode(token, "secretkey");
      const username = decodedToken.username;
      setUsername(username);
    } else {
      // Handle the case when there is no token available
    }
  }, [router.query]);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <Image
            src={userimg}
            alt={userimg}
            width="30"
            height="30"
            className="roundedCircle"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h5"
              fontWeight="800"
              sx={{
                ml: 1,
              }}
            >
              {username}
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
          <Box p={2} pt={0}>
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              onClick={handleClose4}
            >
              <ListItemButton>
                <ListItemText primary="List Profiles" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Add Account" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="My Settings" />
              </ListItemButton>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            <Link href="/Admin/logout">
              <Button
                style={{
                  backgroundColor: "#21b6ae",
                  padding: "10px 16px",
                  text: "primary",
                  color: "white",
                }}
                onClick={() => router.push("/Admin/logout")}
                fullWidth
                variant="contained"
                color="primary"
              >
                Logout
              </Button>
            </Link>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
