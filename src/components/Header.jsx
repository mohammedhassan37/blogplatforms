import '../styles/Header.css'

function Header(){
return(
    <>
 <div className='header-container'>
    <ul>
        <li><a href="" id='header-container-home'>Home</a></li>
        <li><a href="">AI & ML</a></li>
        <li><a href="">Mobile</a></li>
        <li><a href="">Web Dev</a></li>
        <li><a href="">Gaming</a></li>
        <li><a href="">Technology</a></li>
    </ul>
    <input type="text" className='input-search' placeholder='Search articles...'/>
</div>


   
    </>
)
}


export default Header;