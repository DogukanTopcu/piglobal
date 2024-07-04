import React from 'react';
import { Metadata } from 'next';
import Hero from '@/app/common/Hero';
import { OurPrinciplesHeroDataTR } from "../../data/heroDataTR";
import { principlesDataTR } from '../../data/principlesDataTR';


export const metadata : Metadata = {
  title: "Prensiplerimiz",
}

const Prensiplerimiz = () => {
  const data = OurPrinciplesHeroDataTR;
  const contentData = principlesDataTR;
  return (
    <div>
      <Hero img={data.image} title={data.title} />
      
      {/* Content */}
      <div className='container max-w-4xl mx-auto my-24 px-4'>
        <p className='sm:leading-10 sm:text-xl text-lg font-semibold'>Pi Global Co. Olarak Prensiplerimiz Bizi İleriye Taşıyor</p>
        <br /><br />
        <p className='sm:leading-8 leading-7 sm:text-lg'>Pi Global Co. olarak var oluş sebebimiz, iç ve dış müşterilerimize değer yaratmak ve fayda sağlamaktır. Bu amaca ulaşmak için Prensiplerimiz bize yol gösterir. Ortak bir dil ve birleştirici bir yaklaşım geliştirmemize yardımcı olurlar. Ortak değerlerimizi vurgulayarak, bizi diğer şirketlerden farklı kılan güçlü yönlerimizi hatırlatırlar.</p>
        <br /><br />
        <p className='sm:leading-8 leading-7 sm:text-lg'>Kurum kültürümüz ile uyumlu olarak, çalışanlar, paydaşlar ve işverenler tarafından benimsenen Prensiplerimiz, birlikte çalışma ve ortak sonuçlar elde etme etkinliğimizi artırır. Pi Global Co. çalışanları olarak günlük hayatımızda derinden hissettiğimiz ve bizim için önemli olan değerleri yansıtırlar. Bu değerler ve onların önemi, Prensiplerimizin temelini oluşturur ve tüm çalışanlar için ilham ve motivasyon kaynağı olarak Pi Global Co.&apos;nun başarısının arkasındaki itici güç olurlar.</p>
        <br /><br />
        <p className='sm:leading-8 leading-7 sm:text-lg'>9 Prensipten oluşan Prensip Setimiz, işe alım, rotasyon, kariyer yönetimi, eğitim ve gelişim, iş analizi gibi insan kaynakları süreçlerimizin ve uygulamalarımızın temelini oluşturmaktadır. Bu Prensipler, işbirliği ve üretken bir çalışma ortamını destekleme taahhüdümüzün temel taşlarıdır.</p>
        <br /><br />
        <p className='sm:leading-8 leading-7 sm:text-lg'>Bu Prensiplere bağlı kalarak, her eylem ve kararımızın temel değerlerimizle uyumlu olmasını sağlarız, bu da ortak kimliğimizi güçlendirir ve sürekli büyüme ve başarıya yönlendirir.</p>
      </div>

      {/* Priciples */}
      <div
      style={{
        backgroundImage: `url(${contentData.bg_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className='w-full bg-[#25456c]/70 bg-blend-overlay flex flex-col justify-center items-center'>
        <div className='container max-w-4xl mx-auto px-4 overflow-x-hidden sm:py-32 py-24'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {
              contentData.principles.sort((x,y) => (x.order >= y.order) ? 1 : -1).map((p, idx) => {
                return (
                  <Card key={idx} title={p.principle} desc={p.desc} icon={p.icon} rotation={p.rotation} color={p.cardColor}  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}


interface Principle {
  title: string;
  icon: string;
  desc: string;
  rotation: string;
  color: string;
}
const Card = ({ title, icon, desc, rotation, color } : Principle) => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>

      <div className={`shadow-xl flex flex-col items-center justify-center gap-4 pt-4 pb-10 px-8 h-full ${rotation} ${color}`}>
        <div className='relative w-full flex justify-center z-20 py-4'>
          <div className='absolute top-0 bg-red-600 shadow-xl w-10 h-10 rounded-full' />
        </div>
        {/* <div
          style={{
            backgroundImage: `url(${icon})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className='w-12 h-12'
        /> */}
        <h3 className='text-center font-semibold text-lg'>{title}</h3>
        <desc className='text-center'>{desc}</desc>
      </div>
    </div>
  )
}

export default Prensiplerimiz