import React, { useEffect, useState } from 'react'
import { BackGroundDecor } from '../../components/BackGroundDecor/BackGroundDecor'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { OrderList } from './components/OrderList/OrderList'
import { CertificateList } from './components/CertificateList/CertificateList'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import { GetApiHeaders } from '../../functions/getApiHeaders'

export const Сertificate = () => {
	const [sertificatData, setSertificatData] = useState([]);
	const [preceptsData, setPreceptsData] = useState([]);

	useEffect(() => {
		axios.get(getApiLink('/api/certificates/get'), {headers: GetApiHeaders()})
			.then(({data}) => {
				setSertificatData(data.data);
			})
			.catch((error) => {
				console.error('error data sertificate', error);
			})

		axios.get(getApiLink('/api/precepts/get'), {headers: GetApiHeaders()})
			.then(({data}) => {
				setPreceptsData(data.data);
			})
			.catch((error) => {
				console.error('error data precepts', error);
			})
	}, [])

	console.log(sertificatData);


	return (
		<>
			<BackGroundDecor />

			<section className="certificate_orders">

				<SectionTitle title={'Сертификаты и приказы'} ClassTitle={'certificate_orders__title container'}/>

				<article className="certificate_orders__orders orders container">
					<h3 className="orders__title title">
						Накази
					</h3>

					<OrderList preceptsData={preceptsData}/>

				</article>
				<article className="certificate_orders__certificates certificates container">
					<div className="certificates__decor" aria-hidden="true">
						<picture>
							<img src="img/decor-element.png" alt="" width="0" height="0" loading="lazy"/>
						</picture>
					</div>
					<div className="certificates__container">
						<h3 className="certificates__title title">Сертификаты</h3>

						<CertificateList sertificatData={sertificatData}/>

					</div>
				</article>
			</section>
		</>
	)
}
