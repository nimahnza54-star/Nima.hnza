function Header(){

let style1={
    width:"120px" , 
    height:"28px" , 
    marginRight:"1050px" , 
    backgroundColor:"green",
    color:"red",
    borderRadius:"5px" , 
    border:"1px solid gray"

    
}
 return(

<>
<div class="container-sm ">

<div class="row">

<a href="#" class="col nav-link text-success" style={{marginRight:"190px"}}>صفحه اصلی</a>
<a href="#" class="col nav-link text-success">خدمات</a>
<a href="#" class="col nav-link text-success">درباره ما</a>
<a href="#" class="col nav-link text-success">تماس با ما</a>
</div>

<input type="text" style={style1} placeholder="سرچ کنید"/>

<button type="button" class="btn btn-outline-success" style={{marginTop:"-88px"}} 
onClick={()=>{window.location.href="https://www.speedtest.net/"}}
>ورود/عضویت</button>

</div>
</>
 )
}


export default Header;