import styles from "./styles-for-buttons.module.css";
import { Stack } from "@mui/material";
import { OptionComponent } from "./OptionComponent";
import { jobSearchSites } from '../utils/work';
import { CLinicSites } from "../utils/familyDoctor";
import { EnglishSites } from "../utils/learnEng";

export const InfoButtons = () => {
  return (
    <Stack>
      <OptionComponent title="Job Search Engines" data={jobSearchSites} />
      <OptionComponent title="Register with a family doctor" data={CLinicSites} />
      <OptionComponent title="Learn English" data={EnglishSites} />
    </Stack>
  );
};
