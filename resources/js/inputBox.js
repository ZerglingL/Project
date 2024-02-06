function selectBox() {
    const label = document.querySelectorAll('.selectLabel');
    // 클릭 이벤트가 document 전체에서 발생했을 때의 처리
    document.addEventListener('click', e => {
        label.forEach(lb => {
            // 클릭된 요소가 현재 라벨 또는 라벨의 하위 요소인 경우는 무시
            if (lb.contains(e.target)) {
                return;
            }
            // 클릭된 요소가 셀렉트 박스의 일부가 아니면 'active' 클래스 제거
            if (lb.parentNode.classList.contains('active')) {
                lb.parentNode.classList.remove('active');
            }
        });
    });
    label.forEach(function (lb) {
        lb.addEventListener('click', e => {
            let optionList = lb.nextElementSibling;
            let optionItems = optionList.querySelectorAll('.optionItem');
            clickLabel(lb, optionItems);
        })
    });
    const clickLabel = (lb, optionItems) => {
        if (lb.parentNode.classList.contains('active')) {
            lb.parentNode.classList.remove('active');
            optionItems.forEach((opt) => {
                opt.removeEventListener('click', () => {
                    handleSelect(lb, opt)
                })
            })
        } else {
            lb.parentNode.classList.add('active');
            optionItems.forEach((opt) => {
                opt.addEventListener('click', () => {
                    handleSelect(lb, opt)
                })
            })
        }
    }
    const handleSelect = (lb, opt) => {
        lb.previousElementSibling.value = lb.innerHTML = opt.textContent;
        lb.parentNode.classList.remove('active');
    }
}