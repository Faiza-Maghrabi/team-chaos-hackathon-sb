import Airtable from "airtable"
import { PersonalToken, baseID, tabelID } from "../secret/config";

export async function sendData(name, age, numChildren, visa, occupation, accomodation, languageLevel, health, firstLang, hasChild, jobUk) {
    const base = new Airtable({
      apiKey: PersonalToken,
    }).base(baseID);

    const res = await base(tabelID).create({
      Name: name,
      Age: age,
      Number_of_Children: numChildren,
      Visa_Status: visa,
      Occ: occupation,
      Acc: accomodation,
      Language_Level: languageLevel,
      Health_issues: health,
      first_lang: firstLang,
      has_child: hasChild,
      job_uk: jobUk
    });
    console.log(res);
}