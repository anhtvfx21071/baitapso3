function handleSubmit(){
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();
    const errorEmail = document.querySelector('.error-email');
    const checkEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const check = emailValue.match(checkEmail);
    //lay phan chua thong tin
    const sectinoncontent = document.querySelector('#personal-info .info');
    const submitControl =  document.querySelector('#personal-info .submit-email');
    // lấy thông tin view more
    if(check)
    {
        sectinoncontent.style.display='block';
        submitControl.style.display='none';
    }
    else{
        errorEmail.innerHTML = 'Email không hợp lệ';
    }
}
let TTHT = 1;
function  handleOnMouseOver(element){
    const viewmore = element.querySelector('.view .viewmore');
    if( viewmore.classList.contains("chua")){
        const view = element.querySelector('.view .viewmore');
        view.style.display = 'none';
    }
    else{
        const view = element.querySelector('.view .viewmore');
        view.style.display = 'block';   

    }

}
function handleOnMouseOut(element){
    const view = element.querySelector('.view .viewmore');
    view.style.display = 'none';  
}
//Bật thông tin ở mục kinh nghiệm, sở thích, học vấn, ngôn ngữ, hoạt động và kỹ năng
function viewmore1(element){
    const parentelement = element.closest('.container .thongtin');
    const sectinoncontent = parentelement.querySelectorAll('.vitri3');
    sectinoncontent.forEach(element => {
    element.style.display = 'block';
    });
    const viewmore = parentelement.querySelector('.view .viewmore');
    viewmore.style.display = 'none';
    const viewless = parentelement.querySelector('.view .viewless');
    viewless.style.display = 'block';
    viewmore.classList.add("chua");
 
}
//Ẩn thông tin ở mục kinh nghiệm, sở thích, học vấn, ngôn ngữ, hoạt động và kỹ năng
function viewless1(element){
    const parentelement = element.closest('.container .thongtin');
    const sectinoncontent = parentelement.querySelectorAll('.vitri3');
    sectinoncontent.forEach(element => {
    element.style.display = 'none';
    });
    const viewless = parentelement.querySelector('.view .viewless');
    viewless.style.display = 'none';
    const viewmore = parentelement.querySelector('.view .viewmore');
    viewmore.classList.remove("chua");
 
}