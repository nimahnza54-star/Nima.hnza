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

<a href="#" class="col nav-link text-success my-link" style={{marginRight:"190px"}}>صفحه اصلی</a>
<a href="#" class="col nav-link text-success my-link">خدمات</a>
<a href="#" class="col nav-link text-success my-link"
onClick={(e)=>{e.preventDefault(); 
    window.scrollTo({behavior:"smooth" , top:1300})
} }>درباره ما</a>

<a href="#" class="col nav-link text-success my-link"
onClick={(e)=>{e.preventDefault(); 
    window.scrollTo({behavior:"smooth" , top:2000})}}
>تماس با ما</a>
</div>

<input type="text" style={style1} placeholder="سرچ کنید"/>

<button type="button" class="btn btn-outline-success" style={{marginTop:"-88px"}}
onClick={()=> window.scrollTo({behavior:"smooth" , top:1600})}
>ورود/عضویت</button>

</div>
</>
 )
}


export default Header;