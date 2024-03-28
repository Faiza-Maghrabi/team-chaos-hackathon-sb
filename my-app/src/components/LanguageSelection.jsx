import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import { worldLanguages } from "../utils/languages";

export const LanguageSelection = ({ language, setLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(undefined);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
  };

  return (
    <Paper elevation={24} sx={{ padding:"24px"}}>                       
      <Stack
        spacing={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1">
          Select your language.
        </Typography>
        <FormControl
          sx={{
            m: 10,
            minWidth: 200,
          }}
          size="large"
        >
          <InputLabel id="language-label">Language</InputLabel>
          <Select
            labelId="language-label"
            value={selectedLanguage || ""}
            onChange={handleChange}
            label="Language"
          >
            {worldLanguages.map(language => <MenuItem key={language["code"]} value={language["name"]}>{language["name"]}</MenuItem>)}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={() => setLanguage(selectedLanguage)}
          disabled={!selectedLanguage}
          size="large"
        >
          Start
        </Button>
      </Stack>
    </Paper>
  );
};
LanguageSelection.propTypes = {
  setLanguage: PropTypes.func,
};
