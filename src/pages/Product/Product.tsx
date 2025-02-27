import { Await, useLoaderData } from 'react-router-dom';
import { Product as IProduct } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export function Product() {
	const data = useLoaderData() as { data: IProduct };

	return (
		<>
			<Suspense fallback={'Загрузка...'}>
				<Await resolve={data.data}>
					{({ data }: { data: IProduct }) => <>Product – {data.name}</>}
				</Await>
			</Suspense>
		</>
	);
}
