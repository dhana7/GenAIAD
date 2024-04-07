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
const brx = new BRX(
  process.env.REACT_APP_API_KEY,
  { verbose: false }
);

let brxObject = new BRK(v_chat_ittr1);

// These are the names of the input vars set

// brxObject.input["color2"].value = "red";

/**
 * Executing the interaction.
 * For each event during the execution, it logs the event.
 * Finally, it logs the final result of the execution.
 */
export const Brx = async (text_input) =>
brxObject.input["image-text-input"].value = text_input;
  await brx.execute(brxObject, (event) => {
    console.log("Inline Event...");
    console.log(event);
  });
console.log("Final Result...");
