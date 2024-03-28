import { useEffect, useState } from "react";
import {sendData} from "./server/Database"

const testData = {
    Name: "Lisa",
    Age: "35",
    Number_of_Children: "4",
    Visa_Status: "Refugee",
    Occupation: "Bank",
    Accomodation: "No",
    Language_Level: "Intermediate",
    Heath_Issues: "None",
    first_lang: "Ukrainian",
    has_child: "Yes",
    job_uk: "No"
}

export const usePostData = () => {
    const [postData, setPostData] = useState(false);

    const callSendData = async () => {
        await sendData(testData.Name, testData.Age, testData.Number_of_Children, testData.Visa_Status, testData.Occupation, testData.Accomodation, testData.Language_Level, testData.Heath_Issues, testData.first_lang, testData.has_child, testData.job_uk)
    }

    const setState = (state) => {
        console.log(state)
        setPostData(state)
    }
    
    useEffect(() => {
        if (postData == true) {
            callSendData();
        }
    }, [postData])

    return {
        setState
    }

}