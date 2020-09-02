export const generateOutput = (reportname: string, result: any) => {
  console.log(reportname);
  if(result.length == 0)
    console.log("Sorry! There are no data to show");
  else 
    console.table(result);
} 