# Cloud Services

## Google Sheets
Before use Google Sheets service you need to generate your credentials and paste them at the same level of src with the name *credentials.json* after you have set up your file remember to share with the google sheet the email that google generatewith your credentials as an editor.

### Create A Request

*url/sheets/all-data/:Id*
Get all data from the google sheets

*url/sheets/get-data* 
```Node
//POST
body: {
  spreadsheetId: "string-sheet-id",
  range: "Sheet 1!A:C"
}
```
*url/sheets/append*
```Node
//POST
body: {
  spreadsheetId: "string-sheet-id",
  range: "Sheet 1!A:C",
  data: [
    ["Julian", 20, "Student"],
    ["Maria", 24, "Student"]
  ]
}
```
*url/sheets/update*
You have to specify with the range what to update
```Node
//PUT
body: {
  spreadsheetId: "string-sheet-id",
  range: "Sheet 1!A:C",
  data: [
    ["Julian", 20, "Student"],
  ]
}
```
*url/sheets/key*
```Node
//PUT
body: {
  spreadsheetId: "string-sheet-id",
  range: "Sheet 1!A:C",
  key: "Julian",
  data: [
    ["Julian", 35, "Employee"],
  ]
}
```

There exist some values that are optional but you can config as you like.
```Node
body: {
  spreadsheetId: string; //Mandatory
  range: string; // Mandatory
  valueInputOption; // Optional
  insertDataOption; // Optional
  data: []; // Optional
  key: ''; // Optional
}
```