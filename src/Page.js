import UserSmall from './components/UserSmall'
import Skills from './components/Skills';
import ProjectSm from './components/ProjectSm'
import Blog from './components/Blog';
import Experience from './components/Experiences';
import HobbiesSm from './components/HobbiesSm';

const page = () => {
    return ( 
        <div className='page'>
            <div className="grid">
                <UserSmall name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></UserSmall>
                <div>
                    <Skills></Skills>
                    <Experience></Experience>
                </div>
                
            </div>
            
            <div className="grid2">
                <ProjectSm name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></ProjectSm>
                <ProjectSm name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></ProjectSm>
                <ProjectSm name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></ProjectSm>
            </div>
            <Blog name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></Blog>
            <footer className='grid3'>
            <ProjectSm name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></ProjectSm>
            <ProjectSm name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></ProjectSm>
            <HobbiesSm></HobbiesSm>
            </footer>
        </div>

     );
}
 
export default page;