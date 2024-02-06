function bannerImages() {
    var images = document.querySelectorAll('.m_banner_img');

    images.forEach(function (img) {
        // 이미지가 로드된 후에 실행되도록 이벤트 핸들러 설정
        img.addEventListener('load', function () {
            // Canvas를 동적으로 생성
            var canvas = document.createElement('canvas');
            document.body.appendChild(canvas);

            var ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // 이미지 좌측 상단 픽셀 색상 추출
            var pixel = ctx.getImageData(0, 0, 1, 1).data;

            // RGB 값을 가져옴
            var rgb = 'rgb(' + pixel[0] + ', ' + pixel[1] + ', ' + pixel[2] + ')';

            // 부모 엘리먼트의 배경색 설정
            img.parentNode.style.backgroundColor = rgb;

            // 추출이 완료되면 Canvas 엘리먼트 제거
            document.body.removeChild(canvas);
        });

        // 이미지가 로드되기 전에 이벤트 핸들러가 등록되도록 함
        img.src = img.src;
    });
}