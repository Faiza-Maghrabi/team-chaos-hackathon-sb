import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { LanguageSelection } from "./LanguageSelection";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

export const CloseLanguageView = ({ setLanguage }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        variant="contained"
        sx={{ marginLeft: "auto" }}
        onClick={() => <LanguageSelection setLanguage={setLanguage(undefined)} />}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

CloseLanguageView.propTypes = {
  setLanguage: PropTypes.func,
};
