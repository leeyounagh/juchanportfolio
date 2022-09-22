import './Home.scss'
import React, { useState } from 'react';
import { FcCellPhone } from 'react-icons/fc';



const Home = () => {

     const [card,setCard] = useState([{img:"image/무신사.png",title:"musinsa project",date:"6/20 ~ 7/3",
    link:""},{img:"image/차.png",title:"Car Damage Detection",date:"6/23 ~ 7/11 ",link:"https://github.com/jcjang1/CODEnter_mmdet"},{img:"image/해커톤.png",title:"Kaggle - HuBMAP + HPA - Hacking the Human Body",date:"8/16 ~ 9/22",link:"https://github.com/jcjang1/kaggle_dataset_maker"}])
    const github = () =>{
        return(
            <div style={{width:"100%",height:"300px",display:"flex",}}>
               <div style={{width:"40%",height:"100%",position:"relative",left:"30%",
            paddingTop:"50px"}}>
                      <div style={{fontSize:"40px",fontWeight:"600",}}>GITHUB,Team Notion,WandaB</div>
                      <div style={{display:"flex",justifyContent:'center',padding:"50px"}}>
                        <div>
                        <a style={{fontSize:"20px"}} href='https://github.com/jcjang1'>github</a> /
                        </div>
                        <div>
                            <a style={{fontSize:"20px"}} href=' https://www.notion.so/3376ddf293ec4fb2937e815dbb182a0d?v=018439c015ab45cc9499ff0db73e5062
                            ' >Team Notion/</a>
                        </div>
                        <div>
                            <a style={{fontSize:"20px"}} href='https://wandb.ai/jcjang'> 완다비</a>
                        </div>
                      </div>
                      <div>
                        <span>
                        <FcCellPhone size='40px'></FcCellPhone>
                        </span>
                          
                           <span style={{fontSize:"20px",position:"relative",top:"-10px"}}>
                           010-5778-9635
                           </span>
                           
                        </div>
                      
                    
               </div>
            </div>
        )
    }

    const aboutme = () =>{

        return(
            <div style={{width:"100%",height:"800px",display:"flex",justifyContent:"center"}}>
                <div class="wrap" style={{position:"relative",top:"20%"}}>
                <div class="tile"> 
                <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
                <div class="text">
                <h1>Lorem ipsum.</h1>
                <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
                <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
                </div>


                <div class="tile"> 
                <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80'/>
                <div class="text">
                <h1>Lorem ipsum.</h1>
                <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
                <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
                </div>
                
                <div class="tile"> 
                <img src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80'/>
                <div class="text">
                <h1>Lorem ipsum.</h1>
                <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
                <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
                </div>
                </div>
  
  

            </div>
        )
    }


    const project = () =>{
        return(
            <div style={{width:"100%",height:"800px",paddingTop:"50px"}}>
               <div style={{fontSize:"40px",marginBottom:"30px",fontWeight:"900"}}>Project</div>
               <div className='container' style={{display:"flex",width:"80%",height:"70%",position:"relative",
             left:"15%"}}>
                 {
                    card.map((item)=>{
                        return(
                            <div className='pro_hover' style={{width:"300px",height:"500px",margin:"30px",
                            borderRadius:"50px"}}>
                           <a href={item.link} style={{textDecoration:"none"}}>      <div >
                                <img  src={item.img} width="300px" height="500px" style={{borderRadius:"50px"}}></img>
                                </div>
                            
                            <div style={{zIndex:"100",fontWeight:"900",fontSize:"25px",position:"relative",
                             top:"-55%",color:"white"}}>{item.title} </div>
                                 <div style={{fontWeight:"900",fontSize:"25px",position:"relative",
                             top:"-50%",color:"white"}}>{item.date} </div>
                                     <div style={{zIndex:"100",fontWeight:"900",fontSize:"25px",position:"relative",
                             top:"-45%",color:"white"}}>Click!</div>
                             
                             </a>
                          
                            </div>
                            
                        )
                       
                    })
                 }
                   
               </div>
         
            </div>
        )
    }
    return (
        <div>
         <div style={{width:"100%",border:"1px solid black",height:"700px",
        background:"black"}}>
            <img className='fade_1' src='https://i.pinimg.com/564x/8c/dd/f9/8cddf993cbf37f3000b9062dfd20b22e.jpg'
            width='100%' height='700px' style={{opacity:"0.4"}}></img>
            <div className='Logo fade_2'style={{display:"flex",position:"absolute",top:"40%",left:"40%",
            color:'white',fontSize:"80px",fontWeight:"900"
         }}>
            AI Engineer
            </div>
            <div className="fade_2"style={{position:"absolute",top:"55%",left:"45%", color:'white',fontSize:"50px",fontWeight:"900"}}>
                Juchan Jang
            </div>
             
            
        </div>  

        <div>
            
            
            </div> 
   
             {/* {
                aboutme()
             } */}
             {
                project()
             }
                  {
                github()
             }
        </div>
    );
};

export default Home;