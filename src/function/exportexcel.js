import moment from 'moment';
import XLSX from 'xlsx'
// import moment from 'moment'


//export excel
export const onExport = async(fileName, data_set) => {
    if (data_set.length > 0) {
        // delete column id in excel
        delete data_set[0].id

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

// format date to dd-mm-yyyy- hh:mm:ss
const format = "YYYY-MM-DD HH:mm"
export const formatDate = (date) => {
    const datetime = new Date(date)
    return moment(datetime).format(format)
}

// const formatOnly = "DD-MM-YYYY"
const formatOnly = "YYYY-MM-DD"
export const formatDateOnly = (date) => {
    const datetime = new Date(date)
    return moment(datetime).format(formatOnly)
}

export const formatDateFromDB = (date) => {
    if (date != null) return date.substring(0, 10) + " " + date.substring(11, 16)
}