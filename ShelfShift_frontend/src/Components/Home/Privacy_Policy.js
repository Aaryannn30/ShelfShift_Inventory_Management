import React, { useEffect } from 'react';

export default function Privacy_Policy() {
  // Scroll to top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-8 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-600">Privacy Policy for Storify</h1>

        <p className="mb-6 text-lg leading-relaxed">
          Gamers Joyland provides the app as a free service. This service is offered by Gamers Joyland at no charge and
          is intended for use as it is.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          This page serves the purpose of informing visitors about our policies regarding the gathering, utilization,
          and sharing of Personal Information in the event of someone opting to use our Service.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          By utilizing our Service, you consent to the gathering and utilization of information as outlined in this
          policy. The Personal Information we gather is employed to enhance and provide the Service. We pledge not to
          employ or distribute your information to any party except as detailed in this Privacy Policy.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          The terms mentioned in this Privacy Policy have the same meanings as those detailed in our Terms and
          Conditions, accessible on the Gamers Joyland platform, unless explicitly defined differently in this Privacy
          Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">Information Collection and Use</h2>

        <p className="mb-6 text-lg leading-relaxed">
          To enhance your experience with our Service, we may need you to provide specific personally identifiable
          information. Any information we ask for will be kept by us and utilized in accordance with this privacy
          policy.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          The application does use third-party services that might collect information used to identify you.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Below are the links to the privacy policies of the third-party service providers utilized by the app:
        </p>

        <ul className="list-disc list-inside mb-6 pl-8 text-lg leading-relaxed">
          <li>
            [Google Play Services]{' '}
            <a className="text-black-600 hover:underline" href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
              https://www.google.com/policies/privacy/
            </a>
          </li>
          <li>
            [Admob]{' '}
            <a
              className="text-indigo-600 hover:underline"
              href="https://support.google.com/admob/answer/6128543?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://support.google.com/admob/answer/6128543?hl=en
            </a>
          </li>
          <li>
            [Firebase]{' '}
            <a className="text-indigo-600 hover:underline" href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer">
              https://firebase.google.com/support/privacy/
            </a>
          </li>
          <li>
            [Unity]{' '}
            <a className="text-indigo-600 hover:underline" href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://unity3d.com/legal/privacy-policy
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">Log Data</h2>

        <p className="mb-6 text-lg leading-relaxed">
          Whenever you utilize our Service and encounter an app error, we gather data and information (through
          third-party products) on your device, referred to as Log Data. This Log Data may encompass details such as
          your device's Internet Protocol ("IP") address, device name, operating system version, the setup of the app
          during your Service usage, the time and date of your Service usage, and additional statistics.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">Cookies</h2>

        <p className="mb-6 text-lg leading-relaxed">
          Cookies are small data files commonly utilized as anonymous unique identifiers. They are transmitted to your
          browser from the websites you visit and are stored in your device's internal memory.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          This Service doesn't directly employ these "cookies." Nevertheless, the app might utilize third-party code
          and libraries that utilize "cookies" to gather information and improve their services. You have the choice
          to accept or decline these cookies and receive notifications when a cookie is being sent to your device. If
          you opt to decline our cookies, some parts of this Service may not be accessible to you.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">Service Providers</h2>

        <p className="mb-6 text-lg leading-relaxed">
          We might enlist the help of third-party companies and individuals for the following purposes:
        </p>

        <ul className="list-disc list-inside mb-6 pl-8 text-lg leading-relaxed">
          <li>Facilitating our Service;</li>
          <li>Providing the Service on our behalf;</li>
          <li>Performing Service-related tasks;</li>
          <li>Assisting us in analyzing how our Service is utilized.</li>
        </ul>

        <p className="mb-6 text-lg leading-relaxed">
          We'd like to notify users of this Service that these third parties have access to their Personal
          Information. This access is granted to enable them to perform tasks delegated to them on our behalf.
          However, they are bound by obligation not to disclose or utilize the information for any other purpose.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-black-500">Security</h2>

        <p className="mb-6 text-lg leading-relaxed">
          We appreciate your trust in sharing your Personal Information with us. Hence, we endeavor to employ
          commercially acceptable methods to safeguard it. However, it's important to note that no method of
          transmission over the internet or electronic storage is entirely secure and reliable, and we cannot
          guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">Links to Other Websites</h2>

        <p className="mb-6 text-lg leading-relaxed">
          This Service might include links to other websites. Clicking on a third-party link will redirect you to that
          site. It's important to note that these external sites are not operated by us. Therefore, we strongly
          recommend reviewing the Privacy Policy of these websites. We have no control over the content, privacy
          policies, or practices of any third-party sites or services and assume no responsibility for them.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">Children's Privacy</h2>

        <p className="mb-6 text-lg leading-relaxed">
          These Services are not designed for individuals under the age of 13. We do not knowingly gather personally
          identifiable information from children under 13 years old. If we discover that a child under 13 has provided
          us with personal information, we will promptly remove it from our servers. If you are a parent or guardian
          and are aware that your child has provided us with personal information, please contact us so we can take
          appropriate action.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">Changes to This Privacy Policy</h2>

        <p className="mb-6 text-lg leading-relaxed">
          We may periodically update our Privacy Policy. Hence, we recommend that you check this page regularly for
          any changes. We will notify you of any updates by posting the revised Privacy Policy on this page.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          This policy is effective as of May 15, 2024.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">Contact Us</h2>

        <p className="mb-6 text-lg leading-relaxed">
          If you have any questions or suggestions regarding our Privacy Policy, feel free to contact us at
          <a href="mailto:gamersjoyland@gmail.com" className="text-indigo-600 hover:underline"> gamersjoyland@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
