import { useRef, useState } from 'react';

export default function ImageUploader() {
  // 파일 input ref
  const inputRef = useRef<HTMLInputElement>(null);
  // 선택된 이미지 URL (미리보기)
  const [preview, setPreview] = useState<string | null>(null);

  // 박스 클릭 시 파일창 열기
  const handleBoxClick = () => {
    inputRef.current?.click();
  };

  // 파일 선택 시 미리보기 생성
  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    // TODO: 서버 업로드 로직 넣기 (FormData 등에 file 첨부)
  };

  return (
    <div>
      {/* 숨긴 파일 input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* 클릭 영역 */}
      <div
        onClick={handleBoxClick}
        className={`flex h-64 w-full cursor-pointer items-center justify-center border-2 border-blue-500 ${preview ? 'p-0' : 'bg-gray-100'} `}
      >
        {preview ? (
          // 미리보기 이미지
          <img
            src={preview}
            alt="선택된 이미지"
            className="h-full w-full object-cover"
          />
        ) : (
          // 기본 안내 문구
          <span className="text-gray-500">이미지 등록하려면 누르세요</span>
        )}
      </div>
    </div>
  );
}
