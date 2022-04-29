class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);
    }
}