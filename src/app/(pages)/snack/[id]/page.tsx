import { BRAND_CODE } from '@/constants/Brand';
import { SNACK_CATEGORY_CODE_TO_NAME } from '@/constants/SnackCategory';
import { TASTE_CODE_TO_NAME } from '@/constants/Tastes';
import { getSnackFindOne } from '@/services/snack/sncakService';
import { transpertSnackPriceRange } from '@/utils/snackUtils';
import Image from 'next/image';

type PageProps = {
  params: { id: string };
  // searchParams?: { [key: string]: string | string[] }  // 쿼리스트링도 받고 싶다면
};

export default async function SnackDetailPage({ params }: PageProps) {
  const { id } = await params;

  const data = await getSnackFindOne(+id);
  const snack = data.data;

  return (
    <main>
      <section className="flex flex-row gap-3">
        <figure className="mb-4">
          <div className="relative h-[300px] w-[300px]">
            <Image
              fill
              src={snack.snackImg}
              alt="snackImg"
              style={{ objectFit: 'contain' }}
            ></Image>
          </div>
          <figcaption className="sr-only text-sm text-gray-500">
            {SNACK_CATEGORY_CODE_TO_NAME[snack.snackTypeCode]}
          </figcaption>
        </figure>
        <section>
          <header>
            <h4> {SNACK_CATEGORY_CODE_TO_NAME[snack.snackTypeCode]}</h4>
            <div className="flex flex-row">
              <h1>{snack.name}</h1>
              <button>좋아요 아이콘</button>
            </div>
          </header>
          <section>
            <dl className="grid grid-cols-1 gap-x-4">
              <div>
                <dt id="brand-label" className="sr-only">
                  제조사
                </dt>
                <dd aria-labelledby="brand-label">
                  {BRAND_CODE[snack.brandCode]}
                </dd>
              </div>
              <div>
                <dt id="price-label" className="sr-only">
                  가격
                </dt>
                <dd aria-labelledby="price-label">
                  {transpertSnackPriceRange(snack.price)} 대
                </dd>
              </div>
            </dl>
          </section>
          <section className="flex flex-row">
            <h4>용량 칼로리</h4>
            <table>
              <tbody>
                <tr>
                  <td>100g</td>
                  <td>200kcal</td>
                </tr>
                <tr>
                  <td>300g</td>
                  <td>600kcal</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <p>
              출시일{' '}
              <span>
                {snack.releaseAt instanceof Date
                  ? snack.releaseAt.toLocaleDateString()
                  : snack.releaseAt}
              </span>
            </p>
          </section>
          <section aria-labelledby="taste-tags">
            <ul className="flex gap-2">
              {snack.tasteCodes.map((code) => (
                <li key={code} className="rounded border px-2 py-1">
                  {TASTE_CODE_TO_NAME[code]}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      <section className="flex flex-col">
        <h3>에디터의 코멘트</h3>
        <div className="flex flex-row gap-2.5">
          <blockquote>
            <p>깔끔하고 맛있어요</p>
            <footer>— 에디터 A</footer>
          </blockquote>
          <blockquote>
            <p>깔끔하고 맛있어요</p>
            <footer>— 에디터 A</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
