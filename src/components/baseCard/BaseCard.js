import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  Box,
  Typography,
} from "@mui/material";

const BaseCard = (props) => {
  return (
    <Card>
      <Box p={2} display="flex" alignItems="center">
        <Typography variant="h3" style={{ fontWeight: 'bold' }}>{props.title}</Typography>
      </Box>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};
BaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseCard;
