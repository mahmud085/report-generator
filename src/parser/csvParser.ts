import  fs from 'fs';
import  csv from 'csv-parser';
import { ListType } from '../types/list';
import { ContactType } from '../types/contact';

export function CSVParser(fileName: string, dataParser: (row: any) => any) {
  const data: (ListType | ContactType )[] = [];

  return new Promise<(ListType | ContactType)[]>((resolve, reject)=> {
    fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', function (row: (ListType | ContactType )) {
      data.push(dataParser(row));
    })
    .on('end', function () {
        resolve(data);
    });
  });
    
}