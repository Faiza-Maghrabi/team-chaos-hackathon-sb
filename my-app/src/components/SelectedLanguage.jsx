import { useState, useEffect } from "react";
import { LanguageSelection } from "./LanguageSelection";
import { Questions } from "./Questions";
import Box from "@mui/material/Box";

// const currentLanguage = () => localStorage.getItem("selectedLanguage");

export const SelectedLanguage = () => {
  const [language, setLanguage] = useState(undefined);

  useEffect(() => {
    if (language !== undefined) {
      localStorage.setItem("selectedLanguage", language.toString());
    }
  }, [language]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100% - 88px)",
        ml: "auto",
        mr: "auto",
        borderRadius: 1,
        p: 3,
      }}
    >
      {language === undefined ? (
        <LanguageSelection language={ language} setLanguage={setLanguage} />
      ) : (
        <Questions language={language} setAverage={setLanguage} />
      )}
    </Box>
  );
};
