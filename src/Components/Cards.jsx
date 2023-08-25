import React, { useState } from 'react';

const Card = ({ imageSrc, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseOver = () => {
    setShowDescription(true);
  };

  const handleMouseOut = () => {
    setShowDescription(false);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/5 p-4">
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          className="w-full h-auto rounded-t-lg"
          src={imageSrc}
          alt=""
        />
        <div className="p-4">
          <h3 className='text-cyan-900 uppercase flex justify-center font-bold'>{title}</h3>
          <p className={`text-gray-700 ${showDescription ? 'block' : 'hidden'}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <>
      <div>
        <h1 className="text-cyan-900 font-bold flex-row text-3xl text-center">
          Did you know about our services?
        </h1>
      </div>
      <br />
      <div className="flex flex-wrap">
        <Card
          imageSrc="https://as2.ftcdn.net/v2/jpg/01/90/63/99/1000_F_190639989_DdrKUmCCAJaTbGajwQo4ub7OvqhWrysv.jpg"
          title="General Medicine"
          description="Our internist doctors are experts in diagnosing and treating a wide variety of medical conditions in adults. We conduct thorough assessments, provide care for chronic diseases, and coordinate your general medical needs."
        />
        <Card
          imageSrc="https://as1.ftcdn.net/v2/jpg/00/97/85/22/1000_F_97852214_BkJSHdga2NTstlymdExMX15JP855p9jq.jpg"
          title="Pediatrics"
          description="Our pediatricians are dedicated to caring for the health and well-being of your children from birth to adolescence. We offer growth monitoring services, vaccinations, management of common pediatric illnesses, and guidance for parents."
        />
        <Card
          imageSrc="https://as2.ftcdn.net/v2/jpg/05/73/84/17/1000_F_573841705_P0vFotYlkRh7RlqQ1J49fOK9GKJttzkT.jpg"
          title="Ophthalmology"
          description="Our ophthalmologists are dedicated to caring for visual health. We provide comprehensive vision exams, diagnosis and treatment of eye diseases, vision correction, and advanced eye surgery."
        />
        <Card
          imageSrc="https://as1.ftcdn.net/v2/jpg/06/15/83/76/1000_F_615837697_EDCIiMLZKKdAluXh3DFIAStfQLlvgMMj.jpg"
          title="Cardiology"
          description="Our cardiologists specialize in keeping your heart healthy. We perform cardiovascular diagnostic tests, offer heart risk assessments, blood pressure monitoring, and comprehensive treatment for heart diseases."
        />
        <Card
          imageSrc="https://as1.ftcdn.net/v2/jpg/04/21/24/32/1000_F_421243248_g2w4MxFxGAEbSlwTPz337lXa3U54BdTi.jpg"
          title="Dentistry"
          description="Our dentists are committed to your oral health. We offer services ranging from cleanings and dental exams to restorative and cosmetic procedures. Your smile and oral health are our priority."
        />
        <Card
          imageSrc="https://as2.ftcdn.net/v2/jpg/03/31/22/39/1000_F_331223903_X8JNhK3oVkLIxZbNZ4kEIHI3Ekt3x3RL.jpg"
          title="Nutrition"
          description="Our highly trained nutritionists are committed to your health and well-being through balanced nutrition. We offer personalized guidance to help you achieve your nutritional goals. Whether you're looking to lose weight, manage medical conditions, or simply improve your diet, our team will provide expert advice and tailored meal plans to suit your individual needs."
        />
        <Card
          imageSrc="https://as1.ftcdn.net/v2/jpg/06/01/45/36/1000_F_601453618_QWyMEz2nkRy74ffnDsicvsLBBWjyzjDs.jpg"
          title="Physical Therapy"
          description="Our physiotherapists are dedicated to your recovery and pain-free movement. If you've experienced injuries, surgeries, or musculoskeletal disorders, our team will provide you with personalized therapy. Through a combination of therapeutic exercises, mobilization techniques, and manual therapy, we'll help you restore function and enhance your quality of life."
        />
        <Card
          imageSrc="https://as2.ftcdn.net/v2/jpg/02/88/14/59/1000_F_288145954_irZ6IG9Z8OgepVcOCdYxoHa4A5hJesiC.jpg"
          title="Dermatology"
          description="At our dermatology clinic, we care for the health and appearance of your skin, hair, and nails. Our expert dermatologists diagnose and treat a wide range of skin conditions, from acne to more complex issues like skin cancer. We'll offer treatment options based on the latest research and dermatological technology, so you can enjoy healthy skin."
        />
        <Card
          imageSrc="https://as1.ftcdn.net/v2/jpg/04/42/59/66/1000_F_442596699_0XttR3U6hw8Nk10mWEiXsQ6wqcaA4Osg.jpg"
          title="Endocrinology"
          description="Our endocrinologists are dedicated to hormonal balance and your overall well-being. If you're dealing with hormonal disorders such as diabetes, thyroid problems, or other imbalances, our team will provide accurate diagnosis and personalized treatment. We'll work with you to manage your conditions and enhance your quality of life."
        />
        <Card
          imageSrc="https://as1.ftcdn.net/v2/jpg/01/44/68/70/1000_F_144687058_hJh77bgUUDQFxUG88QPI3aAs30DTKHhs.jpg"
          title="Psychology"
          description="At our clinic, we understand the importance of mental health in your overall well-being. Our psychology and psychiatry professionals offer therapy and emotional support to address a wide range of challenges. Whether you're dealing with stress, anxiety, depression, or other mental disorders, our team will provide a safe environment to explore your thoughts and emotions, offering guidance and, if necessary, pharmacological treatment options under the supervision of a psychiatrist."
        />
      </div>
    </>
  );
};

export default Cards;
