import React from 'react';
import { Metadata } from 'next';
import { InternshipHeroDataTR } from "../../data/heroDataTR";
import Hero from '@/app/common/Hero';


export const metadata : Metadata = {
  title: "Staj",
}

const Staj = () => {
  const content = contentData;
  const data = InternshipHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div dangerouslySetInnerHTML={{__html: content }} />
    </div>
  )
}

const contentData = `<div class='container max-w-4xl mx-auto my-24 px-4'>
          <h1 class='sm:leading-10 sm:text-xl text-lg font-semibold'>Pi Global Co. Staj Programı</h1>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>Pi Global Co. olarak staj programımızı “potansiyel çalışan adaylarının deneyimi” olarak değerlendiriyoruz. Eğitimine devam eden potansiyel çalışan adaylarımızın bakış açısını, teknik bilgilerini ve enerjilerini önemsiyoruz. Üniversite staj programımızda, öğrencilerin profesyonel yaşamın bir parçası olmalarını sağlamayı amaçlıyoruz. Deneyimimizden faydalanmak ve kariyer yolculuklarında iyi bir staj deneyimi yaşamak isteyen üniversite öğrencilerine kapılarımızı açıyoruz.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>Zorunlu staj yükümlülüğü bulunan üniversite öğrencilerine, yaz dönemi staj programı başvurularını takiben titiz bir seçim süreci ile staj fırsatı sağlıyoruz. Staj süresince öğrenciler, alanlarında deneyimli profesyonellerle çalışarak hem teorik bilgilerini pratiğe dökme hem de iş hayatına dair önemli tecrübeler kazanma imkanı buluyorlar. Ayrıca, staj süresi boyunca düzenlediğimiz eğitim ve seminerlerle öğrencilerin kişisel ve mesleki gelişimlerine katkıda bulunuyoruz.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>Staj programlarına başvurmak için linke tıklayarak <a class="text-blue-700 underline" href="/tr/iletisim">iletişime</a> geçebilir ve başvuru yapabilirsiniz.</p>
        </div>`

export default Staj