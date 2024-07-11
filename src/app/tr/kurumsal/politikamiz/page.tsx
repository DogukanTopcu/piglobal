import React from 'react'
import { OurPolicyHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Teknolojilerimiz",
  description: "Teknolojilerimizi Yakından Tanıyın"
}


const Teknolojilerimiz = () => {
    const content = contentData;
    const data = OurPolicyHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div dangerouslySetInnerHTML={{__html: content }} />
    </div>
  )
}


const contentData = `<div class='container max-w-4xl mx-auto my-24 px-4'>
          <h1 class='sm:leading-10 sm:text-xl text-lg font-semibold'>Politikamız</h1>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>Pi Global Co. olarak, hizmet verdiğimiz tüm müşterilerimizin memnuniyetini en üst düzeye çıkarmayı amaçlıyoruz. Mevcut kaynakları etkin ve verimli kullanarak, müşterilerimizin ihtiyaç ve beklentilerini zamanında karşılıyoruz.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>Faaliyet planımızı TS EN ISO 9001 Kalite Yönetim Sistemi Standartları ve yürürlükteki yasal mevzuatlar çerçevesinde düzenli olarak güncelleyerek, hizmetlerimizi sürekli geliştiriyoruz. Uluslararası standartlara uygun, sürdürülebilir hizmet sunmak için tüm süreçlerimizi etkin kalite yönetim sistemlerine entegre ediyoruz.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>Yönetim sistemimizin etkinliğini sürekli izliyor, gerekli iyileştirmeleri gerçekleştirerek uygulanabilir şartları oluşturuyor ve yürütüyoruz. Personelimizin düzenli eğitimini sağlıyor, teknolojik yenilikleri yakından takip ediyor ve bu sayede sunulan hizmetlerin kalitesini artırıyoruz.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>Müşteri geri bildirimlerini etkin bir şekilde yönetiyor, fark yaratan ve değer katan işlemleri güçlendiriyor, değer yaratmayan işlemleri revize ediyor veya yürürlükten kaldırıyoruz. Bu politika, Pi Global Co.'nun kaliteye verdiği önemin bir göstergesi olup, tüm çalışanlarımız tarafından benimsenmiş ve uygulanmaktadır. Hizmetlerimizde mükemmelliği arayışımızı sürdürmekte ve bu hedef doğrultusunda çalışmaktayız.</p>
        </div>`

export default Teknolojilerimiz