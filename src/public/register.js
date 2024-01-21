// app.js

const baseUrl = 'https://chatapp-q19c.onrender.com';

const registerApi = async (nameUser, email, password, img) => {
    const formData = new FormData();
    if (img) {
        formData.append('img', img);
    }
    formData.append('nameUser', nameUser);
    formData.append('email', email);
    formData.append('password', password);

    let data = await fetch(`${baseUrl}/api/register`, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    return data
}

// console.log(await registerApi('admin@gmail.com', '1234'))

const btnLogin = document.querySelector("#btnlg")
const nameUser = document.querySelector('.name')
const emaiUser = document.querySelector(".txt_name");
const avatar = document.querySelector('.file')
const passwordUser = document.querySelector(".txt_password");
const confirmPasswordUser = document.querySelector(".txt_confirm_password");
const btn_rgt = document.querySelector(".btn_rgt");
btnLogin.onclick = async (e) => {
    e.preventDefault()
    if (!nameUser.value || !emaiUser.value || !passwordUser.value || !confirmPasswordUser.value) {
        alert('Please input all information')
    } else {
        if (isValidEmail(emaiUser.value)) {
            if (passwordUser.value !== confirmPasswordUser.value) {
                alert('confirm password not match!!!')
            } else {
                let data = await registerApi(nameUser.value, emaiUser.value, passwordUser.value, avatar.files[0])
                if (data.errCode) {
                    alert(data.errMessage)
                } else {
                    alert(data.errMessage)
                    window.location.href = '/login'
                }
            }
        } else {
            alert('Địa chỉ email không hợp lệ')
        }
    }
}
btn_rgt.onclick = () => {
    window.location.href = '/login'
}
function isValidEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra xem chuỗi có khớp với biểu thức chính quy không
    return emailRegex.test(email);
}

