import Homepage from '@/component/homepage/Homepage';
import PublicLayout from './PublicLayout';
import Service from '@/component/service/Service';
import AboutPage from '@/component/aboutPage/AboutPage';
import ProjectsHighLight from '@/component/projects/ProjectsHighLight';
import Contact from '@/component/Contact';
import FAQSection from '@/component/FAQSection';
import ContactSupport from '@/component/ContactSupport ';

export default function Home() {
  return (
    <div>
      <PublicLayout>
        <Homepage />
        <div>
          <FAQSection />
        </div>
        <div>
          {/* <Contact /> */}
          <ContactSupport />
        </div>
      </PublicLayout>
    </div>
  );
}
