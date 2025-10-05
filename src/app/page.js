import Homepage from '@/component/homepage/Homepage';
import PublicLayout from './PublicLayout';
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
