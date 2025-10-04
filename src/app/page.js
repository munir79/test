import Homepage from '@/component/homepage/Homepage';
import PublicLayout from './PublicLayout';
import Service from '@/component/service/Service';
import AboutPage from '@/component/aboutPage/AboutPage';
import ProjectsHighLight from '@/component/projects/ProjectsHighLight';
import Extra from '@/component/Extra';

export default function Home() {
  return (
    <div>
      <PublicLayout>
        <Homepage />
        {/* <div>
          <AboutPage />
        </div> */}
        {/* <div>
          <Service />
        </div> */}
        <div>
          <ProjectsHighLight />
        </div>
        <Extra />
      </PublicLayout>
    </div>
  );
}
