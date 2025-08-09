import { SnackTasteTagList } from '@/components/molecules/SnackTasteTagList';
import { BRAND_CODE } from '@/constants/Brand';
import { SNACK_CATEGORY_CODE_TO_NAME } from '@/constants/SnackCategory';
import { getSnackFindOne } from '@/services/snack/sncakService';
import { transpertSnackPriceRange } from '@/utils/snackUtils';
import { Heart } from 'lucide-react';
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
      <section className="flex flex-row gap-14">
        <figure className="mb-4">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl">
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
        <section className="text-[#2E1515]">
          <header className="mb-5 flex flex-col gap-5.5">
            <h4 className="">
              {SNACK_CATEGORY_CODE_TO_NAME[snack.snackTypeCode]}
            </h4>
            <div className="flex flex-row">
              <h1 className="mr-12 text-2xl font-semibold">{snack.name}</h1>
              <Heart size={24} />
            </div>
          </header>
          <section className="mb-4.5">
            <dl className="grid grid-cols-1 gap-x-4">
              <div className="mb-4">
                <dt id="brand-label" className="sr-only">
                  제조사
                </dt>
                <dd aria-labelledby="brand-label text-[#2E1515]">
                  {BRAND_CODE[snack.brandCode]}
                </dd>
              </div>
              <div>
                <dt id="price-label" className="sr-only">
                  가격
                </dt>
                <dd aria-labelledby="price-label">
                  <span className="text-xl font-semibold">
                    {transpertSnackPriceRange(snack.price)}
                  </span>
                  원 대
                </dd>
              </div>
            </dl>
          </section>
          <section>
            <table className="border-separate border-spacing-x-0 border-spacing-y-[12px] [&>tbody>tr>td+td]:pl-[18px] [&>tbody>tr>td:first-of-type]:pl-[18px]">
              <tbody>
                <tr>
                  <th
                    scope="rowgroup"
                    rowSpan={2} // 데이터 줄 수만큼 지정
                    className="pr-4 text-left align-top font-normal"
                  >
                    용량/칼로리
                  </th>
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
          <section className="mb-5">
            <p>
              출시일
              <span className="pl-2">
                {snack.releaseAt instanceof Date
                  ? snack.releaseAt.toLocaleDateString()
                  : '25.09.09'}
              </span>
            </p>
          </section>
          <section aria-labelledby="taste-tags">
            <SnackTasteTagList tasteCodes={snack.tasteCodes} />
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
