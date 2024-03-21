import React,{useEffect} from "react";
const Home = () => {
    useEffect(() => {
        const blob = document.getElementById("blob");

        window.onpointermove = event => { 
            const { clientX, clientY } = event;
            
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 5000, fill: "forwards" });
        };
    }, []); 
    return (
        
        <div style={{
            background: 'rgb(41,41,41)',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            overflow:'hidden'
        }}>
          
            <div id="blob"></div>
            <div className="overflow-hidden" id="blur" style={{backdropFilter: 'blur(60px)', overflow: 'unset' }}></div>
            <div className="z-40" style={{
                height: '80%',
                width: '80%',
                alignSelf:'center',
            }}>
            
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    <div className="row-span-2 col-span-2 p-5" style={{
                        background:'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    }}>
                        <div className="">
                            <p className=" text-2xl articulat-l">HEY THERE ! 👋</p>

                            
                               <div className="flex gap-x-2 text-5xl">
                                    <div className=" articulat-l font-semibold">I'M </div> 
                                    <div className=" articulat-b">ANGELINE BUENDIA</div>
                               </div>
                            <p className="text-3xl articulat-m">- VISUAL DESIGNER</p>
                         

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                
                        </div>
                        
                    </div>

                    <div className="" style={{
                        background:'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    }} >PICTURE</div>
                    <div className="row-span-2 bg-slate-300" style={{
                        background:'linear-gradient(135deg, rgba(242, 240, 235, 0.1), rgba(51, 51, 51, 0.1))',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '2px solid rgba(242, 240, 235, 0.10)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    }} >Vertical carousel of works</div>
                    <div className="" style={{
                        background:'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    }}>LOGO</div>
                </div>
            </div>
        </div>
    );
  };
  
export default Home;