import Img1 from './Group.png';
import img2 from './img2.png';
import Img3 from './img3.png';
import i1 from './i1.png'
import i2 from './i2.png'
import i3 from './i1.png'
import i1s from './i1s.png'
import i2s from './i2s.png'
import star from './star-05.png'
import b1 from './b1.png'
import cube1 from './cube-02.png'
import cube2 from './cube-04.png'
import redstar from './red-star.png'
import redbell from './red-bell.png'
import e1 from './Ellipse.png'
import boy from './boy.png'
import last from './last.png'
import './First.css'
function First(){
    return(<>

    <div className="h-[5887px] w-[1440px]">
<img id='mainlogo' className='relative w-[117px] h-[34.41px] left-[175px] top-[53px]' src={Img1}></img>
<div id='list1' className='w-[378px] flex flex-row relative h-[26px] gap-6 left-[332px] top-[25px]'>
    <button className='w-[60px] hover:scale-105 hover:underline text-[#FF5555] relative h-[26px] text-xl font-bold leading-[26px] text-left'>Home</button>
    <button className='w-[100px]  hover:scale-105 hover:underline relative h-[26px] text-xl font-bold leading-[26px] text-left'>About us</button>
    <button className='w-[60px]  hover:scale-105  hover:underline relative h-[26px] text-xl font-bold leading-[26px] text-left'>Pricing</button>
    <button className='w-[60px] hover:scale-105 hover:underline text-xl font-bold leading-[26px] text-left'>Features</button>
</div>

<button id='btn1' className='w-[180px] hover:scale-110 relative text-white font-semibold text-xl h-[60px] rounded-[4px] left-[1085px] top-[-17px] bg-black '>Download</button>


<img src={img2}></img>


<h1 id='text1' className=' absolute w-[618px] h-32 text-[64px] font-bold leading-[64px] text-left left-[175px] top-[215px]'>Make the best financial decisions</h1>
<span id='op1' className=' absolute w-[638px] h-14 opacity-50 text-lg font-medium left-[175px] top-[367px]'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</span>
<button id='btn2' className='w-[180px] hover:scale-110 absolute text-white font-semibold text-xl h-[60px] rounded-[4px] left-[175px] top-[447px] bg-black '>Get Started</button>
<div id='text2' className=' absolute w-[151px] h-7 text-2xl font-semibold leading-7 text-left left-[438px] top-[462px]'>Watch Video</div>

<img id='img3' className=' absolute w-[512.36px] h-[313.92px] left-[197.64px] top-[523.75px]' src={Img3} />

{/* <img src={i2} className=' absolute  w-[249.59px] h-[505.02px] left-[893px] top-[257.6px] '></img>
<img src={i1} className='absolute w-[249.25px] h-[504.32px] right-[193px] top-[137.51px]' />

<img src={i3} className=' absolute'></img> */}








{/* 2nd */}
<div id='circle1'>
<img src={b1} className=' absolute w-[393px] h-[485.14px] left-[145px] top-[1000.85px]' alt="" />
<img className=' absolute w-[380px] h-[420px] translate-y-[-150px] translate-x-[150px]  left-[110px] top-[1211.7px]' src={e1}></img>
<img className=' absolute w-[380px] h-[420px] translate-y-[-150px] translate-x-[150px]  left-[78px] top-[1243.7px]' src={e1}></img>
<img className=' absolute w-[380px] h-[420px]  translate-y-[-150px] translate-x-[150px] left-[46px] top-[1275.7px]' src={e1}></img>
<img src={i1s} className=' absolute w-[360px] h-[550px] translate-x-[-20px] left-[294.28px] top-[1061.64px]' alt="" />
</div>

<div id='box1'>
<span className=' absolute text-[#FF5555] w-[116px] h-7 text-lg font-medium leading-7 tracking-[0.16em] text-left left-[730px] top-[1071px]'>FEATURE</span>
<span className=' absolute w-[359px] h-12 text-5xl font-bold leading-[48px] text-left left-[730px] top-[1103px]'>Uifry premium</span>

<div className=' flex flex-row gap-2 absolute w-[207px] h-7 left-[730px] top-[1183px]'>
    <img src={star} alt="" />
    <span className='text-lg font-bold leading-7 text-left'>Budgeting intervals</span>
    
</div>

<span className=' absolute opacity-50 w-[638px] h-14 text-lg font-medium leading-7 text-left left-[730px] top-[1223px]'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</span>


<div className=' flex flex-row gap-2 absolute w-[207px] h-7 left-[730px] top-[1311px]'>
    <img src={cube1} alt="" />
    <span className='text-lg font-bold leading-7 text-left'>Budgeting intervals</span>
    
</div>

<span className=' absolute opacity-50 w-[638px] h-14 text-lg font-medium leading-7 text-left left-[730px] top-[1351px]'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</span>

<div className=' flex flex-row gap-2 absolute w-[207px] h-7 left-[730px] top-[1439px]'>
    <img src={cube2} alt="" />
    <span className='text-lg font-bold leading-7 text-left'>Budgeting intervals</span>
    
</div>


<span className=' absolute opacity-50 w-[638px] h-14 text-lg font-medium leading-7 text-left left-[730px] top-[1479px]'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</span>
</div>

<div id='box2'>
<span className=' absolute w-[154px] h-7 text-lg font-medium leading-7 tracking-[0.16em] text-left left-[175px] text-[#FF5555] top-[1780.49px]'>ADVANTAGES</span>
<span className=' absolute w-[470px] h-12 text-5xl font-bold leading-[48px] text-left left-[175px] top-[1812.49px]'>Why choose Uifry?</span>
</div>
{/*  65416 */}
<div id='circle2'>
<img className=' absolute w-[380px] h-[420px] translate-y-[-150px] translate-x-[150px]  left-[772.3px] top-[1860.84px]' src={e1}></img>
<img className=' absolute w-[380px] h-[420px] translate-y-[-150px] translate-x-[150px]  left-[740.3px] top-[1892.84px]' src={e1}></img>
<img className=' absolute w-[380px] h-[420px]  translate-y-[-150px] translate-x-[150px] left-[708.3px] top-[1924.84px]' src={e1}></img>
<img src={i1s} className=' absolute w-[360px] h-[550px] translate-x-[-20px] left-[956.58px] top-[1710.78px]' alt="" />
</div>
{/* 5464 */}

<div id='box3'>
<div className=' flex flex-row gap-3 absolute w-[336px] h-12 left-[175px] top-[1892.49px]'>
    <img src={redbell} className='text-[28px] translate-y-[-8px]' alt="" />
    <span className='text-[28px] font-bold leading-7 text-left'>Clever notifications</span>
    
</div>

<span className=' absolute opacity-50  w-[535px] h-[140px] text-lg font-medium leading-7 text-left left-[175px] top-[1963.49px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</span>
</div>

<div id='box4'>
<div className=' flex flex-row gap-3 absolute w-[336px] h-12 left-[730px] top-[2475.98px]'>
    <img src={redstar} className='text-[28px] translate-y-[-8px]' alt="" />
    <span className='text-[28px] font-bold leading-7 text-left'>Clever notifications</span>
    
</div>

<span className=' absolute opacity-50  w-[535px] h-[140px] text-lg font-medium leading-7 text-left left-[730px] top-[2546.98px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</span>
</div>
{/* 65416 */}
<div id='circle3'>
<img className=' absolute w-[380px] h-[420px] translate-y-[-150px] translate-x-[150px]  left-[125.3px] top-[2501.33px]' src={e1}></img>
<img className=' absolute w-[380px] h-[420px] translate-y-[-150px] translate-x-[150px]  left-[93.3px] top-[2533.33px]' src={e1}></img>
<img className=' absolute w-[380px] h-[420px]  translate-y-[-150px] translate-x-[150px] left-[61.3px] top-[2565.33px]' src={e1}></img>
<img src={i1s} className=' absolute w-[360px] h-[550px] translate-x-[-20px] left-[309.58px] top-[2351.27px]' alt="" />
</div>
{/* 5464 */}

{/* 3rd */}
<div id='circle4'>
<img className=' absolute w-[380px] h-[420px] translate-y-[-150px] translate-x-[150px]  left-[125.3px] top-[3399.85px]' src={e1}></img>
<img className=' absolute w-[380px] h-[420px] translate-y-[-150px] translate-x-[150px]  left-[93.3px] top-[3431.85px]' src={e1}></img>
<img className=' absolute w-[380px] h-[420px]  translate-y-[-150px] translate-x-[150px] left-[61.3px] top-[3463.85px]' src={e1}></img>
<img src={boy} className=' absolute  w-[213.5px] h-[213.5px] border-[2.25px] left-[328.91px] top-[3348.73px]' alt="" />
</div>


<div id='box5'>
<span className=' absolute w-[150px] h-7 text-lg font-semibold leading-7 tracking-[0.16em] text-center left-[646px] top-[2981.71px]'>TESTINOMIAL</span>
 <span className=' absolute  w-[400px] translate-x-10 h-24 text-5xl font-bold leading-[48px] text-center left-[493px] top-[3013.71px]'>What our users say about us?</span> 
 </div>

<div id='box6'>
<span className=' absolute w-[442px] h-14 text-[28px] font-bold leading-7 text-left left-[823px] top-[3234.71px]'>The best financial accounting app ever!</span>
<span className=' absolute w-[442px] h-[196px] text-lg font-medium leading-7 text-left left-[823px] opacity-50 top-[3314.71px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</span>
<span className=' absolute w-[97px] h-7 text-lg font-bold leading-7 text-left left-[823px] top-[3598.71px]'>Nick Jonas</span>
</div>


{/* 4th */}
<div id='box7'>
<span className=' absolute w-11 h-7 text-lg font-medium leading-7 tracking-[0.16em] text-left left-[175px] top-[3870.71px] text-[#FF5555]'>FAQ</span>
<span className=' absolute w-[497px] h-24 text-5xl font-bold leading-[48px] text-left left-[175px] top-[3902.71px]'>Frequently asked questions</span>
</div>
{/* 6 div */}
{/* 1 */}
<div id='box8'>
<div className=' absolute bg-[#FF5555] w-[535px] h-[181px] rounded-lg left-[175px] top-[4038.71px] '></div>
<span className=' absolute  w-[474px] h-14 text-[28px] font-semibold leading-7 text-left left-[206px] text-white top-[4069.71px]'>The Best Financial Accounting App Ever!</span>
<span className=' absolute w-[466px] h-14 text-lg font-medium leading-7 text-white left-[206px] top-[4133.71px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
</div>


{/* 2 */}
<div id='box9'>
<span className=' absolute  w-[474px] h-14 text-[28px] font-semibold leading-7 text-left left-[761px]  top-[4069.71px]'>The Best Financial Accounting App Ever!</span>
<span className=' absolute w-[466px] h-14 text-lg font-medium leading-7  left-[761px] opacity-50 top-[4133.71px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
</div>

{/* 3*/}
<div id='box10'>
<span className=' absolute  w-[474px] h-14 text-[28px] font-semibold leading-7 text-left left-[206px] top-[4270.71px]'>The Best Financial Accounting App Ever!</span>
<span className=' absolute w-[466px] h-14 text-lg font-medium leading-7 opacity-50 left-[206px] top-[4334.71px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
</div>



{/* 4 */}
<div id='box11'>
<div className=' absolute bg-[#FF5555] w-[535px] h-[181px] rounded-lg left-[730px] top-[4239.71px]'></div>
<span className=' absolute  w-[474px] h-14 text-[28px] font-semibold leading-7 text-left left-[761px] text-white top-[4270.71px]'>The Best Financial Accounting App Ever!</span>
<span className=' absolute w-[466px] h-14 text-lg font-medium leading-7 text-white left-[761px] top-[4334.71px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
</div>

{/* 5 */}
<div id='box12'>
<div className=' absolute bg-[#FF5555] w-[535px] h-[181px] rounded-lg left-[175px] top-[4440.71px]'></div>
<span className=' absolute  w-[474px] h-14 text-[28px] font-semibold leading-7 text-left left-[206px] text-white top-[4471.71px]'>The Best Financial Accounting App Ever!</span>
<span className=' absolute w-[466px] h-14 text-lg font-medium leading-7 text-white left-[206px] top-[4535.71px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
</div>


{/* 6 */}
<div id='box13'>
<span className=' absolute  w-[474px] h-14 text-[28px] font-semibold leading-7 text-left left-[761px]  top-[4471.71px]'>The Best Financial Accounting App Ever!</span>
<span className=' absolute w-[466px] h-14 text-lg font-medium leading-7  left-[761px] opacity-50 top-[4535.71px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
</div>


<img src={last} id='lastbigimg' className=' absolute w-[1090px] h-[508px] rounded-lg left-[175px] top-[4776.71px]' alt="" />


{/* footer */}
<img id='footerlogo' src={Img1} className=' absolute w-[117px] h-[34.41px] left-[175px] top-[5439.71px]' alt="" />
<div id='foot1' className=' flex flex-col gap-4 absolute w-[82px] h-[210px] left-[413px] top-[5439.71px]'>
    <span className='text-[32px] font-medium leading-[42px] text-left'>Links</span>
    <span className='text-base font-medium leading-[26px] text-left'>Home</span>
    <span className='text-base font-medium leading-[26px] text-left'>About Us</span>
    <span className='text-base font-medium leading-[26px] text-left'>Bookings</span>
    <span className='text-base font-medium leading-[26px] text-left'>Blog</span>
</div>

<div id='foot2' className=' flex flex-col gap-4 absolute w-[108px] h-[168px] left-[560px] top-[5439.71px]'>
    <span className='text-[32px] font-medium leading-[42px] text-left'>Legal</span>
    <span className='text-base font-medium leading-[26px] text-left'>Terms Of Use</span>
    <span className='text-base font-medium leading-[26px] text-left'>Privacy Policy</span>
    <span className='text-base font-medium leading-[26px] text-left'>Cookie Policy</span>

</div>

<div id='foot3' className=' flex flex-col gap-4 absolute w-[108px] h-[168px] left-[733px] top-[5439.71px]'>
    <span className='text-[32px] font-medium leading-[42px] text-left'>Product</span>
    <span className='text-base font-medium leading-[26px] text-left'>Take Tour</span>
    <span className='text-base font-medium leading-[26px] text-left'>Live Chat</span>
    <span className='text-base font-medium leading-[26px] text-left'>Reveiws</span>

</div>

<div id='foot4'>
<span className='absolute w-[173px] h-[42px] text-[32px] font-medium leading-[42px] text-left left-[926px] top-[5439.71px]'>Newsletter</span>
<span className=' absolute w-[152px] h-[26px] text-base font-medium leading-[26px] text-left left-[926px] top-[5497.71px]'>Stay Up To Date</span>
</div>
{/* <span className=' relative w-[356px] h-[26px] text-base font-medium leading-[26px] text-left left-[369px] top-[39px]'>Copyright 2022 Uifry.com All Rights Reserved</span> */}
    </div>
    </>)
}
export default First;