import React from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { OrderList } from './components/OrderList/OrderList'
import { CertificateList } from './components/CertificateList/CertificateList'

export const Сertificate = () => {
  return (
    <>
        <BackGroundDecor />

        <section className="certificate_orders">

            <SectionTitle title={'Сертификаты и приказы'}/>

			<article className="certificate_orders__orders orders container">
				<h3 className="orders__title title">
					Накази
				</h3>

                <OrderList/>

			</article>
			<article className="certificate_orders__certificates certificates container">
				<div className="certificates__decor" aria-hidden="true">
					<picture>
						<img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
					</picture>
				</div>
				<div className="certificates__container">
					<h3 className="certificates__title title">Сертификаты</h3>

                    <CertificateList/>

				</div>
			</article>
		</section>
    </>
  )
}
