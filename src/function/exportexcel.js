import XLSX from 'xlsx'

export const onExport = async(fileName, data_set) => {
    if (data_set.length > 0) {
        let wb = XLSX.utils.book_new();
        XLSX.utils.sheet_add_json(wb, data_set, {
            skipHeader: true,
            origin: "A2",
        });
        var dt = new Date();
        let dataWS = XLSX.utils.json_to_sheet(data_set);
        XLSX.utils.book_append_sheet(wb, dataWS, "Summary");
        XLSX.writeFile(wb, fileName + "_" + dt.getTime() + ".xlsx");
    } else alert("No data")

}