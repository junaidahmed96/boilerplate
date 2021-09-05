
import { Path } from './Path'

export const csvUpload = async (file) => {
    console.log(file,'ffff');
    let getData = []

    var formdata = new FormData();
    formdata.append("myfile", file.file);
  

    var req = { method: 'POST', body: formdata, };

    await fetch(Path.csvUpload, req)
        .then(res => res.json())
        .then((dat) => getData = dat)
        .catch(err => { alert("ERROR :", err.message); getData = false })

    if (getData?.success === 'false') {
        alert("Register", getData.message); getData = false
    }

    return getData


}





export default {
    csvUpload
}
