import UserLarge from "./components/UserLarge";
import UserSmall from "./components/UserSmall";
import Project from "./components/Project";
import ProjectSm from "./components/ProjectSm";

function App() {
  return (
    <div>
      <UserLarge name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></UserLarge>
      <UserSmall name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></UserSmall>
      <Project name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></Project>
      <ProjectSm name={'Nicola De Sanctis'} url={'https://portfolio-challenge.vercel.app/static/media/human.36814bf1.jpg'}></ProjectSm>
    </div>
  );
}

export default App;
