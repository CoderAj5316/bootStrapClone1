import React, { useState } from 'react'
import "./NavTopView.css"
const NavTopView = () => {

    const [menuList, setMenuList] = useState(true);
    return (
        <div className="bgImage">

            { menuList && (
                <div className='menuList35'>

                    <div className='manuItem15'>Home</div>


                    <div className='manuItem15'>Contact</div>

                    <div className='manuItem15'>About</div>

                </div>)}


            <div>



                <section  className='hamBurger'  onClick={()=>setMenuList(!menuList)}>
                <div  className='hamBurger2'>
                <div className='hm1'>-</div>
                    <div className='hm1'></div>
                    <div className='hm1'></div>
                    </div>
                    
                </section>


                <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/1f7591a43d715b62a6734fb0/Untitled-1.png" alt="" />

                <div>
                    <h1>One Step to Making a Good Start</h1>
                    <p>
                        Mauris fermentum tortor non enim aliquet condimentum. Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum ac, suscipit nec mauris. Suspendisse commodo tempor sagittis! In justo est, sollicitudin eu scelerisque pretium, placerat eget elit.
                    </p>


                </div>
            </div>
        </div>
    )
}


export default NavTopView
