import React from 'react'
import { SustainabilityHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import { Metadata } from 'next';
import { sustainabilityDataTR } from '../../data/sustainabilityDataTR';
import CircularBarTR from '../../components/corporate/sustainability/CircularBarTR';


export const metadata : Metadata = {
  title: "Sürdürülebilirlik",
  description: "Sürdürülebilirlik Projelerimizi Yakından Tanıyın"
}


const Surdurulebilirlik = () => {
    const data = SustainabilityHeroDataTR;
    const contentData = sustainabilityDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div className='container max-w-4xl mx-auto my-24 px-4'>
          <p className='sm:leading-10 sm:text-xl text-lg font-semibold'>Geleceği Koruyor, Sürdürülebilirliği Benimsiyoruz…</p>
          <br />
          <br />
          <p className='sm:leading-8 leading-7 sm:text-lg'>Gelecek nesillere daha yaşanabilir bir dünya bırakma hedefiyle, çevre dostu üretim ve tüketim modellerini benimsemekteyiz. "Az Tüket, Daha Fazla Dönüştür" ilkesini benimseyerek, yenilikçi stratejiler geliştiriyor ve süreçlerimizi sürekli olarak optimize ederek döngüsel ekonomiye katkıda bulunuyoruz.</p>
          <br />
          <br />
          <p className='sm:leading-8 leading-7 sm:text-lg'>"Döngüsel Ekonomi İçin Tasarımlar" yönergelerine uygun olarak, ürünlerimizi toplama, ayrıştırma, geri dönüştürme ve yeniden ekonomiye kazandırma süreçlerini titizlikle takip ediyoruz. Bu süreçler sayesinde, mevcut ve yeni geliştirdiğimiz ürünlerimizi rekabetçi kalite ve fiyatlarla potansiyel pazarlara sunuyor ve sürdürülebilir iş modelleri yaratıyoruz.</p>
          <br />
          <br />
          <p className='sm:leading-8 leading-7 sm:text-lg'>Yenilenebilir kaynaklardan elde edilen veya geri dönüştürülmüş hammaddeleri kullanarak ürettiğimiz esnek ambalaj malzemelerinin karbon ayak izini en aza indirmeyi hedefliyoruz. Bu çalışmalarımızla çevre üzerindeki olumsuz etkilerimizi azaltıyor ve daha sürdürülebilir bir üretim süreci sağlıyoruz.</p>
          <br />
          <br />
          <p className='sm:leading-8 leading-7 sm:text-lg'>Sürdürülebilirlik çalışmalarımızın koordinasyonu ve takibi, Sürdürülebilirlik Komitemiz tarafından titizlikle gerçekleştirilmektedir. Bu sayede, çevreye olan duyarlılığımızı arttırıyor ve daha yaşanabilir bir dünya için sürekli olarak çalışıyoruz.</p>
        </div>
        
        <div
        style={{
          backgroundImage: `url(${contentData.bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className='w-full sm:py-32 py-24 bg-[#25456c]/70 bg-blend-overlay flex flex-col justify-center items-center'>
          <CircularBarTR contentData={contentData} />
        </div>
    </div>
  )
}

export default Surdurulebilirlik