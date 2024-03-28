require('dotenv');

export const PersonalToken = process.env.AIRTABLE_PERSONAL_TOKEN || ""
export const baseID= process.env.AIRTABLE_BASE_ID || ""

console.log(PersonalToken, baseID)