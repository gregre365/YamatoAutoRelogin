
document.getElementById('save').onclick = () => {
    const element_code1 = document.getElementById('code1');
    const element_code2 = document.getElementById('code2');
    const element_password = document.getElementById('password');
    const element_id = document.getElementById('id');
    const element_message = document.getElementById('message')
    let validate_ok = true;
    let message = '';

    element_code1.setAttribute('style', '');
    element_code2.setAttribute('style', '');
    element_password.setAttribute('style', '');
    element_id.setAttribute('style', '');

    if (element_code1.value.length < 9 || element_code1.value.length > 12) {
        element_code1.setAttribute('style', 'background-color: yellow');
        validate_ok = false;
        message += '・お客様コードは半角数字9～12桁です<br>';
    }
    if (element_code2.value.length != 0 && element_code2.value.length != 3) {
        element_code2.setAttribute('style', 'background-color: yellow');
        validate_ok = false;
        message += '・お客様コード枝番は空白もしくは半角数字3桁です<br>';
    }
    if (element_password.value.length < 8 || element_password.value.length > 12) {
        element_password.setAttribute('style', 'background-color: yellow');
        validate_ok = false;
        message += '・パスワードは半角英数字8～12文字です<br>';
    }
    if (element_id.value.length != 0 && (element_id.value.length < 6 || element_id.value.length > 20)) {
        element_id.setAttribute('style', 'background-color: yellow');
        validate_ok = false;
        message += '・個人ユーザーIDは半角英数字6～20文字です<br>';
    }
    if (validate_ok) {
        localStorage.code1 = element_code1.value;
        localStorage.code2 = element_code2.value;
        localStorage.password = element_password.value;
        localStorage.id = element_id.value;
        message = '保存しました'
    }
    element_message.innerHTML = message;
}

const code1 = localStorage.code1;
const code2 = localStorage.code2;
const password = localStorage.password;
const id = localStorage.id;

if (code1) {
    const element_code1 = document.getElementById('code1');
    element_code1.value = code1;
}
if (code2) {
    const element_code2 = document.getElementById('code2');
    element_code2.value = code2;
}
if (password) {
    const element_password = document.getElementById('password');
    element_password.value = password;
}
if (id) {
    const element_id = document.getElementById('id');
    element_id.value = id;
}
