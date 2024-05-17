import React from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  InputAdornment,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const Model = ({
  open,
  setOpen,
  headerText,
  submitText,
  subHeaderText,
  onSubmit,
  children
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="edit-profile-main">
        <Box>
          <Typography variant="h5" fontWeight={650}>
            {headerText}
          </Typography>
          <Typography color={"gray"} marginBottom={"12px"} fontSize={14}>
            {subHeaderText}
          </Typography>
        </Box>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
        {children}
        <Box
          mt={2}
          display={"flex"}
          justifyContent={"right"}
          gap={2}
          width={"100%"}
        >
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" variant="contained">{submitText}</Button>
        </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default Model;
