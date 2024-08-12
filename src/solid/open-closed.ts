interface IQueryGenerator {
  getReadingQuery: () => string;
  getWritingQuery: (data: string) => string;
}
  
class MySql implements IQueryGenerator {
  getReadingQuery() {
    return "SELECT * FROM MySQL";
  }
  
  getWritingQuery(data: string) {
    return `INSERT INTO MySQL VALUES (${data})`;
  }
}
  
class Redis implements IQueryGenerator {
  getReadingQuery() {
    return "SCAN 0";
  }
  
  getWritingQuery(data: string) {
    return `SET ${data}`;
  }
}

// now code open to adding new databases close to change App class code
class App {
    constructor( private queryService: IQueryGenerator ){};
    readQuery(){
        return this.queryService.getReadingQuery();
    }
    writeQuery(data: string){
        return this.queryService.getWritingQuery(data);
    };
};