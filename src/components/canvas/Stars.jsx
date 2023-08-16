import React,{useCallback} from 'react'
import { StarsParticles } from './StarsParticles';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
 
function Stars() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
       // await console.log(container);
    }, []);
  return (
    <Particles id="tsparticles" options={StarsParticles} init={particlesInit} loaded={particlesLoaded} className=' w-[100px]
    '/>
      
  
  )
}

export default Stars;
