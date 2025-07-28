import HomeTile from '@/components/molecules/HomeTile';

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <header>
        <div className="flex h-20 items-center justify-between border-t-4 border-b-1">
          <div>2025.08.12(화)</div>
          <div>백과(자)사전</div>
          <div>searchIcon</div>
        </div>
      </header>
      <main className="flex-1">
        <HomeTile />
        <section className="flex flex-row gap-10">
          <section className="flex min-w-fit flex-1 flex-col">
            <p>6월 출시일 순</p>
            <ul className="flex flex-col gap-5">
              {Array.from({ length: 21 }).map((_, idx) => (
                <li
                  key={idx}
                  className="flex h-6 items-center justify-between gap-2.5 text-xl"
                >
                  <div>
                    icon<span>빅파이</span>
                  </div>
                  <hr className="flex w-1 flex-1"></hr>
                  <div>파이(달콤)</div>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <div className="flex justify-between">
              <p>
                <span>빅파이</span>
                <span>파이</span>
                <span>달콤</span>
                <span>달콤</span>
                <span>120kcal</span>
              </p>
              <div>상세보기</div>
            </div>
            <div className="h-[900px] w-[900px] bg-gray-600">이미지</div>
          </section>
        </section>
      </main>
      <footer>
        <section>
          <span>개인정보 처리 방침</span> | <span>이용약관</span>
          <div>
            상호명:(사업자명)
            <br />
            대표자:(대표자 성) (대표자 이름)
            <br />
            이메일 :<br />
            @Inc All right
            <br />
            reserved
            <br />
          </div>
        </section>
      </footer>
    </div>
  );
}
