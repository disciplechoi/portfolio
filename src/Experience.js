import React, {useEffect, useState} from 'react';

export default function Experience(){

  const [cardVisibilities, setCardVisibilities] = useState([]);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setCardVisibilities((prev) => {
          const newVisibilities = [...prev];
          newVisibilities[index] = true;
          return newVisibilities;
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observers = [];

    // 각 카드에 대해 Intersection Observer 생성 및 설정
    document.querySelectorAll('.experience-card').forEach((card, index) => {
      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      });

      observers.push(observer);

      observer.observe(card);

      // 초기에 각 카드의 가시성 상태를 false로 설정
      setCardVisibilities((prev) => [...prev, false]);
    });

    // 컴포넌트 언마운트 시에 Intersection Observers 해제
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []); // useEffect의 두 번째 매개변수에 빈 배열을 전달하여 한 번만 실행되도록 함
    return(
    <>
    <div className="experience text-left pt-10">
        <h1 className="font-bold text-3xl">Experience</h1>

        <div className={`experience-card ${cardVisibilities[0] ? 'fade-in' : ''}`}>
            <div className="job-title flex">
              <h2 className="text-xl font-bold">Samsung SDS America | </h2>
              <h3 className="text-xl"> Business Analyst</h3>
            </div>
            <p>2022.11 - Current</p>
             Skills : <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Project Management</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Communication</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Documentation</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Reporting</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Requirements Elicitation</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Quality Assurance</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">ServiceNow Cloud</button>
              {/* <p>Skills  : ServiceNow Cloud Web Application Operation</p> */}

            <ul className="list-disc ml-4">   
                <li>Administered and maintained the ServiceNow platform, ensuring optimal performance, availability, and security.</li>
                <li>Provided end-user support and training to enhance ServiceNow adoption across the organization. Implemented and managed integrations with third-party tools, ensuring seamless data flow and process automation.</li>
                <li>Collaborated with developers to design and implement custom applications on the ServiceNow platform.</li>
                <li>Assisted in the development of ServiceNow best practices documentation and training materials.</li>
            </ul>
        </div>
        
      <div className={`experience-card ${cardVisibilities[1] ? 'fade-in' : ''}`}>
        <div className="job-title flex">
          <h2 className="text-xl font-bold">Universal Steel Products | </h2>
          <h3 className="text-xl">Full Stack Developer</h3>
        </div>
        <p>2022.11 - Current</p>
          Skills : <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">React</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Next.js</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">HTML/CSS</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Javascript</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Tailwind</button>
             {/* <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1">Quality Assurance</button> */}
             {/* <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1">ServiceNow Cloud</button> */}
          {/* <p>Skills  : ServiceNow Cloud Platform Operation</p> */}
        <ul className="list-disc ml-4">   
            <li>Logistic web application development using React, Nex.js and Prisma DB</li>
            <li>Designed dynamic and browser compatible pages using HTML5, CSS3, Tailwind</li>
            <li>Deployed Node.JS HTTP Server Socket.IO</li>
            <li>Built Dynamic Routing & server controller</li>
        </ul>
      </div>
       
      <div className={`experience-card ${cardVisibilities[2] ? 'fade-in' : ''}`}>
        <div className="job-title flex">
          <h2 className="text-xl font-bold">DGB Data System | </h2>
          <h3 className="text-xl">SQL Developer</h3>
        </div>
        <p>2022.11 - Current</p>
        Skills : <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1 mr-1">Oracle SQL</button>
             <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1">Banking System</button>
             {/* <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mb-1">HTML/CSS</button> */}
       
        <ul className="list-disc ml-4">   
            <li>Financial services web application/Oracle DB Management</li>
            <li>Created and modified SQL to manage private Banker and VIP manager’s score data</li>
            <li>Public Cloud (AWS) Web server development (AWS EC2, RDS, CloudWatch)</li>
        </ul>
      </div> 
 
       
    </div>
    
    </>
    );
}