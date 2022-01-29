import UserLarge from "./components/UserLarge";
import UserSmall from "./components/UserSmall";
import Project from "./components/Project";
import ProjectSm from "./components/ProjectSm";
import Skills from "./components/Skills";
import SkillsSm from "./components/SkillsSm";
import Blog from "./components/Blog";
import BlogSm from "./components/BlogSm";
import Experience from "./components/Experiences";
import ExperienceSm from "./components/ExperienceSm";
import Hobbies from "./components/Hobbies";
import HobbiesSm from "./components/HobbiesSm";

function App() {
  return (
    <div>
      <UserLarge name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></UserLarge>
      <UserSmall name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></UserSmall>
      <Project name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></Project>
      <ProjectSm name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></ProjectSm>
      <Skills></Skills>
      <SkillsSm></SkillsSm>
      <Blog name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></Blog>
      <BlogSm name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></BlogSm>
      <Experience></Experience>
      <ExperienceSm></ExperienceSm>
      <Hobbies></Hobbies>
      <HobbiesSm></HobbiesSm>
    </div>
  );
}

export default App;
