type PageProps = {
  params: { id: string };
  // searchParams?: { [key: string]: string | string[] }  // 쿼리스트링도 받고 싶다면
};

export default async function SnackDetailPage({ params }: PageProps) {
  console.log(params.id);

  return (
    <main>
      <section className="flex flex-row">
        <figure className="mb-4">
          <div className="h-[300px] w-[300px] bg-gray-600">이미지</div>
          <figcaption className="text-sm text-gray-500">젤리</figcaption>
        </figure>
        <section>
          <header>
            <h4>젤리</h4>
            <div className="flex flex-row">
              <h1>마이구미 복숭아</h1>
              <button>좋아요 아이콘</button>
            </div>
          </header>
          <section>
            <dl className="grid grid-cols-1 gap-x-4">
              <div>
                <dt id="brand-label" className="sr-only">
                  제조사
                </dt>
                <dd aria-labelledby="brand-label">오리온</dd>
              </div>
              <div>
                <dt id="price-label" className="sr-only">
                  가격
                </dt>
                <dd aria-labelledby="price-label">1000원대</dd>
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
            <p>
              출시일 <span>25.09.09</span>
            </p>
          </section>
          <section aria-labelledby="taste-tags">
            <ul className="flex gap-2">
              <li className="rounded border px-2 py-1">상큼</li>
              <li className="rounded border px-2 py-1">달콤</li>
              <li className="rounded border px-2 py-1">짭짤</li>
              <li className="rounded border px-2 py-1">매콤</li>
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
