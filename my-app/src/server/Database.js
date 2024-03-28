import Airtable from "airtable"
import { PersonalToken, baseID } from "../config";

export async function sendData(name, age, numChildren, visa, occupation, accomodation, languageLevel, health, firstLang, hasChild, jobUk) {
    const base = new Airtable({
      apiKey: PersonalToken,
    }).base(baseID);

    const res = await base(baseID).create({
      Name: name,
      Age: age,
      Number_of_Children: numChildren,
      Visa_Status: visa,
      Occupation: occupation,
      Accomodation: accomodation,
      Language_Level: languageLevel,
      Heath_Issues: health,
      first_lang: firstLang,
      has_child: hasChild,
      job_uk: jobUk
    });
    console.log(res);
}