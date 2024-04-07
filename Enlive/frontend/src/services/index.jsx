// Importing the necessary modules and schema
import BRX, { BRK } from "brx-node";

// Displaying the chat iterator schema
let v_chat_ittr1 = {
  description: "This is for orahacks dalle",
  brxName: "hackathon-dalle-brx",
  brxId: "47aef4d7-0e46-468f-9c47-ba0a7e70eb3f",
  dependantBrxIds: {},
  processType: 16,
  schemas: {
    mainBrxId: "47aef4d7-0e46-468f-9c47-ba0a7e70eb3f",
    schemas: {
      _isMap: true,
      data: [
        [
          "main_brx_entry_schema",
          {
            schemaFields: {
              _isMap: true,
              data: [
                [
                  "image-text-input",
                  { fieldValueDataType: "string", fieldValue: "testval" },
                ],
              ],
            },
            brxName: "hackathon-dalle-brx",
            brxId: "47aef4d7-0e46-468f-9c47-ba0a7e70eb3f",
          },
        ],
      ],
    },
  },
};
// Loading environment variables

/**
 * Initializing the BRX AI with the API key,
 * and turning on verbose mode for detailed logging.
 */


// These are the names of the input vars set

// brxObject.input["color2"].value = "red";

/**
 * Executing the interaction.
 * For each event during the execution, it logs the event.
 * Finally, it logs the final result of the execution.
 */
export const Brx = async (text_input) =>{
  var response;
  var brxoutput;
  const brx = new BRX(
    "brxbe9e575af392087a7a389d543f729a2e6271eab38556f6de3b6c5475060e0eb1",
    { verbose: false }
  );
  
  let brxObject = new BRK(v_chat_ittr1);
brxObject.input["image-text-input"].value = text_input;
brxoutput = await brx.execute(brxObject, (event) => {
    console.log("Inline Event...");
    console.log(event);
    response = event;
    return event;
  });
console.log("Final Result...");
return JSON.parse(brxoutput[0].brxRes.output).url;
}
