import React from 'react'
import { support_7_24_TR } from '../../data/contentDataTR'
import Image from 'next/image';

const YediYirmidortTR = () => {
    const data = support_7_24_TR;
  return (
    <div className='py-20 bg-[#25456c] text-white'>
        <div className='container max-w-7xl mx-auto lg:px-20 sm:px-12 px-6'>
            {/* Title */}
            <h1 className='sm:text-4xl text-2xl sm:text-start text-center font-extrabold tracking-wide mb-10'>{data.title}</h1>

            {/* Content */}
            {/* <div dangerouslySetInnerHTML={{__html: data.content }} /> */}

            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 mb-10'>
                <div className='md:col-span-2'>
                    <h2 className='text-lg font-light tracking-wider'>Pi Global Co. olarak,</h2>
                    <p className='mb-8 sm:text-[16px] text-sm'>Müşterilerimizin gereksinimlerini anlamak ve en uygun çözümleri sunmak için satış öncesi danışmanlık hizmetimizle yanınızdayız. Uzman ekibimiz, ürünlerimiz ve hizmetlerimizle ilgili kapsamlı bilgi sunarak, müşterilerimizin bilinçli ve doğru kararlar vermesine yardımcı oluyor.</p>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2 mb-8'>
                            <h3 className='font-bold text-lg'>Hızlı Destek</h3>
                            <p className='sm:text-[16px] text-sm'>Müşterilerimiz herhangi bir sorunla karşılaştıklarında, 7 gün 24 saat hizmet veren destek ekibimiz hızlı ve etkili teknik destek sağlamaktadır.</p>
                        </div>
                        <div className='flex flex-col gap-2 mb-8'>
                            <h3 className='font-bold text-lg'>Ürün Kişiselleştirme</h3>
                            <p className='sm:text-[16px] text-sm'>Satış öncesi danışmanlık sürecinde, müşterilerimizin ihtiyaçlarına odaklanarak ürün ve hizmetlerimizi kişiselleştiriyoruz.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 mb-8'>
                        <h3 className='font-bold text-lg'>Fiyatlandırma ve Ödeme Seçenekleri Analizi</h3>
                        <p className='sm:text-[16px] text-sm'>Müşterilerimizin bütçe ve ödeme tercihlerini göz önünde bulundurarak, en uygun fiyatlandırma ve ödeme seçeneklerini belirlemek için titiz bir analiz yapıyoruz.</p>
                    </div>
                </div>
                
                <div
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NyUyRjI0JTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                    className='w-full md:h-full h-64'
                />
            </div>

            {/* Support Button */}
            <div className='relative flex sm:w-fit justify-center items-center w-full'>
                <div className='animate-ping bg-[#90302d] absolute inline-flex h-full w-full opacity-75'></div>
                <a href={`tel:+${data.phoneNumber}`} className='relative inline-flex
                py-5 px-10 bg-white text-[#25456c] sm:font-bold font-light text-center sm:text-lg text-sm sm:tracking-wider'>
                    {data.btn_title}
                </a>
            </div>
        </div>
    </div>
  )
}

export default YediYirmidortTR