// pages/index.tsx
import ContactForm from '../components/EmailForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Email Sender SaaS</h1>
      <ContactForm />
    </div>
  );
}