export const cloudinaryService = {
    upload
}

async function upload(thumb) {
    const CLOUD_NAME = "dbfuiddgm"
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    

    const formData = new FormData();
    formData.append('file', thumb)
    formData.append('upload_preset', 'black-books');
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        const data = await res.json();
        console.log(data);
        return data.secure_url;

    } catch (err) {
        console.log(err);
    }
}
